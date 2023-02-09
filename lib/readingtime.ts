export function readingTime(str:string) {
    const num=str.split(' ').filter(function(num) {
     return num != ''
    }).length;
    return Math.ceil(num/250);
}
