<?php
$MD5_KEY = "Fugen";
$pdo = new PDO("mysql:host=yating.zhongjianyu.cn;dbname=yating_db","yating","12345678");
$pdo->query("set character set 'utf8'");
// &&$_POST["Submit"]!=false
if(isset($_POST["Submit"]))
{   
    // echo "<script>alert('提交成功'); history.go(-1);</script>";
        $password = $_POST['password'];
        $repassword = $_POST['repassword']; 
    if($password==$repassword){
        $name = $_POST['name'];
        $sql = "select * from userinfor where name='$name'";
        $sth = $pdo->query($sql);
        $num = $sth->fetchColumn();
        if($num)    //如果已经存在该用户  
        {  
            echo "<script>alert('用户名已存在'); history.go(-1);</script>";  
        }
        else{
             $password = md5($password.$MD5_KEY);
             $sql_insert = "insert into userinfor(id,name,password,email) values('','$name','$password','')";
             $sth_insert = $pdo->query($sql_insert);
             if($sth_insert){
                 echo "<script> history.go(-1);</script>";  
             }
             else{
                 echo "<script>alert('系统繁忙，请稍候');history.go(-1);</script>"; 
             }
        } 
    }
    else{
            echo "<script>alert('密码不一致'); history.go(-1);</script>"; 
    }
}
else{
            echo "<script>alert('提交未成功'); history.go(-1);</script>"; 
    }
?>

