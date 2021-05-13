import { ScreenOrientationEnum } from "./ScreenOrientationEnum";
import { IOrientation } from "./IOrientation";
export declare class Portrait implements IOrientation {
    run(width: number, height: number): ScreenOrientationEnum;
}
