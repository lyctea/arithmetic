/*
* 副作用是在计算结果的过程中，系统状态的一种变化，或者与外部世界进行的可观察的交互
*
* 副作用可能包含，但不限于：
* 更改文件系统
* 网数据库插入记录
* 发送一个http请求
* 可变数据
* 打印/log
* 获取用户输入
* DOM查询
* 访问系统状态
* */


// 我们可以使用一种叫做“等式推导”（equational reasoning）的技术来分析代码
var Immutable = require('immutable');

var decrementHP = function (player) {
  return player.set('hp', player.hp - 1);
};

var isSameTeam = function (player1, player2) {
  return player1.team === player2.team;
};

var punch = function (player, target) {
  if (isSameTeam(player, target)) {
    return target;
  } else {
    return decrementHP(target);
  }
};

var jobe = Immutable.Map({name: 'Jobe', hp: 20, team: 'red'});
var michael = Immutable.Map({name: 'Michael', hp: 20, team: 'green'});

punch(jobe, michael);
