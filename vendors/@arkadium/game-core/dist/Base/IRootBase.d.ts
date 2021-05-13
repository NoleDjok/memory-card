/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
export interface IRootBase {
    setLoading: (progress: number) => void;
    showLoading: (toggle: boolean) => void;
    showLoadingTimeout: number;
}
