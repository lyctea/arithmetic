// 赋值给 `exports` 不会修改模块，必须使用 `module.exports`
module.exports = width => {
    return {
        area: () => width ** 2
    };
};

console.log(module.exports.toString());
