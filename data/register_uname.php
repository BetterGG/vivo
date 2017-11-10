<?php
header('Content-Type: application/json;charset=UTF-8');
require("init.php");
@$uname=$_REQUEST["uname"];
	$sql="SELECT * FROM vivo_user_list WHERE uname='$uname'";
  $result=mysqli_query($conn,$sql);
  $row=mysqli_fetch_row($result);
  if($row==0)    //没抓到输出1(说明数据库目前该uname没被注册)
	  echo "1";
  else
	  echo "0";
?>