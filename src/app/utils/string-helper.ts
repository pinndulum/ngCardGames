export const replaceNonPrintChars = (str: string, replacement?: string): string => {
    return str.replace(/[^ -~]+/g, replacement || ' ');
};
