/// <reference types="pixi.js" />
import { PixiArmatureDisplay } from "./PixiArmatureDisplay";
import { PixiTextureAtlasData } from "./PixiTextureAtlasData";
import { BaseFactory, BuildArmaturePackage } from "../factory/BaseFactory";
import { DataParser } from "../parser/DataParser";
import { Armature } from "../armature/Armature";
import { SlotData } from "../model/ArmatureData";
import { Slot } from "../armature/Slot";
export declare class PixiFactory extends BaseFactory {
    private static _dragonBonesInstance;
    private static _factory;
    static clockHandler(frameRate: number): void;
    static get factory(): PixiFactory;
    constructor(dataParser?: DataParser | null);
    protected _buildTextureAtlasData(textureAtlasData: PixiTextureAtlasData | null, textureAtlas: PIXI.BaseTexture | null): PixiTextureAtlasData;
    protected _buildArmature(dataPackage: BuildArmaturePackage): Armature;
    protected _buildSlot(_dataPackage: BuildArmaturePackage, slotData: SlotData, armature: Armature): Slot;
    buildArmatureDisplay(armatureName: string, dragonBonesName?: string, skinName?: string, textureAtlasName?: string): PixiArmatureDisplay | null;
    getTextureDisplay(textureName: string, textureAtlasName?: string | null): PIXI.Sprite | null;
    get soundEventManager(): PixiArmatureDisplay;
}
