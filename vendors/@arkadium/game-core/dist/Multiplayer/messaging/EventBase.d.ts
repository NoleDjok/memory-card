/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { IEvent } from "./IEvent";
export declare function getUtcNow(): Date;
export declare function getUtcFromLocal(localDate: Date): Date;
export declare abstract class EventBase implements IEvent {
    abstract id: string;
    isoDateTime: string;
    constructor(isoDateTime?: string);
    static getIsoDateTime(): string;
}
