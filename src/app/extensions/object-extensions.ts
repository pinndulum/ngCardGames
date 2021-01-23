interface Object {
    isBool(): boolean;
    isNum(): boolean;
}

// tslint:disable: ban-types
// tslint:disable: object-literal-shorthand
// tslint:disable: space-before-function-paren
Object.defineProperty(Object.prototype, 'isBool', {
    value: function (this: Object): boolean {
        const val = (this || '').toString().toLowerCase().trim();
        return val === 'true' || val === 'false';
    }
});

Object.defineProperty(Object.prototype, 'isNum', {
    value: function (this: Object): boolean {
        return !isNaN(Number(this || 'NaN'));
    }
});
// tslint:enable: space-before-function-paren
// tslint:enable: object-literal-shorthand
// tslint:enable: ban-types
