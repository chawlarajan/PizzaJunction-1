// import { Pipe, PipeTransform } from '@angular/core';
// @Pipe({ name: 'groupBy' })
// export class GroupByPipe implements PipeTransform {
//     transform(value: Array<any>, field: string): Array<any> {
//         const groupedObj = value.reduce((prev, cur) => {
//             if (!prev[cur[field]]) {
//                 prev[cur[field]] = [cur];
//             } else {
//                 prev[cur[field]].push(cur);
//             }
//             return prev;
//         }, {});
//         return Object.keys(groupedObj).map(key => return { key, value: groupedObj[key] });
//     }
// }
//# sourceMappingURL=groupby.pipe.js.map