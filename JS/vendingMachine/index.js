import ColaGenerator from "./js/colaGenerator.js";

const colaGenerator = new ColaGenerator();
// 탑레벨 await : 별도의 async 함수 없이 사용할 수 있는 await
// console.log(await colaGenerator.loadData());
colaGenerator.setup();