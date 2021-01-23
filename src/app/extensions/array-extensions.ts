interface Array<T> {
    remove(value: T): number;
    distinct(): T[];
    // intersect(second: T[]): T[];
    intersect(...arrays: T[][]): T[];
    except(second: T[]): T[];
    union(second: T[]): T[];
}

// tslint:disable: object-literal-shorthand
Object.defineProperty(Array.prototype, 'remove', {
    value: function <T>(this: Array<T>, value: T): number {
        for (let i = 0; i < this.length; i++) {
            if (this[i] === value) {
                this.splice(i, 1);
                i--;
            }
        }
        return this.length;
    }
});

Object.defineProperty(Array.prototype, 'distinct', {
    value: function <T>(this: Array<T>): T[] {
        return [...new Set(this)];
    }
});

Object.defineProperty(Array.prototype, 'intersect', {
    // value: function <T>(this: Array<T>, second: Array<T>): T[] {
    //     return this.filter(x => second.indexOf(x) > -1);
    // }
    value: function <T>(self: Array<T>, ...arrays: Array<T[]>): T[] {
        const compare = (a: T[], b: T[]) => {
            const set = new Set(b);
            return a.filter(x => set.has(x));
        };
        return undefined === self ? this : this.intersect.call(compare(this, self), ...arrays);
    }
});

Object.defineProperty(Array.prototype, 'except', {
    value: function <T>(this: Array<T>, second: Array<T>): T[] {
        return this.filter(x => second.indexOf(x) < 0);
    }
});

Object.defineProperty(Array.prototype, 'union', {
    value: function <T>(this: Array<T>, second: Array<T>): T[] {
        return [...this, ...second].distinct();
    }
});

if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
        enumerable: false,
        value: function <T>(this: Array<T>, searchElement: T, fromIndex?: number): boolean {
            return this.indexOf(searchElement, fromIndex) > -1;
        }
    });
}
// tslint:enable: object-literal-shorthand
