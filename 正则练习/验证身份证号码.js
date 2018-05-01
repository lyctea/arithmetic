// 身份证号码可能为15位或18位，15位为全数字，18位中前17位为数字，最后一位为数字或者X
function isCardNo(number) {
    var regx = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    return regx.test(number)
}
