// const num = [1,2,3,4,5,6,7,8,9];
// for (let i = 0; i < num.length; i++) {
//     console.log(num[i]);
//         if (num[i] > 6) {
//             break;
//         }
// }

const num = [1,-2,3,-4,-5,6,7,8,9];
for (let i = 0; i < num.length; i++) {
        if (num[i] < 0) {
            continue;
        }
        console.log(num[i]);
}