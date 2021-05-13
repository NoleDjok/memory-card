export declare class Atlas {
    private readonly Padding;
    left: any;
    right: any;
    rect: any;
    canvas: any;
    filled: any;
    tilepad: any;
    _cache: any;
    _uvcache: any;
    img: any;
    context: any;
    constructor(x: any, y?: any, w?: any, h?: any);
    pack(rect: any): any;
    expand(rect: any): any;
    index(): any;
    uv(w: any, h: any): any;
    json(input: any): string | Atlas;
    _tilepad(rect: any): any;
    _ontoCanvas(node: any): any;
    _toRect(rect: any): any;
}
