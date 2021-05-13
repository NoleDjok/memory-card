export declare class DateUtils {
    getOrdinalSuffix(number: any): "th" | "st" | "nd" | "rd";
    convertMStoTime(ms: any): string;
    convertZero(volume: number): string;
    stripDateFromString(string: any): any;
    getCurrentTimeUTCms(): number;
    static timeFormat(timeInSeconds: number): string;
}
