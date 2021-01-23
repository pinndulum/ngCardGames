export const flatten = <T>(self: T[][]): T[] => {
    return self.reduce((next, curr) => {
        next.push(...curr);
        return next;
    }, []);
};
