/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
export declare const makeModelEventEmitter: (model: any, opt_allowedEVents: any) => void;
export declare class ModelEvents {
    dispatch(model: any, eventName: string, ...params: any[]): void;
    on(model: any, eventType: string, callback: Function, context: any): void;
    off(model: any, eventType: any, callback: any): void;
    trigger(model: any, eventType: any, ...args: any[]): void;
}
