function getId(elementId){
  return document.getElementById(elementId);
}

/*当鼠标放在通行证用户名文本框时，提示文本及样式*/   
function userNameFocus(){
  var userNameIdd = getId("userNameIdd");
  userNameIdd.className = "import_promptt";
  userNameIdd.innerHTML = "请输入你的学号，只能由8位数字组成";  
}

/*当鼠标离开通行证用户名文本框时，提示文本及样式*/  
function userNameBlur() 
{
  var userNamee = getId("userNamee");
  var userNameIdd = getId("userNameIdd");
  var reg = new RegExp(/^\d{8}$/);

  if(userNamee.value==""){
    userNameIdd.className = "error_promptt";
    userNameIdd.innerHTML = "用户名不能为空，请输入8位数字账号";
    return false;
  }
  if(reg.test(userNamee.value)==false){
    userNameIdd.className = "error_promptt";
    userNameIdd.innerHTML = "请输入你的学号，由8位数字组成";
    return false;
  }
  userNameIdd.className = "ok_promptt";
  userNameIdd.innerHTML = "用户名输入正确";
  return true;  
}

/*当鼠标放在密码文本框时，提示文本及样式*/   
function pwdFocus() {
  var pwdIdd = getId("pwdIdd");
  pwdIdd.className = "import_promptt";
  pwdIdd.innerHTML = "密码为6-20位同时含字母和数字且不含符号的字符串";
}

/*当鼠标离开密码文本框时，提示文本及样式 密码为6-20位同时含字母和数字且不含符号的字符串，*/  
function pwdBlur(){
  var pwddd = getId("pwddd");
  var pwdIdd = getId("pwdIdd");
  var reg = new RegExp(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/)
  if(pwddd.value == ""){
    pwdIdd.className = "error_promptt";
    pwdIdd.innerHTML = "密码不能为空，请输入密码";
    return false;
  }
  if(reg.test(pwddd.value)==false){
    pwdIdd.className = "error_promptt";
    pwdIdd.innerHTML = "密码为6-20位同时含字母和数字且不含符号的字符串";
    return false;
  }
  pwdIdd.className = "ok_promptt";
  pwdIdd.innerHTML = "密码输入正确";
  return true;
}

/*当鼠标离开重复密码文本框时，提示文本及样式*/ 
function repwdBlur(){
  var repwdd = getId("repwdd");
  var pwddd = getId("pwddd");
  var repwdIdd = getId("repwdIdd");
  if(repwdd.value==""){
    repwdIdd.className = "error_promptt";
    repwdIdd.innerHTML = "重复密码不能为空，请重复输入密码";
    return false;
  }
  if(repwdd.value!=pwddd.value){
    repwdIdd.className = "error_promptt";
    repwdIdd.innerHTML = "两次输入的密码不一致，请重新输入";
    return false;
  }
  repwdIdd.className = "ok_promptt";
  repwdIdd.innerHTML = "两次密码输入正确";
  return true;
}

/*表单提交时验证表单内容输入的有效性*/
function checkForm(){
  var flagUserName = userNameBlur();
  var flagPwd = pwdBlur();
  var flagRepwd = repwdBlur();

  userNameBlur();
  pwdBlur();
  repwdBlur();
  if(flagUserName==true &&flagPwd==true &&flagRepwd==true){
    alert("注册成功");
    return true;
  }
  else{
    return false;
  }
}