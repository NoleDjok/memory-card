/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
export declare class LocalizationManager {
    private _textByKey;
    private _locale;
    private _resourcesRoot;
    private _arenaApi;
    private _supportedLanguages;
    private _logger;
    private loader;
    constructor();
    load(): Promise<boolean>;
    private _load;
    getText(key: string): string;
    private parseTexts;
    locale(): string;
    setLocale(locale: string): Promise<void>;
    destroy(): void;
}
