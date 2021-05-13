const path = require('path');
const {createCanvas, loadImage} = require('canvas');
const btoa = require('btoa');
const Atlas = require('./Atlaspack');
const {Outline, SVGParser, SVGPath} = require("./SVGPath");

class SpritesheetBuilder {
    constructor(size, inputJsonPath, excludeBitmaps, scaleBitmap, scaleShape) {
        this._size = size;
        this._inputJsonPath = inputJsonPath;
        this._inputJson = require(path.resolve(process.cwd(), inputJsonPath));
        this._outputName = path.parse(inputJsonPath).name;
        this._excludeBitmaps = Array.isArray(excludeBitmaps) ? excludeBitmaps : [];
        this._scaleBitmap = scaleBitmap;
        this._scaleShape = scaleShape;

        this._currentBitmapsAtlasIndex = 0;
        this._currentShapesAtlasIndex = 0;

        this._bitmapsCanvases = [];
        this._shapesCanvases = [];
        this._bitmapsAtlases = [];
        this._shapesAtlases = [];

        if (this._inputJson.Bitmaps.length > 0) {
            this._bitmapsCanvases[0] = createCanvas(size, size);
            this._bitmapsAtlases[0] = new Atlas(this._bitmapsCanvases[0])
        }

        if (this._inputJson.Shapes.length > 0) {
            this._shapesCanvases[0] = createCanvas(size, size);
            this._shapesAtlases[0] = new Atlas(this._shapesCanvases[0])
        }

        this._frames = {
            bitmaps: [],
            shapes: []
        };
    }

    async build() {
        await this.addImages();

        return this.getOutput();
    }

    async addImages() {
        const bitmaps = this._inputJson.Bitmaps;

        for (let bitmap of bitmaps) {
            if (~this._excludeBitmaps.indexOf(bitmap.src)) {
                continue;
            }

            const image = await loadImage(`${path.parse(this._inputJsonPath).dir}/${bitmap.src}`);

            image.id = bitmap.assetId;
            image.nodeName = 'IMG';

            let rect = this._bitmapsAtlases[this._currentBitmapsAtlasIndex].pack(image, this._scaleBitmap).rect;

            if (!rect) {
                this._currentBitmapsAtlasIndex++;
                this._bitmapsCanvases[this._currentBitmapsAtlasIndex] = createCanvas(this._size, this._size);
                this._bitmapsAtlases[this._currentBitmapsAtlasIndex] = new Atlas(this._bitmapsCanvases[this._currentBitmapsAtlasIndex]);

                rect = this._bitmapsAtlases[this._currentBitmapsAtlasIndex].pack(image, this._scaleBitmap).rect;
            }

            if (!this._frames.bitmaps[this._currentBitmapsAtlasIndex]) {
                this._frames.bitmaps[this._currentBitmapsAtlasIndex] = {};
            }

            this._frames.bitmaps[this._currentBitmapsAtlasIndex][image.id] = {
                frame: {
                    x: rect.x,
                    y: rect.y,
                    w: rect.w,
                    h: rect.h
                },
                sourceSize: {
                    w: parseInt(rect.w * 1/this._scaleBitmap),
                    h: parseInt(rect.h * 1/this._scaleBitmap)
                }
            };
        }

        const shapes = this._inputJson.Shapes;

        for (let shape of shapes) {
            for (let i = 0; i < shape.paths.length; i++) {
                const path = shape.paths[i];
                const textureSource = this.buildTextureSource(path, 1);
                const image = await loadImage(textureSource.svgBase64);

                image.id = `${shape.assetId}_${i}`;
                image.nodeName = 'IMG';

                let rect = this._shapesAtlases[this._currentShapesAtlasIndex].pack(image, this._scaleShape).rect;

                if (!rect) {
                    this._currentShapesAtlasIndex++;
                    this._shapesCanvases[this._currentShapesAtlasIndex] = createCanvas(this._size, this._size);
                    this._shapesAtlases[this._currentShapesAtlasIndex] = new Atlas(this._shapesCanvases[this._currentShapesAtlasIndex]);

                    rect = this._shapesAtlases[this._currentShapesAtlasIndex].pack(image, this._scaleShape).rect;
                }

                if (!this._frames.shapes[this._currentShapesAtlasIndex]) {
                    this._frames.shapes[this._currentShapesAtlasIndex] = {};
                }

                this._frames.shapes[this._currentShapesAtlasIndex][image.id] = {
                    frame: {
                        x: rect.x,
                        y: rect.y,
                        w: rect.w,
                        h: rect.h
                    },
                    offset: {
                        x: textureSource.offsetX,
                        y: textureSource.offsetY
                    },
                    sourceSize: {
                        w: parseInt(rect.w * (1/this._scaleShape)),
                        h: parseInt(rect.h * (1/this._scaleShape))
                    }
                };
            }
        }
    }

    getOutput() {
        const bitmaps = [];

        for (let i = 0; i < this._bitmapsCanvases.length; i++) {
            const canvas = this._bitmapsCanvases[i];

            const bitmapsFileName = `${this._outputName}_bitmaps_${i}`;
            const imageBitmaps = canvas.toDataURL().replace(/^data:image\/png;base64,/, '');
            const bitmapsData = JSON.stringify({
                frames: this._frames.bitmaps[i],
                meta: {
                    app: "PixiAnimate",
                    scale: this._scaleBitmap,
                    image: `spritesheet/${bitmapsFileName}.png`,
                    size: {
                        w: this._size,
                        h: this._size
                    }
                }
            });

            bitmaps.push({
                name: bitmapsFileName,
                json: bitmapsData,
                image: imageBitmaps
            });
        }


        const shapes = [];

        for (let i = 0; i < this._shapesCanvases.length; i++) {
            const canvas = this._shapesCanvases[i];

            const shapesFileName = `${this._outputName}_shapes_${i}`;
            const imageShapes = canvas.toDataURL().replace(/^data:image\/png;base64,/, '');
            const shapesData = JSON.stringify({
                frames: this._frames.shapes[i],
                meta: {
                    app: "PixiAnimate",
                    scale: this._scaleShape,
                    image: `spritesheet/${shapesFileName}.png`,
                    size: {
                        w: this._size,
                        h: this._size
                    }
                }
            });

            shapes.push({
                name: shapesFileName,
                json: shapesData,
                image: imageShapes
            });
        }

        return {
            bitmaps: bitmaps,
            shapes: shapes
        }
    }

    buildTextureSource(path, scale) {
        const oldPathString = path.d.join(" ").toUpperCase();
        const oldPath = SVGPath.parse(oldPathString);

        if (path.thickness) {
            oldPath.bounds.xMin -= path.thickness / 2;
            oldPath.bounds.yMin -= path.thickness / 2;

            oldPath.bounds.xMax += path.thickness / 2;
            oldPath.bounds.yMax += path.thickness / 2;
        }

        const offsetX = -oldPath.bounds.xMin;
        const offsetY = -oldPath.bounds.yMin;

        const parser = new SVGParser(new Outline());

        parser.parse(`${oldPathString}`, offsetX, offsetY);

        const adjustedPath = parser.receiver.toSVG();

        const width = Math.abs(oldPath.bounds.xMin - oldPath.bounds.xMax);
        const height = Math.abs(oldPath.bounds.yMin - oldPath.bounds.yMax);

        if (width < 1 || height < 1) {
            const transparentImage1x1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
            return {
                svgBase64: transparentImage1x1,
                offsetX: 0,
                offsetY: 0
            }
        }

        const svgBase64 = this.buildSvgBase64(path, adjustedPath, width, height, offsetX, offsetY, scale);

        return {
            svgBase64: svgBase64,
            offsetX: -offsetX,
            offsetY: -offsetY
        }
    }

    buildSvgBase64(path, adjustedPath, width, height, offsetX, offsetY, scale) {
        width *= scale;
        height *= scale;

        let svgString = `<svg height="${height}" width="${width}" xmlns="http://www.w3.org/2000/svg"><g transform="scale(${scale})">`;

        let pathAttributes = ``;
        let colorValue;

        if (path.linearGradient || path.radialGradient) {
            let gradient;

            if (path.linearGradient) {
                gradient = path.linearGradient;

                svgString += `<linearGradient id="gradient" gradientUnits="userSpaceOnUse" spreadMethod="${gradient.spreadMethod}" x1="${gradient.x1 + offsetX}" 
                            y1="${gradient.y1 + offsetY}" x2="${gradient.x2 + offsetX}" y2="${gradient.y2 + offsetY}">`;
            } else {
                gradient = path.radialGradient;
                const gradientTransform = gradient.gradientTransform;

                svgString += `<radialGradient id="gradient" gradientUnits="userSpaceOnUse" spreadMethod="${gradient.spreadMethod}" cx="${gradient.cx}" 
                            cy="${gradient.cy}" r="${gradient.r}" fx="${gradient.fx}" fy="${gradient.fy}" 
                            gradientTransform="matrix(${gradientTransform.a}, ${gradientTransform.b}, ${gradientTransform.c}, ${gradientTransform.d}, ${gradientTransform.tx + offsetX}, ${gradientTransform.ty + offsetY})">`;
            }

            for (let stop of gradient.stop) {
                svgString += `<stop offset="${stop.offset}%" stop-color="${stop.stopColor}" stop-opacity="${stop.stopOpacity}"></stop>`;
            }

            if (path.linearGradient) {
                svgString += `</linearGradient>`;
            } else {
                svgString += `</radialGradient>`;
            }

            colorValue = `url(#gradient)`;
        }

        if (path.stroke) {
            if (!colorValue) {
                colorValue = path.color;
            }

            pathAttributes += ` stroke="${colorValue}"`;
            pathAttributes += ` fill="none"`;

            if (path.alpha) {
                pathAttributes += ` stroke-opacity="${path.alpha}"`;
            }

            if (path.thickness) {
                pathAttributes += ` stroke-width="${path.thickness}"`;
            }

            if (path.linejoin) {
                pathAttributes += ` stroke-linejoin="${path.linejoin}"`;
            }

            if (path.linecap) {
                pathAttributes += ` stroke-linecap="${path.linecap}"`;
            }

            if (path.miterLimit) {
                pathAttributes += ` stroke-miterlimit="${path.miterLimit}"`;
            }
        } else {
            if (!colorValue) {
                colorValue = path.color;
            }

            pathAttributes += ` fill="${colorValue}"`;

            if (path.alpha) {
                pathAttributes += ` fill-opacity="${path.alpha}"`;
            }
        }

        svgString += `<path ${pathAttributes} d="${adjustedPath}" />`;
        svgString += `</g></svg>`;

        return 'data:image/svg+xml;base64,' + btoa(svgString);
    }
}

module.exports = SpritesheetBuilder;
