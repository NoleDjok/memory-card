/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
export declare class WatchObject {
    constructor();
    static disabled: boolean;
    watch(...args: any[]): void;
    unwatch(...args: any[]): void;
    static isArray(obj: any): boolean;
    static isObject(obj: any): boolean;
    static isFunction(fn: any): boolean;
    static defineProp(obj: any, propName: any, value: any): void;
    defineGetAndSet(obj: any, propName: any, getter: any, setter: any): void;
    static callWatchers(obj: any, prop: any, newVal: any, oldVal: any, action: any): void;
    methodNames: any[];
    defineArrayMethodWatcher(obj: any, original: any, methodName: any, callback: any): void;
    watchFunctions(obj: any, callback: any): void;
    defineWatcher(obj: any, prop: any, watcher: any, level: any): void;
    watchAll(obj: any, watcher: any, level: any): void;
    watchOne(obj: any, prop: any, watcher: any, level: any): void;
    watchMany(obj: any, props: any, watcher: any, level: any): void;
    static unwatchOne(obj: any, prop: any, watcher: any): void;
    static unwatchMany(obj: any, props: any, watcher: any): void;
    unwatchPropsInObject(obj: any, watcher: any): void;
    unwatchAll(obj: any, watcher: any): void;
}
