export class Guid {
    static newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            // tslint:disable: no-bitwise
            // tslint:disable-next-line: one-variable-per-declaration
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            // tslint:enable: no-bitwise
            return v.toString(16);
        });
    }

    static matchGuid(candidate: string): RegExpMatchArray {
        return candidate.match(/[0-9A-F]{8}-(?:[0-9A-F]{4}-){3}[0-9A-F]{12}/gi);
    }

    static getGuid(candidate: string): string {
        const match = this.matchGuid(candidate);
        return match && match[0];
    }

    static isGuid(candidate: string): boolean {
        const guid = this.getGuid(candidate);
        return guid && candidate === guid;
    }

    static hasGuid(candidate: string): boolean {
        const guid = this.getGuid(candidate);
        return !!guid;
    }
}
