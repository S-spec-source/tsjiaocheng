export {};
console.log("====== 06循环语句 ======");

let total: number = 0;
for (let i: number = 1; i <= 3; i++) {
    total += i;
}
console.log("1) for循环 ->",total);
let count: number = 2;
while (count > 0) {
    console.log("2) while循环 ->",count);
    count--;
}

let num: number = 0;
do {
    console.log("3) do-while循环 ->",num);
    num++;
} while (num < 2);

let user = { name: "sada", age: 20 };
for (let key in user) {
    console.log("4) for-in循环 ->",key,user[key]);
}

let courseList: string[] = ["Java", "Python", "C++"];
for (let course of courseList) {
    console.log("4) for-of ->", course);
}

let numList: number[] = [1, 2, 3, 4, 5];
numList.forEach((item) => {
    console.log("5) forEach ->", item);
});
let everyResult: boolean = numList.every((item) => item > 0);
console.log("5) every ->", everyResult);
let someResult: boolean = numList.some((item) => {
    return item > 3;
});
console.log("5) some ->", someResult);
for (let n: number = 1; n<= 5; n++) {
    if(n === 2) {
        continue;
    }
    if(n === 4) {
        break;
    }
    console.log("6) break和continue ->",n);
}
console.log("====== 本章结束 ======");
