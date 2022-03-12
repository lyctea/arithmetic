/*
 * @Author: Jupiter
 * @Date: 2022-03-12 13:52:45
 * @LastEditors: Jupiter
 * @LastEditTime: 2022-03-12 15:37:04
 * @Description: 文件描述
 * @FilePath: /arithmetic/面试题/2022年03月/深入ts/函数重载.ts
 */
interface Message {
  a: string;
}

function getMessage(id: number): Message; // 重载签名
function getMessage(msgType: string, readRecordCount: number): Message[]; // 重载签名
/**
 * 实现签名
 */
function getMessage(
  payload: any,
  readRecordCount: number = 1
): Message | Message[] {
  if (typeof payload === "number") {
    return { a: "123" };
  } else {
    return [{ a: "123" }, { a: "123" }, { a: "123" }, { a: "123" }].splice(
      0,
      readRecordCount
    );
  }
}

getMessage(1);
getMessage("image", 2).forEach((msg) => {
  console.log(msg);
});
