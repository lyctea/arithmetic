// 'luoyecong@aliyun.com'
// ? 最多一个
// + 最少一个
// * 零个或多个

// 一个合法的邮箱地址有三部分组成，以 @  . 符号连接，每个部分需要符合 a-zA-z0-9_- 字符组成

function isEmail(email = '') {
    return /^([a-zA-Z\d_-])+@([a-zA-Z\d_-])+\.([a-zA-Z\d_-])+$/.test(email)
}

console.log(isEmail('luo2\3yec_-ong@ali23yun.com'))
