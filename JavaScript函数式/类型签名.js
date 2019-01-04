/*
* 类型是让不同背景的人能高效沟通的元语言
* 类型签名还衍生出"自由定理"，因为类型可以推断
* */

// String -> String
var capitalize = function(s){
  return toUpperCase(head(s)) + toLowerCase(tail(s));
}

capitalize('lyctea')


//  strLength :: String -> Number
var strLength = function(s){
  return s.length;
}


//  join :: String -> [String] -> String
var join = curry(function(what, xs){
  return xs.join(what);
});
