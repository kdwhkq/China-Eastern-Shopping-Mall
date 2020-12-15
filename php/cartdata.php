<?php


//1.连接数据库

include "conn.php";

//2.输出接口
$result=$conn->query("select * from products_list");

$arr = array();

for($i=0;$i<$result->num_rows;$i++){
    $arr[$i] = $result->fetch_assoc();
}

echo json_encode($arr);