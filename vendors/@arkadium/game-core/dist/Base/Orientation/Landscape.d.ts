import { ScreenOrientationEnum } from "./ScreenOrientationEnum";
import { IOrientation } from "./IOrientation";
export declare class Landscape implements IOrientation {
    run(width: number, height: number): ScreenOrientationEnum;
}
