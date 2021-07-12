export function diffInDays(from, to) {
    return (to - from) / 1000 / 24 / 3600;
}

export function subDays(date, days) {
    date = new Date(date);
    return date.setDate(date.getDate() - days);
}

export function addDays(date, days) {
    date = new Date(date);
    return date.setDate(date.getDate() + days);
}

export function getDateRangeAsArray(from, to) {
    const dates = [];
    let date = from;
    while (date <= to) {
        dates.push(new Date(date));
        date = addDays(date, 1);
    }
    return dates;
}

export function isSelected(checkIn, checkOut, date) {
    return date >= checkIn && date <= checkOut;
}