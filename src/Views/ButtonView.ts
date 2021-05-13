import {AnimateViewBase, SoundType} from "@arkadium/game-core";
import {Inject} from "@arkadium/game-core";
import {IAnimateViewConfiguration} from "@arkadium/game-core";
import {CARD_MEMORY} from "../index";
import {ILabelViewOptions, LabelView} from "./LabelView";

export interface IButtonViewOptions
{
    label: string;
    onClick:() => void;
}

export class ButtonView extends AnimateViewBase {
    $model: any;

    public constructor(@Inject private _options:IButtonViewOptions) {
        super("ButtonView");

        console.log("PlayButtonView._options", _options);
    }

    protected getConfiguration(): IAnimateViewConfiguration {

        return {
            animateContent: CARD_MEMORY,
            symbolName: "button",
            childViews:{
                label:{
                    movieClipName: "label.label",
                    view:LabelView,
                    options:<ILabelViewOptions>{
                        text: this._options.label
                    }
                }
            },
            onTap: (e) => {
                this.gotoAndStopAll(0);
                this._options.onClick();
            },
            onPointerDown: (e) => {
                this.gotoAndStopAll(1);
            },
            onPointerUpOutside: (e) => {
                this.gotoAndStopAll(0);
            },
            onPointerOut: (e) => {
                this.gotoAndStopAll(0);
            },
            onPointerOver: (e) => {
            }
        };
    }

    protected onInitialize(): void {
        this.display.scale.set(0.8);
        this.gotoAndStopAll(0);
    }
}

