
export const min = () => new Date(-8640000000000000);
export const max = () => new Date(8640000000000000);
export const now = () => new Date(Date.now());
export const today = () => new Date(now().setHours(0, 0, 0, 0));
export const addMilSeconds = (date: Date, ms: number): Date => addSeconds(date, 0, ms);
export const addSeconds = (date: Date, seconds: number, ms?: number): Date => addMinutes(date, 0, seconds, ms);
export const addMinutes = (date: Date, minutes: number, seconds?: number, ms?: number): Date => addHours(date, 0, minutes, seconds, ms);
export const addHours = (date: Date, hours: number, minutes?: number, seconds?: number, ms?: number): Date => {
    const result = new Date(date);
    result.setHours(
        result.getHours() + hours,
        result.getMinutes() + (minutes || 0),
        result.getSeconds() + (seconds || 0),
        result.getMilliseconds() + (ms || 0)
    );
    return result;
};
export const addDays = (date: Date, days: number): Date => addMonths(date, 0, days);
export const addMonths = (date: Date, months: number, days?: number): Date => addYears(date, 0, months, days);
export const addYears = (date: Date, years: number, months?: number, days?: number): Date => {
    const result = new Date(date);
    result.setFullYear(
        result.getFullYear() + years,
        result.getMonth() + (months || 0),
        result.getDate() + (days || 0)
    );
    return result;
};
export const isDate = (date: string | Date): boolean => {
    if (typeof date === 'string') {
        date = date.replace(/-/g, '\/');
    }
    return !isNaN(new Date(date).valueOf());
};
export const asYYYYMMDD = (date: Date, sep?: string) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = `${d.getMonth() + 1}`.padStart(2, '0');
    const day = `${d.getDate()}`.padStart(2, '0');
    return [year, month, day].join(sep || '-');
};
export const week = (date: Date, firstday?: number): number => {
    firstday = firstday || 0;
    firstday = Math.floor(Math.min(Math.max(firstday, 0), 6));
    const utc = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const day = utc.getUTCDay() || 7;
    utc.setUTCDate(utc.getUTCDate() + 4 - day);
    const onejan = new Date(Date.UTC(utc.getUTCFullYear(), 0, 1));
    return Math.ceil((((utc.valueOf() - onejan.valueOf()) / 86400000) + onejan.getDay() - firstday) / 7);
};
export default {
    min,
    max,
    now,
    today,
    addDays,
    addHours,
    addMilSeconds,
    addMinutes,
    addMonths,
    addSeconds,
    addYears,
    isDate,
    asYYYYMMDD,
    week
};

interface DateConstructor {
    today(): number;
    getNow(): Date;
    getToday(): Date;
}
Object.defineProperty(Date.prototype, 'today', { value: today().valueOf() });
Object.defineProperty(Date.prototype, 'getNow', { value: now });
Object.defineProperty(Date.prototype, 'getToday', { value: today });
