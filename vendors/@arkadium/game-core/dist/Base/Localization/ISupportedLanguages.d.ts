/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { ILanguage } from "./ILanguage";
export interface ISupportedLanguages {
    languages: Array<ILanguage>;
    defaultLanguage: string;
    textPath?: string;
}
