//计算工作曲线
$("input.line_resultbtn").click(function(){

  var Jline_result = $(this).prev("input.line_result");
  //查找曲线X值
  var Jtr = $(this).parents("tr").nextAll();

  var line_xJson = new StringBuffer();
  line_xJson.append("line_xJson=[");
  var flag = true;
  Jtr.each(function(i){
    var Jline_x = $(this).find("input[mark='line_x']");
    if(Jline_x.length > 0){
      Jline_x.each(function(i){
        var value = $.trim(this.value);
        if(value == ''){
          var line_y = "linee" + this.name.substring(this.name.indexOf("linee") + 6);
          if($.trim($("input[name='" + line_y + "']").val()) != ''){

          }


          return (flag = true);
        }
        if(value.indexOf('.') == -1)
          value += ".0";
        line_xJson.append(value).append(",");
      });

      return false;
    }


  });

  if(!flag) return false;
  line_xJson.append("]");
  //查找曲线Y值

  var line_yJson = new StringBuffer();
  line_yJson.append("line_yJson=[");
  flag = true;
  Jtr.each(function(i){
    var Jline_y = $(this).find("input[mark='line_e']");
    if(Jline_y.length > 0){
      Jline_y.each(function(t){
        var value = $.trim(this.value);
        if(value == ''){
          var line_x = "linex" + this.name.substring(this.name.indexOf("linex") + 6);

          if($.trim($("input[name='" + line_x + "']").val()) != ''){

            return (flag = false);
          }


          return (flag = true);
        }
        if(value.indexOf('.') == -1)
          value += ".0";
        line_yJson.append(value).append(",");


      });
      return false;
    }

  });

  if(!flag) return false;
  line_yJson.append("]");
  var queryString = line_xJson.toString() + "&" +line_yJson.toString();
  isInputDisabled = false;
  sys_ajaxPostDirect("/limsysjlbwatertemplate/default.do?method=createLine",queryString,function(json){
    if(json.error){
      ajaxAlert(json.error);
      return false;
    }
    if(!json.result){
      ajaxAlert(json);
      return false;
    }
    if(!json.resultY) return;
    Jline_result.val(json.resultY);
    var Jr = Jline_result.parents("tr").find("input.line_r");
    Jr.val(json.resultR);
    setRrule(Jr);
    setfractionDigit(Jline_result,json.a,json.b);
    //Jform.find("input[name='line_r']").val(json.resultR);
  });
});


public Map createLine(){
  try {
    if(StringUtils.isNotEmpty((String)this.map.get("twoLine"))) return createTwoLine();
    JSONArray line_xJson = JSONArray.fromObject(this.map.get("line_xJson"));//曲线X值
    final List<Double> line_xList = (List<Double>)JSONArray.toCollection(line_xJson, Double.class);
    JSONArray line_yJson = JSONArray.fromObject(this.map.get("line_yJson"));//曲线Y值
    final List<Double> line_yList = (List<Double>)JSONArray.toCollection(line_yJson, Double.class);
    if(line_xList.size() != line_yList.size()){
      //jjd.setExtend("error", "曲线X,Y值个数不相同!");
      return jjd.getData();
    }
    Double[] x = new Double[line_xList.size()];
    Double[] y = new Double[line_xList.size()];
    line_xList.toArray(x);
    line_yList.toArray(y);
    String[] result = lienGs(x,y);
    if(result != null){
      String resultY = "y=" + result[0];//y=a+bx
      if(result[1].indexOf("-") == -1) resultY += "+";
      resultY += result[1] + "x";
      String resultR = result[2];
      jjd.setExtend("resultY", resultY);
      jjd.setExtend("resultR", resultR);
      jjd.setExtend("a", result[0]);
      jjd.setExtend("b", result[1]);
    }
  } catch (Exception e) {
    String guid = Guid.get();
    this.jjd.setResult(false, "根据曲线X,Y值计算出结果和相关系数(R)时出现错误，错误代码：" + guid);
    log.error("根据曲线X,Y值计算出结果和相关系数(R)时出现错误" + e);
  }
  return jjd.getData();
}



private String[] lienGs(Double[] x,Double[] y){
//		 x = new Double[]{0.00,1.00,2.0,6.0,10.0,14.00,20.0,30.0};
//	   	 y = new Double[]{0.000,0.009,0.020,0.060,0.100,0.139,0.199,0.299};
  double a = 0d;
  double b = 0d;
  double r = 0d;
  double _x, _y; //x,y的平均值
  int n; //数据个数
  int i;
  double r_fz, r_fm; //r的分子、分母
  double temp1, temp2;

  //  if (x.Length != y.Length) return false;
  n = x.length;
  //求x,y平均数
  _x = 0;
  _y = 0;
  for (i = 0; i <= n - 1; i++)
  {
    _x = _x + x[i];
    _y = _y + y[i];
  };
  _x = _x / n;//平均值
  _y = _y / n;//平均值
  //求b的分子
  temp1 = 0;
  for (i = 0; i <= n - 1; i++)
  {
    temp1 = x[i] * y[i] + temp1;
  };
  temp1 = temp1 - n * _x * _y;
  //求b的分母
  temp2 = 0;
  for (i = 0; i <= n - 1; i++)
  {
    temp2 = x[i] * x[i] + temp2;
  };
  temp2 = temp2 - n * _x * _x;
  //ok! a, b
  b = temp1 / temp2;
  a = _y - (temp1 / temp2) * _x;
  //r的分子
  r_fz = 0;
  for (i = 0; i <= n - 1; i++)
  {
    r_fz = x[i] * y[i] + r_fz;
  };
  r_fz = r_fz - n * _x * _y;
  //r的分母
  temp1 = 0;
  temp2 = 0;
  for (i = 0; i <= n - 1; i++)
  {
    temp1 = x[i] * x[i] + temp1;
    temp2 = y[i] * y[i] + temp2;
  };
  temp1 = temp1 - n * _x * _x;
  temp2 = temp2 - n * _y * _y;
  r_fm = Math.sqrt(temp1 * temp2);
  //ok! r
  if(r_fm == 0) return null;
  r = r_fz / r_fm;
  return new String[]{new BigDecimal(a).toString(),new BigDecimal(b).toString(),new BigDecimal(r).toString()};
}



//求列的平均值
$("input.weightAverage").click(function(){

  var weight2Td = $(this).parents("td:first").prev();
  if(weight2Td.length == 0) return;
  var weight2 = weight2Td.find("input");
  if(weight2.length == 0) return;
  weight2 = weight2.val();
  if(isNaN(weight2) || $.trim(weight2).length == 0) return;//不是数字
  var weight1Td = weight2Td.prev();
  if(weight1Td.length == 0) return;
  var weight1 = weight1Td.find("input");
  if(weight1.length == 0) return;
  weight1 = weight1.val();
  if(isNaN(weight1) || $.trim(weight1).length == 0) return;//不是数字
  var Jtarget = $(this).prev();
  Jtarget.val((parseFloat(weight1) + parseFloat(weight2))/2);
  setfractionDigits(Jtarget);

});
//求平行测量值的相对偏差
$("input.phXdpc").click(function(){
  var value2Td = $(this).parents("td:first").prev().prev();
  if(value2Td.length == 0) return;
  var value2 = value2Td.find("input");
  if(value2.length == 0) return;
  value2 = value2.val();
  if(isNaN(value2) || $.trim(value2).length == 0) return;//不是数字
  var value1Td = value2Td.prev();
  if(value1Td.length == 0) return;
  var value1 = value1Td.find("input");
  if(value1.length == 0) return;
  value1 = value1.val();
  if(isNaN(value1) || $.trim(value1).length == 0) return;//不是数字
  var Jtarget = $(this).prev();
  var result = (parseFloat(value1) - parseFloat(value2))/(parseFloat(value1) + parseFloat(value2)) * 100;
  if(Jtarget.attr('yxsz') && Jtarget.attr('yxsz') != '')
    var result = setXdpcValue(result,Jtarget.attr('yxsz'));


  if(Jtarget.attr('xsd') && Jtarget.attr('xsd') != '')
    result = setXsdValue(result,Jtarget.attr('xsd'));
  Jtarget.val(result);

});
$("input.calculateAverage").click(function(){

  var weight2Td = $(this).parents("td:first").prev();
  if(weight2Td.length == 0) return;
  var weight2 = weight2Td.find("input");
  if(weight2.length == 0) return;
  weight2 = weight2.val();
  if(isNaN(weight2) || $.trim(weight2).length == 0) return;//不是数字
  var weight1Td = weight2Td.prev();
  if(weight1Td.length == 0) return;
  var weight1 = weight1Td.find("input");
  if(weight1.length == 0) return;
  weight1 = weight1.val();
  if(isNaN(weight1) || $.trim(weight1).length == 0) return;//不是数字
  var Jtarget = $(this).prev();
  Jtarget.val((parseFloat(weight1) + parseFloat(weight2))/2);
  setfractionDigits(Jtarget);

});
$("input.weightAverage").click(function(){

  var weight2Td = $(this).parents("td:first").prev();
  if(weight2Td.length == 0) return;
  var weight2 = weight2Td.find("input");
  if(weight2.length == 0) return;
  weight2 = weight2.val();
  if(isNaN(weight2) || $.trim(weight2).length == 0) return;//不是数字
  var weight1Td = weight2Td.prev();
  if(weight1Td.length == 0) return;
  var weight1 = weight1Td.find("input");
  if(weight1.length == 0) return;
  weight1 = weight1.val();
  if(isNaN(weight1) || $.trim(weight1).length == 0) return;//不是数字
  var Jtarget = $(this).prev();
  Jtarget.val((parseFloat(weight1) + parseFloat(weight2))/2);
  setfractionDigits(Jtarget);

});


//求标液的平均值
$(".byAverageResult").click(function(i){
  var Jtr = $(this).parents("tr:first");
  var target = Jtr.find("input[name='" + $(this).attr("target") + "']");
  if(target.length == 0){
    alert("没有找到结果对象!");
    return false;
  }
  var index;//变量的索引值
  var averageIndex = Jtr.find(".byAverageResult").index($(this));//平均信号值的索引值
  var expressStr,i=0,value,flag = true,blIndex;
  while(true){
    if(Jtr.find("input.arbitraryResultClass").length == 0)
      break;
    if(i == 0){
      var bl = $(this).parents("td:first").prev().find("input.arbitraryResultClass");
      if(bl.length == 0){
        alert("没有找到变量对象!");
        flag = false;
        break;
      }
      index = Jtr.find("td").index(bl.parents("td:first"));
      value = $.trim(bl.prev().val());
      if(value == ''){

        //bl.focus();
        //	bl.css("border","solid 1px red");
        flag = false;
        break;
      }
      expressStr = value;

    }else{
      expressStr += "+";
      blIndex = index - averageIndex;
      var 	bl = Jtr.find("td:lt(" + (blIndex + 1) + ")").find("input.arbitraryResultClass");

      if(bl.length > 1)
        bl = bl.eq(1);

      if(bl.length == 0){

        alert("没有找到变量对象!");
        flag = false;
        break;

      }
      value = $.trim(bl.prev().val());
      if(value == ''){
        //bl.focus();
        //bl.css("border","solid 1px red");
        flag = false;
        break;
      }
      expressStr += value;
    }
    Jtr = Jtr.next();
    i++;
  }
  if(!flag) return false;
  target.val(formatNum(eval("(" + expressStr + ")")/i));
  setfractionDigits(target);

});
//求样品空白的平均信号值
$(".signAverage").click(function(i){
  var Jtr = $(this).parents("tr:first");
  var target = Jtr.find("input[name='" + $(this).attr("target") + "']");
  if(target.length == 0){
    alert("没有找到结果对象!");
    return false;
  }
  var signAverageCount = Jtr.find(".signAverage").length;//空白平均信号值的个数

  var index;//变量的索引值
  var averageIndex = Jtr.find(".signAverage").index($(this));//平均信号值的索引值

  var expressStr,i=0,blIndex,value,flag = true;
  while(true){
    if(Jtr.find("input[mark='Signa0']").length == 0)
      break;
    if(i == 0){
      var bl = $(this).parents("td:first").prev().find("input[mark='Signa0']");
      if(bl.length == 0){
        alert("没有找到变量对象!");
        flag = false;
        break;
      }
      index = Jtr.find("td").index(bl.parents("td:first"));
      value = $.trim(bl.val());
      if(value == ''){

        //bl.focus();
        //	bl.css("border","solid 1px red");
        flag = false;
        break;
      }
      expressStr = value;

    }else{
      expressStr += "+";
      blIndex = index - averageIndex;

      var bl = Jtr.find("td:lt(" + (blIndex+1) + ") input[mark='Signa0']");
      if(bl.length > 1)
        bl = bl.eq(1);
      if(bl.length == 0){
        alert("没有找到变量对象!");
        flag = false;
        break;

      }
      value = $.trim(bl.val());
      if(value == ''){

        //bl.focus();
        //bl.css("border","solid 1px red");
        flag = false;
        break;
      }
      expressStr += value;



    }
    Jtr = Jtr.next();
    i++;

  }
  if(!flag) return false;
  target.val(eval("(" + expressStr + ")")/i);
  setfractionDigits(target);
});

//求含量的平均值
$(".averageResult").click(function(){

  var Jtr = $(this).parents("tr:first");
  var ypid = Jtr.attr("ypid");
  var Jthis = $(this);
  var Jtd = Jthis.parents("td:first");
  var target = Jtr.find("input[name='averageResult']");
  if(target.length == 0){
    target = Jthis.parents("td:first").find("input[mark='averageResult']");
  }
  var prevJtd = Jthis.parents("td:first").prev();
  var resutName = prevJtd.find("input[type='text']").attr("name");
  var expressStr = '',flag = true;
  if(prevJtd.find("input.arbitraryResultClass").length == 0){
    target = Jthis.prevAll("input");
    var reSum = target.attr("reSum");
    if(!reSum)
      reSum = 2;
    var Jre,s=0;
    if(Jtd.attr("rowSpan") != null && Jtd.attr("rowSpan") > 1){
      Jre = prevJtd.find("input");
      var name =  Jre.attr("name");
      reSum = parseInt(Jtd.attr("rowSpan"));
      for(var tt = 0;tt < reSum;tt++){
        if(tt != 0) {
          expressStr += "+";
          Jtr = Jtr.next();
          Jre = Jtr.find("input[name='" + name + "']");
        }

        if(Jre.length == 0){
          alert("请在该单元格内添加控件!");
          prevJtd.css("border","solid 1px red");
          flag = false;
          break;
        }
        var v = $.trim(Jre.val());
        if(v == ''){
          v = 0;
        }else
          s++;
        expressStr += v;

      }
    }else{

      for(var tt = 0;tt < reSum;tt++){
        if(tt != 0) {
          expressStr += "+";
          prevJtd =  prevJtd.prev();

        }
        Jre = prevJtd.find("input");
        if(Jre.length == 0){
          alert("请在该单元格内添加控件!");
          prevJtd.css("border","solid 1px red");
          flag = false;
          break;
        }
        var v = $.trim(Jre.val());
        if(v == ''){
          v = 0;
        }else
          s++;
        expressStr += v;

      }
      if(!flag) return;

    }
    if(s != 0){
      target.val(eval(expressStr)/s);
      setfractionDigits(target);
    }
    return;
  }


  var Jyp = $("tr[ypid='" + ypid + "']");
  if(Jyp.length == 0){
    alert("没有查找到结果对象!");
    return false;
  }
  else if(Jyp.length == 1) return;
  Jyp.each(function(i){
    if(ypid == 'kb_jbhs' && i > 0){
      expressStr += "+" + expressStr;
      return;
    }
    if(i != 0) expressStr += "+";
    var Jresult = $(this).find("input[name='" + resutName + "']");
    if(Jresult.length == 0){
      alert("没有查找到对应的结果对象!");
      return flag = false;
    }
    var v = $.trim(Jresult.val());
    if(v == ''){

      //Jresult.focus();
      //Jresult.css("border","solid 1px red");
      return flag = false;
    }
    if(v.indexOf("L")>=0){
      v = v.substring(0,v.length-1);
    }
    expressStr += v;
  });
  if(!flag) return;

  target.val(eval(expressStr)/Jyp.length);
  setfractionDigits(target);
});

//相对标准偏差

$(".xdbzpc").click(function(i){

  var results = new Array();
  var Jtr = $(this).parents("tr:first");
  var target = Jtr.find("input[name='xdbzpc']");
  if(target.length == 0){
    alert("没有找到结果对象!");
    return false;
  }
  var expressStr='',i=0,value,flag = true;
  while(true){
    if(Jtr.find("input.arbitraryResultClass").length == 0)
      break;



    var bl = Jtr.find("input.arbitraryResultClass");

    if(bl.length == 0){

      alert("没有找到变量对象!");
      flag = false;
      break;

    }
    value = $.trim(bl.prev().val());
    if(value == ''){

      //bl.focus();
      //bl.css("border","solid 1px red");
      flag = false;
      break;
    }




    results[i] = value;
    Jtr = Jtr.next();
    i++;

  }
  if(!flag) return false;
  var JbyAverageResult = $("input[mark='byAverageResult']");
  if(JbyAverageResult.length == 0){
    JbyAverageResult = $("input[mark='bl byAverageResult']");
  }

  var average = JbyAverageResult.val();
  if(!average || average == ''){
    return;
  }
  var sum = 0;
  for(var i in results){
    if(i != 0) expressStr += "+";
    expressStr += results[i];
    sum += (results[i] - average) * (results[i] - average)

  }

  sum = Math.sqrt(sum/(results.length - 1))/average*100;

  sum = Math.ceil(sum*10)/10;

  if(target.attr('yxsz') && target.attr('yxsz') != '')
    sum = setXdpcValue(sum,target.attr('yxsz'));

  if(target.attr('xsd') && target.attr('xsd') != '')
    sum = setXsdValue(result,target.attr('xsd'));


  target.val(sum);

});


//求含量的相对偏差
$(".xdpc").click(function(i){

  var Jtr = $(this).parents("tr:first");

  var target = $(this).parents("td").find("input[mark='xdpc']");
  if(target.length == 0)
    target = $(this).parents("td").find("input[name='xdpc']");//兼容旧的
  var expressStr;
  var flag = true;
  var rowspan = 1;
  if($(this).parents("td").attr("rowspan") == 2){	rowspan = 2;	}	if(rowspan == 1) return;



  var index;//变量的索引值
  var xdpcIndex = Jtr.find(".xdpc").index($(this));//平均信号值的索引值

  var expressStr,i=0,blIndex,value,flag = true,name;
  while(i<=1){

    if(i == 0){
      var bl = $(this).parents("td:first").prev().prev().find("input:first");
      if(bl.length == 0){
        alert("没有找到变量对象!");
        flag = false;
        break;
      }
      index = Jtr.find("td").index(bl.parents("td:first"));
      name = bl.attr("name");
      value = $.trim(bl.val());
      if(value == ''){

        //bl.focus();
        //	bl.css("border","solid 1px red");
        flag = false;
        break;
      }
      if(value.indexOf("L")>=0){
        value = value.substring(0,value.length-1);
      }
      expressStr = value;

    }else{
      if(rowspan == 2){
        blIndex = index - xdpcIndex;


        //var 	bl = Jtr.find("td:lt(" + (blIndex + 1) + ")").find("input");
        var 	bl = Jtr.find("input[name='" + name + "']");

        // if(bl.length > 1)
        //	bl = bl.eq(1);

        if(bl.length == 0){

          alert("没有找到变量对象!");
          flag = false;
          break;

        }
        value = $.trim(bl.val());

        if(value == ''){

          //bl.focus();
          //	bl.css("border","solid 1px red");
          flag = false;
          break;
        }
        if(value.indexOf("L")>=0){
          value = value.substring(0,value.length-1);
        }
      }else{
        value = expressStr;
      }
      expressStr = "((" + expressStr + ")-(" + value + "))/((" + expressStr + ")+(" + value + "))";



    }
    Jtr = Jtr.next();
    i++;

  }
  if(!flag) return false;
  var result = eval("(" + expressStr + ")") * 100;

  if(target.attr('yxsz') && target.attr('yxsz') != '')
    result = setXdpcValue(result,target.attr('yxsz'));


  if(target.attr('xsd') && target.attr('xsd') != '')
    result = setXsdValue(result,target.attr('xsd'));
  target.val(result);
});
//求含量的绝对偏差
$(".jdpc").click(function(i){

  var Jtr = $(this).parents("tr:first");

  var target = $(this).parents("td").find("input[mark='jdpc']");

  var expressStr;
  var flag = true;

  if($(this).parents("td").attr("rowspan") != 2){
    alert("只能有2个平行样!");
    return false;
  }



  var index;//变量的索引值
  var xdpcIndex = Jtr.find(".xdpc").index($(this));//平均信号值的索引值

  var expressStr,i=0,blIndex,value,flag = true;
  while(i<=1){
    if(Jtr.find("input[mark='arbitraryResult result']").length == 0)
      break;
    if(i == 0){
      var bl = $(this).parents("td:first").prev().prev().find("input[mark='arbitraryResult result']");
      if(bl.length == 0){
        alert("没有找到变量对象!");
        flag = false;
        break;
      }
      index = Jtr.find("td").index(bl.parents("td:first"));
      value = $.trim(bl.val());
      if(value == ''){

        //bl.focus();
        //	bl.css("border","solid 1px red");
        flag = false;
        break;
      }
      expressStr = value;

    }else{

      blIndex = index - xdpcIndex;


      var 	bl = Jtr.find("td:lt(" + (blIndex + 1) + ")").find("input[mark='arbitraryResult result']");

      if(bl.length > 1)
        bl = bl.eq(1);

      if(bl.length == 0){

        alert("没有找到变量对象!");
        flag = false;
        break;

      }
      value = $.trim(bl.val());

      if(value == ''){

        //bl.focus();
        //	bl.css("border","solid 1px red");
        flag = false;
        break;
      }
      expressStr = "((" + expressStr + ")-(" + value + "))";



    }
    Jtr = Jtr.next();
    i++;

  }
  if(!flag) return false;
  var result = eval("(" + expressStr + ")");


  result = setXsdValue(result,target.attr('xsd'));
  target.val(result);
});


//RF结果
$(".rf").click(function(i){
  var Jthis = $(this);
  var Jtr = $(this).parents("tr:first");
  var index = Jtr.find("td").index(Jthis.parents("td:first"));
  var Jtarget = $(this).prevAll("input");

  var Jbl,aisq,axq,cq,cis,flag = true;
  var Jcis = $("input[name='cis']");
  if(Jcis.length == 0){
    alert("请添加内标浓度控件!");
    return false;
  }
  cis = $.trim(Jcis.val());
  if(cis == ''){
    //alert("内标浓度不能为空!");
    // Jcis.focus();
    //Jcis.css("border","solid 1px red");
    return false;

  }

  Jtr = Jtr.prev();
  while(Jtr.length > 0){

    Jbl = Jtr.find("td:eq(" + index + ") input");
    Jtr = Jtr.prev();
    if(Jbl.length == 0) continue;
    var blName = Jbl.attr("name");
    if(blName.indexOf('aisq') != -1)
      aisq = $.trim(Jbl.val());
    else if(blName.indexOf('axq') != -1)
      axq = $.trim(Jbl.val());
    else if(blName.indexOf('cq') != -1)
      cq = $.trim(Jbl.val());
    else continue;
    if($.trim(Jbl.val()) == ''){
      //alert(Jbl.attr("showname") + "不能为空!");
      //  Jbl.focus();
      //Jbl.css("border","solid 1px red");
      flag = false;
      break;
    }

  }
  if(!flag) return false;
  if(!aisq){
    alert("请添加内标信号值控件!");
    return false;
  }else if(!axq){
    alert("请添加组分信号值控件!");
    return false;

  }else if(!cq){
    alert("请添加组分浓度值控件!");
    return false;

  }


  var result = eval(axq + "/" + "aisq" + "*" + cis + "/" + cq);
  var xsdnum = Jtarget.attr('xsd');
  sys_ajaxGet("/ysjlb/default.do?method=fractionDigits","value=" + result + "&xsd=" + xsdnum,function(json){
    if(!json.result){
      ajaxAlert(json);
    }
    Jtarget.val(json.result);
  });
});


//回收率的计算

$(".hsl").click(function(i){
  try{
    var Jtr = $(this).parents("tr:first");
    var averageResult1 = Jtr.find("input[name='averageResult0']").val();//加标平均浓度
    if(averageResult1 == null || averageResult1 == ''){
      averageResult1 = Jtr.find("input[name='C']").val();//加标平均浓度
    }
    var jbl = Jtr.find("input[name='jbl']").val();//加标量
    var ypid = Jtr.attr("ypid");
    var averageResult2 = 0;
    if(ypid != 'kb_jbhs'){
      ypid = ypid.substring(0,ypid.indexOf("_jbhs"));
      Jtr = $("tr[ypid='" + ypid + "']");
      averageResult2 = Jtr.find("input[name='averageResult0']").val();//样品平均浓度
    }
    var result = (parseFloat(averageResult1) - parseFloat(averageResult2))/parseFloat(jbl) * 100;
    //空白加标回收计算需要乘以定容体积。
    if(ypid=='kb_jbhs'){
      var JVd = Jtr.find("input[name='Vd']");//定容体积
      if(JVd.length > 0 && JVd.val() != ''){
        result = result * JVd.val();
      }
    }
    if(isNaN(result)) result = '';
    $(this).prev().val(result);
    setfractionDigits($(this).prev());
  }catch(e){
    $(this).prev().val('')
  }

});
