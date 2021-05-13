/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
export declare class AnimatorTimeline {
    private _update;
    instance: any;
    loop: boolean;
    start: number;
    end: number;
    private callback;
    constructor();
    init(instance: any, start: any, end: any, loop: any, callback: any): void;
    destroy(): void;
    update(instance: any): any;
    stop(): void;
    get progress(): number;
    static get _pool(): any[];
    static create(instance: any, start: any, end: any, loop: any, callback: any): any;
}
