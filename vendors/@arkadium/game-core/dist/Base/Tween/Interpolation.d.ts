export declare var Interpolation: {
    Linear: (v: any, k: any) => any;
    Bezier: (v: any, k: any) => number;
    CatmullRom: (v: any, k: any) => any;
    Utils: {
        Linear: (p0: any, p1: any, t: any) => any;
        Bernstein: (n: any, i: any) => number;
        Factorial: (n: any) => number;
        CatmullRom: (p0: any, p1: any, p2: any, p3: any, t: any) => any;
    };
};
