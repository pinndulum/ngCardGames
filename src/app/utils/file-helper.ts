export const dropTrailingZeros = (size: string): string => {
    return size.replace(/\.?0+$/g, '');
};

export const formattedSize = (file: { size: number }): string => {
    const threshold = Math.pow(2, 10); // 1024
    const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    if (file) {
        let unit = 0;
        let unitsize = file.size || 0;
        while (unitsize > threshold - 1) {
            unit++;
            unitsize /= threshold;
        }
        return `${dropTrailingZeros(unitsize.toFixed(2))} ${units[unit]}`;
    }
};
