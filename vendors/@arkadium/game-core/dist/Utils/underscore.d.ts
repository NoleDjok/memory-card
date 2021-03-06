export declare class _u {
    private _wrapped;
    constructor(obj: any);
    private static ArrayProto;
    private static ObjProto;
    private static FuncProto;
    private static push;
    private static slice;
    private static toString;
    private static hasOwnProperty;
    private static nativeIsArray;
    private static nativeKeys;
    private static nativeBind;
    private static nativeCreate;
    private static optimizeCb;
    private static identity;
    private static isFunction;
    private static isObject;
    static extendOwn: (obj: any, attrs: any) => any;
    static extend: (obj: any, attrs: any) => any;
    private static createAssigner;
    private static matcher;
    static isMatch: (object: any, attrs: any) => boolean;
    private static cb;
    private static property;
    private static MAX_uARRAY_uINDEX;
    private static getLength;
    private static isArrayLike;
    private static createPredicateIndexFinder;
    private static sortedIndex;
    private static findIndex;
    private static findLastIndex;
    private static hasEnumBug;
    private static nonEnumerableProps;
    private static indexOf;
    private static isNaN;
    private static isNumber;
    private static values;
    private static createIndexFinder;
    private static contains;
    private static collectNonEnumProps;
    static has: (obj: any, key: any) => any;
    static keys(obj: any): any[];
    static each(obj: any, iteratee: any, context: any): any;
    static map(obj: any, iteratee: any, context?: any): any[];
    static rest(array: any, n: any, guard?: any): any;
    static allKeys(obj: any): any[];
    static isArray: (obj: any) => boolean;
    static isArguments(obj: any): boolean;
    static flatten(input: any, shallow: any, strict: any, startIndex?: any): any[];
    static negate: (predicate: any) => () => boolean;
    static pick(object: any, oiteratee: any, context?: any): {};
    static omit(obj: any, iteratee: any, context?: any): {};
    static clone(obj: any): any;
    static all(obj: any, predicate: any, context?: any): boolean;
    static every: typeof _u.all;
    private static eq;
    static isEqual(a: any, b: any): boolean;
}
