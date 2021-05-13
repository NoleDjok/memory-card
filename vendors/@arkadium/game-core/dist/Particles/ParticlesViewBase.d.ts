/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
/// <reference types="pixi.js" />
import { _ViewBase } from "../Base/_ViewBase";
import { IParticlesViewConfiguration } from "./IParticlesViewConfiguration";
import { Emitter } from "./Emitter";
import { IViewBase } from "../Base/IViewBase";
import { IAnimateViewChildViewConfiguration } from "../Base/IAnimateViewConfiguration";
export declare abstract class ParticlesViewBase extends _ViewBase implements IViewBase {
    private _emitter;
    private _pause;
    config: IParticlesViewConfiguration;
    protected get particlesEmitter(): Emitter;
    configure(child: IAnimateViewChildViewConfiguration): void;
    initialize(parent: IViewBase, container?: PIXI.Container): PIXI.Container;
    pause(value: boolean): void;
    protected abstract getConfiguration(): IParticlesViewConfiguration;
    protected abstract onInitialize(): void;
    update(frameRate: number): boolean;
    dispose(): void;
}
