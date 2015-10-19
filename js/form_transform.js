//表单转换函数 用于转换后数据更好的用于ajax 不适应与图片上传！
//forexchange fid:the id for html form element ,
//option:select the exchangetype and if it exits array you have to convert the name of input change to array
function F(fid,option){
	var type=option.type ? option.type : 'object';
	var arr=option.arr ? option.arr : false;
	var namelist="";
	
	//解析arr 数组表达
	if(arr!=false){
		var count=arr.length-1;
		for(i=0;i<=count;i++){
			namelist=namelist+"[name!='"+arr[i]+"']";
		}
	}
	
	
	if(F._init!=1){
	  F._init=1;
	  
	  F.urldeal=function(el){
		  //按url方式生成数据
		  var name=$(el).attr("name");
		  var value=$(el).val();
		  return name+'='+value;
	  }
	  
	  //转为字符串url数据 ?=xx=xx&xx=xx
	  F.text=function(){
		  var first=true;
		  var datastr="";
		  var arrprefix='[]';
		  var arrtest=/\[\]/;
		  
		  //数组转换
		  if(arr!=false){
			  for(i=0;i<=count;i++){
				  $("#"+fid+" input[name='"+arr[i]+"']").each(function(index,el){
					  if(first){
						  first=false;
						  if(arrtest.test(arr[i])){
							  datastr="?="+arr[i]+"="+$(el).val();
						  }else{
							  datastr="?="+arr[i]+"[]="+$(el).val();
						  }
					  }else{
						  if(arrtest.test(arr[i])){
							  datastr=datastr+"&"+arr[i]+"="+$(el).val();
						  }else{
							  datastr=datastr+"&"+arr[i]+"[]="+$(el).val();
						  }
					  }
				  });
			  }
		  }
		  
		  //文本输入框
		  $("#"+fid+" input:text"+namelist).each(function(index, el){
			  if(first){
				  first=false;
				  datastr="?"+F.urldeal(el);
			  }else{
				  datastr=datastr+"&"+F.urldeal(el);
			  }
		  });
		  
		  //文本输入框
		  $("#"+fid+" input:hidden"+namelist).each(function(index, el){
			  if(first){
				  first=false;
				  datastr="?"+F.urldeal(el);
			  }else{
				  datastr=datastr+"&"+F.urldeal(el);
			  }
		  });
		  
		  //富文本框
		  $("#"+fid+" textarea"+namelist).each(function(index, el){
			  if(first){
				  first=false;
				  datastr="?"+F.urldeal(el);
			  }else{
				  datastr=datastr+"&"+F.urldeal(el);
			  }
		  });
		  
		  //多选项
		  $("#"+fid+" input:checkbox:checked"+namelist).each(function(index, el) {
			  if(first){
				  first=false;
				  datastr="?"+F.urldeal(el);
			  }else{
				  datastr=datastr+"&"+F.urldeal(el);
			  }
		  });
		  
		  //单选项
		  $("#"+fid+" input:radio:checked"+namelist).each(function(index, el) {
			  if(first){
				  first=false;
				  datastr="?"+F.urldeal(el);
			  }else{
				  datastr=datastr+"&"+F.urldeal(el);
			  }
		  });
		  
		  //密码输入
		  $("#"+fid+" input:password"+namelist).each(function(index, el) {
			  if(first){
				  first=false;
				  datastr="?"+F.urldeal(el);
			  }else{
				  datastr=datastr+"&"+F.urldeal(el);
			  }
		  });
		  
		  //下拉菜单
		  $("#"+fid+" select"+namelist).each(function(index, el) {
			  if(first){
				  first=false;
				  datastr="?"+F.urldeal(el);
			  }else{
				  datastr=datastr+"&"+F.urldeal(el);
			  }
		  });
		  
		  return datastr;
	  }
	  
	  //字符串转换为对象
	  F.turnintoobj=function(str){
		  var obj=eval('({'+str+'})');
		  return obj;
	  }
	  
	  F.objdeal=function(el){
		  //按对象方式生成数据
		  var name=$(el).attr("name");
		  var value=$(el).val();
		  var str=name+":"+'"'+value+'"';
		  return str;
	  }
	  
	  //转换为object数据
	  F.obj=function(){
		  var first=true;
		  var objstr="";
		  
		  //数组转换
		  if(arr!=false){
			  for(i=0;i<=count;i++){
				  var arrdatastr="";
				  $("#"+fid+" input[name='"+arr[i]+"']").each(function(index,el){
					  if(index==0){
						  arrdatastr=arrdatastr+'["'+$(el).val()+'"';
					  }else{
						  arrdatastr=arrdatastr+',"'+$(el).val()+'"';
					  }
				  });
				  
				  if(first){
					  first=false;
					  objstr="'"+arr[i]+"':"+arrdatastr+"]";
				  }else{
					  objstr=objstr+",'"+arr[i]+"':"+arrdatastr+"]";
				  }
			  }
		  }
		  
		  //文本输入框
		  $("#"+fid+" input:text"+namelist).each(function(index, el){
			  if(first){
				  first=false;
				  objstr+=F.objdeal(el);
			  }else{
				  objstr=objstr+","+F.objdeal(el);
			  }
		  });
		  
		  $("#"+fid+" input:hidden"+namelist).each(function(index, el){
			  if(first){
				  first=false;
				  objstr+=F.objdeal(el);
			  }else{
				  objstr=objstr+","+F.objdeal(el);
			  }
		  });
		  
		  //富文本框
		  $("#"+fid+" textarea"+namelist).each(function(index, el){
			  if(first){
				  first=false;
				  objstr+=F.objdeal(el);
			  }else{
				  objstr=objstr+","+F.objdeal(el);
			  }
		  });
		  
		  //多选项
		  $("#"+fid+" input:checkbox:checked"+namelist).each(function(index, el) {
			  if(first){
				  first=false;
				  objstr+=F.objdeal(el);
			  }else{
				  objstr=objstr+","+F.objdeal(el);
			  }
		  });
		  
		  //单选项
		  $("#"+fid+" input:radio:checked"+namelist).each(function(index, el) {
			  if(first){
				  first=false;
				  objstr+=F.objdeal(el);
			  }else{
				  objstr=objstr+","+F.objdeal(el);
			  }
		  });
		  
		  //密码输入
		  $("#"+fid+" input:password"+namelist).each(function(index, el) {
			  if(first){
				  first=false;
				  objstr+=F.objdeal(el);
			  }else{
				  objstr=objstr+","+F.objdeal(el);
			  }
		  });
		  
		  //下拉菜单
		  $("#"+fid+" select"+namelist).each(function(index, el) {
			  if(first){
				  first=false;
				  objstr+=F.objdeal(el);
			  }else{
				  objstr=objstr+","+F.objdeal(el);
			  }
		  });
		  
		  return objstr;
	  }
	}
	
	if(type=="object"){
		var r=F.obj();
		return F.turnintoobj(r);
	}else if(type=="json"){
		var r=F.obj();
		return "{"+r+"}";
	}else if(type=="url"){
		var r=F.text();
		return r;
	}
}