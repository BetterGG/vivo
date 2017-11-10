<?php
	header('Content-Type: application/json;charset=UTF-8');
	header("Location: http://localhost/002-vivo/index.html");
  	require("init.php"); 
	#1、获取请求提交的数据
	$uname=$_REQUEST["uname"];
	$upwd=$_REQUEST["upwd"];
	$email=$_REQUEST["email"];
	$phone=$_REQUEST["phone"];
	
	$sql="INSERT INTO vivo_user_list(uname,upwd,email,phone) VALUES('$uname','$upwd','$email','$phone')";
	$result=mysqli_query($conn,$sql);
	if($result === true){
		echo "1";
	}else{
		echo "0";
	}

//$url = "http://localhost/002-vivo/index.html";
//echo "<script type='text/javascript'>";
//echo "window.location.href='$url'";
//echo "</script>";

//<html>
//<head>
 //   <meta http-equiv="refresh" content="1;url=<?php echo $url; ?>">
//</head>
//<body>
 //   It's transit station.
//</body>
//</html>
?>