/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { IViewBaseLogger } from "./IViewBaseLogger";
export declare class ViewBaseEmptyLogger implements IViewBaseLogger {
    log(viewName: string, messageType: string, message?: any, ...optionalParams: any[]): void;
    error(viewName: string, errorType: string, message?: any, ...optionalParams: any[]): void;
    warn(msg: string, viewName: string, errorType: string, message?: any, ...optionalParams: any[]): void;
}
