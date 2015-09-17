# form_tramsform
based on jquery 
change html form data into url code, json code, object data make it easy to ajax data

<form id="fff">
<input name="t1" type="" value="1">
<input name="t2" type="" value="2">
<input name="t3" type="" value="3">
<input name="t4" type="" value="4">
<input name="t4" type="" value="5">
<input name="t5" type="" value="4">
<input name="t5" type="" value="5">
</form>

T('fff',{
          type:'object',  //other type: json url
          arr:array('t4','t5')
          });
          
return  an object or  json string code

{t1:"1",t2:"2",t3:"3",t4:array("4","5"),t5:array("4","5")}

url example:
t1=1&t2=2&t3=3&t4[]=4&t4[]=5
or

<input name="t1" type="" value="1">
<input name="t2" type="" value="2">
<input name="t3" type="" value="3">
<input name="t4[]" type="" value="4">
<input name="t4[]" type="" value="5">

T('fff',{
          type:'object',  //other type: json url
          arr:array('t4[]','t5[]')
          });
          
keep the name same
