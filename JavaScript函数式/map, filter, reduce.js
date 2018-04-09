/**
 * map, filter, reduce  都是js 内建的高阶函数（将函数作为参数或者返回一个函数的函数）
 *
 * 过滤、映射、迭代
 *
 *
 */

/**
 * filter 对数组或集合中的每个元素应用传入的方法进行判断，判断其布尔值，返回所有位true元素，组成新的数组
 */
const iceCreams = [
    { flavor: "pineapple", color: "white" },
    { flavor: "strawberry", color: "red" },
    { flavor: "watermelon", color: "red" },
    { flavor: "kiwi", color: "green" },
    { flavor: "mango", color: "yellow" },
    { flavor: "pear", color: "green" }
]

const favoriteFlavors = iceCreams.filter(iceCream => iceCream.color === "red")

/**
 * reducer
 */
const flavours = ["strawberry", "strawberry", "kiwi", "kiwi", "kiwi", "strawberry", "mango", "kiwi", "banana"]
const votes = {}
const reducer = (votes, vote) => {
    votes[vote] = !votes[vote] ? (votes[vote] = 1) : votes[vote] + 1
    return votes
}
const outcome = flavours.reduce(reducer, votes)
// Output
// console.log("Strawberry: ", outcome.strawberry)
// console.log("Kiwi: ", outcome.kiwi)
// console.log("Mango: ", outcome.mango)
// console.log("Banana: ", outcome.banana)

/**
 * 性能测试
 */
let bigData = []
for (let i = 0; i < 100; i++) {
    bigData[i] = i
}
// Slow
let filterBegin = Date.now()
const filterMappedBigData = bigData.filter(value => value % 2 === 0).map(value => value * 2)

let filterEnd = Date.now()
let filtertimeSpent = (filterEnd - filterBegin) / 1000 + "secs"
// Fast
let reducedBegin = Date.now()
/**
 * acc: 调用回调时返回的累积值，初始值为 []，
 * value: 当前处理的元素
 *
 * 需要注意的时，初始值某些时候是必须的
 */
const reducedBigData = bigData.reduce((acc, value) => {
    if (value % 2 === 0) {
        acc.push(value * 2)
    }
    return acc
}, [])
let reducedEnd = Date.now()
let reducedtimeSpent = (reducedEnd - reducedBegin) / 1000 + " secs"
console.log("filtered Big Data:", filtertimeSpent)
console.log("reduced Big Data:", reducedtimeSpent)
