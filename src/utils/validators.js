export const hasSameNumberTwice = (sequence) => {
    let before;
    for (let c of sequence) {
        if (before) {
            if (before == c) return true;
        }
        before = c;
    }
    return false;
}

export const hasGrowingNumbers = (sequence) => {
    let before;
    for (let c of sequence) {
        if (before) {
            if (before > c) return false;
        }
        before = c;
    }
    return true;
}