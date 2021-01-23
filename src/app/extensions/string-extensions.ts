interface String {
    toBool(): boolean;
    toNum(dflt?: number): number;
}

// tslint:disable: object-literal-shorthand
// tslint:disable: space-before-function-paren
Object.defineProperty(String.prototype, 'toBool', {
    value: function (this: string): boolean {
        const s = (this || '').toLowerCase().trim();
        let b = false;
        switch (s) {
            case 'yes':
            case 'true':
                b = true;
                break;
            default:
                b = isNaN(+s) ? b : +s > 0;
                break;
        }
        return b;
    }
});

Object.defineProperty(String.prototype, 'toNum', {
    value: function (this: string, dflt?: number): number {
        let n = +this.trim();
        if (isNaN(n)) {
            n = dflt || 0;
        }
        return n;
    }
});

if (!String.prototype.includes) {
    Object.defineProperty(String.prototype, 'includes', {
        value(this: string, searchString: string, position?: number): boolean {
            return this.indexOf(searchString, position) > -1;
        }
    });
}
// tslint:enable: space-before-function-paren
// tslint:enable: object-literal-shorthand
