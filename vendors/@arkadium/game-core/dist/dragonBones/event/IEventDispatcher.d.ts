import { EventObject } from "./EventObject";
export declare type EventStringType = string | "start" | "loopComplete" | "complete" | "fadeIn" | "fadeInComplete" | "fadeOut" | "fadeOutComplete" | "frameEvent" | "soundEvent";
export interface IEventDispatcher {
    hasDBEventListener(type: EventStringType): boolean;
    dispatchDBEvent(type: EventStringType, eventObject: EventObject): void;
    addDBEventListener(type: EventStringType, listener: Function, thisObject: any): void;
    removeDBEventListener(type: EventStringType, listener: Function, thisObject: any): void;
}
