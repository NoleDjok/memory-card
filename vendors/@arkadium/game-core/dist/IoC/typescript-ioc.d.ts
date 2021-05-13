import 'reflect-metadata';
export declare function Singleton(target: Function): void;
export declare function Scoped(scope: Scope): (target: Function) => void;
export declare function Provided(provider: Provider): (target: Function) => void;
export declare function Provides(target: Function, options?: any): (to: Function) => void;
export declare function Inject(...args: Array<any>): any;
export declare class Container {
    static bind(source: Function, options?: any): Config;
    static get(source: Function, options?: any): any;
    static getType(source: Function): Function;
    static snapshot(source: Function): void;
    static restore(source: Function): void;
    private static snapshots;
}
export interface Config {
    to(target: Object, options?: any): Config;
    provider(provider: Provider): Config;
    scope(scope: Scope): Config;
    withParams(...paramTypes: Array<any>): Config;
}
export interface Provider {
    get(): Object;
}
export declare abstract class Scope {
    static Local: Scope;
    static Singleton: Scope;
    abstract resolve(provider: Provider, source: Function, options?: any): any;
    reset(source: Function): void;
}
