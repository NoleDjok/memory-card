import { ScreenOrientationEnum } from "./ScreenOrientationEnum";
export interface IOrientation {
    run(width: number, height: number): ScreenOrientationEnum;
}
