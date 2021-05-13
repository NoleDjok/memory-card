import {AnimateViewBase} from "@arkadium/game-core";
import {Inject} from "@arkadium/game-core";
import {IAnimateViewConfiguration} from "@arkadium/game-core";
import {CARD_MEMORY} from "../index";

export interface ILabelViewOptions
{
    text: string;
}

export class LabelView extends AnimateViewBase {
    $model: any;

    public constructor(@Inject private _options:ILabelViewOptions) {
        super("LabelView");
    }

    protected getConfiguration(): IAnimateViewConfiguration {
        return {};
    }

    protected onInitialize(): void {
        this.text.text = this._options.text;
    }
}
