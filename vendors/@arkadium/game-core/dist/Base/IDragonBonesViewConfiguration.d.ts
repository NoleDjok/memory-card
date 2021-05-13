import { _IViewBaseConfiguration } from "./_ViewBase";
import { IEventConfiguration } from "./IViewConfiguration";
export interface IBoundingBoxesConfiguration {
    [key: string]: {
        slotName: string;
    };
}
export declare enum SpriteTypeEnum {
    ARMATURE = 1,
    PRIVATE = 2,
    MOVIECLIP = 3
}
export interface ISpritesConfiguration {
    [key: string]: {
        slotName: string;
        type?: SpriteTypeEnum;
    };
}
export interface ISlotsConfiguration {
    [key: string]: {
        slotName: string;
    };
}
export declare enum AnimationsEventsTypeEnum {
    START = "start",
    LOOP_COMPLETE = "loopComplete",
    COMPLETE = "complete",
    FADE_IN = "fadeIn",
    FADE_IN_COMPLETE = "fadeInComplete",
    FADE_OUT = "fadeOut",
    FADE_OUT_COMPLETE = "fadeOutComplete",
    FRAME_EVENT = "frameEvent",
    SOUND_EVENT = "soundEvent"
}
export interface IAnimationsEventsConfiguration {
    animationName: string;
    event: ((event: any) => void) | string;
    type: AnimationsEventsTypeEnum;
}
export interface IAnimationsConfiguration {
    [key: string]: string;
}
export interface IDragonBonesViewConfiguration extends _IViewBaseConfiguration {
    armatureName?: string;
    slot?: string;
    replace?: boolean;
    textures?: {
        [key: string]: string;
    };
    sprites?: ISpritesConfiguration;
    boundingBoxes?: IBoundingBoxesConfiguration;
    slots?: ISlotsConfiguration;
    events?: Array<IEventConfiguration>;
    animations?: IAnimationsConfiguration;
    animationsEvents?: Array<IAnimationsEventsConfiguration>;
    config?: IDragonBonesViewConfiguration;
}
