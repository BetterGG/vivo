<?php
header('Content-Type: application/json;charset=UTF-8');
require("init.php");
@$email=$_REQUEST["email"];
	$sql="SELECT * FROM vivo_user_list WHERE email='$email'";
  $result=mysqli_query($conn,$sql);
  $row=mysqli_fetch_row($result);
  if($row==0)
	  echo "1";
  else
	  echo "0";