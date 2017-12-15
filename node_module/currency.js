var Currency = function(canadianDollar) {
    this.canadianDollar = canadianDollar;
};

//随机一个两位小数
Currency.prototype.roundTwoDecimals = function(amount) {
    return Math.round(amount * 100) / 100;
};

//加元转美元
Currency.prototype.canadianToUS = function(candian) {
    return this.roundTwoDecimals(candian * this.canadianDollar);
};

//美元转加元
Currency.prototype.USToCanadian = function(us) {
    return this.roundTwoDecimals(us / this.canadianDollar);
};

module.exports = Currency;
