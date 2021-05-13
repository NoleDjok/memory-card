/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { ITest } from "../IViewConfiguration";
export interface ITestManager {
    add(test: ITest): any;
    remove(test: ITest): any;
}
