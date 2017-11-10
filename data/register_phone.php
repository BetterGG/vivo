<?php
header('Content-Type: application/json;charset=UTF-8');
require("init.php");
@$phone=$_REQUEST["phone"];
	$sql="SELECT * FROM vivo_user_list WHERE phone='$phone'";
  $result=mysqli_query($conn,$sql);
  $row=mysqli_fetch_row($result);
  if($row==0)
	  echo "1";
  else
	  echo "0";