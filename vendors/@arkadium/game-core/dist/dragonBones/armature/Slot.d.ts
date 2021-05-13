import { TransformObject } from "./TransformObject";
import { Bone } from "./Bone";
import { Armature } from "./Armature";
import { BoundingBoxData } from "../model/BoundingBoxData";
import { BaseObject } from "../core/BaseObject";
import { SlotData } from "../model/ArmatureData";
import { DisplayData, GeometryData } from "../model/DisplayData";
import { TextureData } from "../model/TextureAtlasData";
import { BlendMode } from "../core/DragonBones";
import { ColorTransform } from "../geom/ColorTransform";
import { Matrix } from "../geom/Matrix";
export declare class DisplayFrame extends BaseObject {
    static toString(): string;
    rawDisplayData: DisplayData | null;
    displayData: DisplayData | null;
    textureData: TextureData | null;
    display: any | Armature | null;
    readonly deformVertices: Array<number>;
    protected _onClear(): void;
    updateDeformVertices(): void;
    getGeometryData(): GeometryData | null;
    getBoundingBox(): BoundingBoxData | null;
    getTextureData(): TextureData | null;
}
export declare abstract class Slot extends TransformObject {
    displayController: string | null;
    protected _displayDataDirty: boolean;
    protected _displayDirty: boolean;
    protected _geometryDirty: boolean;
    protected _textureDirty: boolean;
    protected _visibleDirty: boolean;
    protected _blendModeDirty: boolean;
    protected _zOrderDirty: boolean;
    _colorDirty: boolean;
    _verticesDirty: boolean;
    protected _transformDirty: boolean;
    protected _visible: boolean;
    protected _blendMode: BlendMode;
    protected _displayIndex: number;
    protected _animationDisplayIndex: number;
    protected _cachedFrameIndex: number;
    _zOrder: number;
    _zIndex: number;
    _pivotX: number;
    _pivotY: number;
    protected readonly _localMatrix: Matrix;
    readonly _colorTransform: ColorTransform;
    readonly _displayFrames: Array<DisplayFrame>;
    readonly _geometryBones: Array<Bone | null>;
    _slotData: SlotData;
    _displayFrame: DisplayFrame | null;
    _geometryData: GeometryData | null;
    protected _boundingBoxData: BoundingBoxData | null;
    protected _textureData: TextureData | null;
    protected _rawDisplay: any;
    protected _meshDisplay: any;
    protected _display: any | null;
    protected _childArmature: Armature | null;
    protected _parent: Bone;
    _cachedFrameIndices: Array<number> | null;
    protected _onClear(): void;
    protected abstract _initDisplay(value: any, isRetain: boolean): void;
    protected abstract _disposeDisplay(value: any, isRelease: boolean): void;
    protected abstract _onUpdateDisplay(): void;
    protected abstract _addDisplay(): void;
    protected abstract _replaceDisplay(value: any): void;
    protected abstract _removeDisplay(): void;
    protected abstract _updateZOrder(): void;
    abstract _updateVisible(): void;
    protected abstract _updateBlendMode(): void;
    protected abstract _updateColor(): void;
    protected abstract _updateFrame(): void;
    protected abstract _updateMesh(): void;
    protected abstract _updateTransform(): void;
    protected abstract _identityTransform(): void;
    protected _hasDisplay(display: any): boolean;
    _isBonesUpdate(): boolean;
    _updateAlpha(): void;
    protected _updateDisplayData(): void;
    protected _updateDisplay(): void;
    protected _updateGlobalTransformMatrix(isCache: boolean): void;
    _setDisplayIndex(value: number, isAnimation?: boolean): void;
    _setZOrder(value: number): boolean;
    _setColor(value: ColorTransform): boolean;
    init(slotData: SlotData, armatureValue: Armature, rawDisplay: any, meshDisplay: any): void;
    update(cacheFrameIndex: number): void;
    invalidUpdate(): void;
    updateTransformAndMatrix(): void;
    replaceRawDisplayData(displayData: DisplayData | null, index?: number): void;
    replaceDisplayData(displayData: DisplayData | null, index?: number): void;
    replaceTextureData(textureData: TextureData | null, index?: number): void;
    replaceDisplay(value: any | Armature | null, index?: number): void;
    containsPoint(x: number, y: number): boolean;
    intersectsSegment(xA: number, yA: number, xB: number, yB: number, intersectionPointA?: {
        x: number;
        y: number;
    } | null, intersectionPointB?: {
        x: number;
        y: number;
    } | null, normalRadians?: {
        x: number;
        y: number;
    } | null): number;
    getDisplayFrameAt(index: number): DisplayFrame;
    get visible(): boolean;
    set visible(value: boolean);
    get displayFrameCount(): number;
    set displayFrameCount(value: number);
    get displayIndex(): number;
    set displayIndex(value: number);
    get name(): string;
    get displayList(): Array<any>;
    set displayList(value: Array<any>);
    get slotData(): SlotData;
    get boundingBoxData(): BoundingBoxData | null;
    get rawDisplay(): any;
    get meshDisplay(): any;
    get display(): any;
    set display(value: any);
    get childArmature(): Armature | null;
    set childArmature(value: Armature | null);
    get parent(): Bone;
    getDisplay(): any;
    setDisplay(value: any): void;
}