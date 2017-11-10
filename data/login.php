<?php
 header('Content-Type: application/json;charset=UTF-8');
 require("init.php");
 $uname = $_REQUEST["uname"];
 $upwd = $_REQUEST["upwd"];
 $sql = "SELECT * FROM vivo_user WHERE '$uname' IN (uname,email,phone)  AND upwd='$upwd'";
 $result = mysqli_query($conn,$sql);
 $row = mysqli_fetch_assoc($result);
if($row==null){
   echo json_encode( [ "code"=>-1] );
 }else{
  echo json_encode( [ "code"=>1,"uid"=>$row["uid"] ] );
 }
?>