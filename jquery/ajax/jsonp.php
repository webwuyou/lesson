<?php
// 这个文件是远程端
$_arr=array('a'=>1,'b'=>2,'c'=>3);
$_result=json_encode($_arr);
// echo $_result;
// 跨域处理
$_callback=$_GET['callback'];
echo $_callback."($_result)";
?>