"use strict";
// Como podemos rodar isso em um arquivo .ts sem causar erros? 
/*
let employee = {};
employee.code = 10;
employee.name = "John";
*/
let worker1 = {
    code1: 10,
    name1: "John"
};
console.log(worker1.code1, worker1.name1);
let worker2 = {
    code2: 11,
    name2: "Philip"
};
console.log(worker2.code2, worker2.name2);
;
function getWorker(work) {
    return `${work.code3} ${work.name3}`;
}
let walterTiir = { code3: 12, name3: 'Walter Tiir' };
console.log(getWorker(walterTiir));

