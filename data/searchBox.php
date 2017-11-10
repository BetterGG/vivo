<?php
header(
  "Content-Type:application/json;charset=UTF-8");
  require_once("init.php");
  //search.php?kw=apple mac
  $kw=$_REQUEST["kw"];

  $sql="SELECT title FROM vivo_laptop WHERE title LIKE '%".$kw."%' ORDER BY price DESC LIMIT 10";
  echo json_encode(sql_execute($sql));