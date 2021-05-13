/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { Instance } from "../instances/Instance";
import { MovieClipBaseFactory } from "../factories/MovieClipFactory";
import { PixiAnimateFactory } from "../factories/PixiAnimateFactory";
import { Container } from "./Container";
export declare class Timeline extends Container {
    static STAGE: string;
    static GRAPHIC: string;
    static MOVIE_CLIP: string;
    protected totalFrames: number;
    constructor(library: any, data: any);
    render(animate: PixiAnimateFactory): void;
    getContents(movieClip: MovieClipBaseFactory): void;
    renderInstance(instance: Instance, movieClip: MovieClipBaseFactory): void;
    getFrameScripts(movieClip: MovieClipBaseFactory): void;
    getLabels(): {};
    getSounds(): {};
    create(id: number): Instance;
}
