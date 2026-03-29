function merge(intervals) {
    if (intervals.length <= 1) return intervals;
    intervals.sort((a,b) => a[0]-b[0]);
    let result = [];
    let currentInterval = intervals[0];
    for (let i=1; i<intervals.length; i++) {
        let [currentStart, currentEnd] = currentInterval;
        let [nextStart, nextEnd] = intervals[i];
        if (currentEnd >= nextStart) currentInterval = [currentStart, Math.max(currentEnd, nextEnd)];
        else {
            result.push(currentInterval);
            currentInterval = intervals[i]
        }
    }
    result.push(currentInterval);
    return result;
}
