<?php
$MD5_KEY = "Fugen";
$pdo = new PDO("mysql:host=yating.zhongjianyu.cn;dbname=yating_db","yating","12345678");
$pdo->query("set character set 'utf8'");
if(!isset($_SESSION["username"])){
	if(isset($_POST["username"])){
		$username=$_POST["username"];
		$password=$_POST["password"];
		$sql = "select * from userinfor where name='$username'";
		$sth = $pdo->query($sql);
		$row = $sth->fetch();
		if($row['password'] == md5($password.$MD5_KEY))
		{
			 $_SESSION["username"] = $row['name'];
			// //$_SESSION["password"] = $row['password'];
			 setcookie("username",$row["name"],time()+(60*60*24*30));
			$home_url = "../vlabindex.html";
			 header("Location:".$home_url);
		}
		else{
			// $error_msg="Sorry,you must enter a valid username and password to log in";
			// echo $error_msg;
			echo "<script>alert('账号或密码错误'); history.go(-1);</script>";  
		}
}
}
else{
	$home_url = "../vlabindex.html";
	header("Location:".$home_url);
}
?>