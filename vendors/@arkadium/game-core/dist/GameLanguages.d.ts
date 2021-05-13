/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { ILanguage } from "./Base/Localization/ILanguage";
export declare class GameLanguages {
    private _defaultLanguage;
    private _languages;
    get defaultLanguage(): string;
    get languages(): Array<ILanguage>;
    init(languages: any, defaultLanguage: any): void;
}
