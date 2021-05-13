import { DragonBonesData } from "../model/DragonBonesData";
import { GeometryData } from "../model/DisplayData";
import { ObjectDataParser } from "./ObjectDataParser";
import { AnimationData } from "../model/AnimationData";
export declare class BinaryDataParser extends ObjectDataParser {
    private _binaryOffset;
    private _binary;
    private _intArrayBuffer;
    private _frameArrayBuffer;
    private _timelineArrayBuffer;
    private _inRange;
    private _decodeUTF8;
    private _parseBinaryTimeline;
    protected _parseAnimation(rawData: any): AnimationData;
    protected _parseGeometry(rawData: any, geometry: GeometryData): void;
    protected _parseArray(rawData: any): void;
    parseDragonBonesData(rawData: any, scale?: number): DragonBonesData | null;
    private static _binaryDataParserInstance;
    static getInstance(): BinaryDataParser;
}
