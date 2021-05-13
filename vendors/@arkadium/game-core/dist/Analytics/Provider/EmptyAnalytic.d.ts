/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Roodik Anton <roodika@arkadium.com>
 */
import { IAnalytic } from "../IAnalytic";
export declare class EmptyAnalytic implements IAnalytic {
    sendPageView(pageName: string): void;
    sendEvent(eventCategory: string, customDimensions: Object): Promise<boolean>;
}
