/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { AnimatorTimeline } from './AnimatorTimeline';
export declare class Animator {
    static get _timelines(): Array<AnimatorTimeline>;
    static get STOP_LABEL(): string;
    static get LOOP_LABEL(): string;
    static play(instance: any, label: any, callback: any): any;
    static to(instance: any, end: any, callback: any): any;
    static fromTo(instance: any, start: any, end: any, loop: any, callback: any): any;
    static stop(instance: any): void;
    static stopAll(): void;
    static _internalStop(timeline: any): void;
}
