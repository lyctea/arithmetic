/**
 *  纯函数是确定的，这意味着给定相同的输入能得到相同的输出
 *
 * 纯函数不会产生任何副作用
 * 纯函数不依赖上下文
 */

/**
 * 简单的加法函数是纯函数，因为他的输出只依赖于传入的参数，相同的输入总能得到相同的输出
 */
const add = (x, y) => x + y // A pure function

/**
 * 这个函数不是纯函数，因为它的返回值依赖于外部的 magicLetter 变量，
 * 可以从外部影响到返回的值
 */
const magicLetter = "*"
const createMagicPhrase = phrase => `${magicLetter}abra${phrase}`
