/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { ITestManager } from "./ITestManager";
import { ITest } from "../IViewConfiguration";
export declare class TestManager implements ITestManager {
    private _tests;
    private _arenaApi;
    constructor();
    add(test: ITest): void;
    remove(test: ITest): void;
    private processTestAction;
    private runTestByName;
}
