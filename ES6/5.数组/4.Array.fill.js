
// Array.fill 把数组的某一块复制到另一块
// target被覆盖的下标
// start 截取开始的下标
// end 截取结束的下标的下一个
//Array.prototype.fill(target,start=0,end=this.length)

let arr = [6,7,8,9,10,11,12,13];
arr.fill('aa',1,3);    //从第三个下标开始

console.log(arr); // [6,'aa','aa',9,6,7,8,13]
