/**
 * ES6 模块里的对象可在创建它们的声明中导出。一个模块可无数次使用export，所有对象将被一起导出
 */
export class Employee {
    constructor(id, name, dob) {
        this.id = id;
        this.name = name;
        this.dob = dob;
    }

    getAge() {
        return new Date().getFullYear() - this.dob.getYear();
    }
}

export function getEmployee(id, name, dob) {
    return new Employee(id, name, dob);
}

var emp = new Employee(1, 'Rina', new Date(1987, 1, 22));
