/*
 * @Author: Jupiter
 * @Date: 2022-03-19 23:27:02
 * @LastEditors: Jupiter
 * @LastEditTime: 2022-03-19 23:29:22
 * @Description: 文件描述
 * @FilePath: /arithmetic/面试题/2022年03月/深入ts/手写Promise/actionType.ts
 */
type ResolveType = (value: any) => any;
type RejectType = (value: any) => any;
type Executor = (resolve: ResolveType, reject: RejectType) => any;

export { ResolveType, RejectType, Executor };
