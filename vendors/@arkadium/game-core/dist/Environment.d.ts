/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
export declare enum EnvironmentTypeEnum {
    pc = 2,
    tablet = 4,
    phone = 8
}
export declare class Environment {
    static type: EnvironmentTypeEnum;
}
