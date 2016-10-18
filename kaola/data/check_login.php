<?php
	//接受客户端请求
	$uname=trim($_REQUEST['uname']);//接受用户名
	$upwd=trim($_REQUEST['upwd']);//接受密码

	//连接数据库
	/*include 'db.php';//引用数据库配置文件
	//require_once 'db.php';//引用数据库配置文件
	$connect=mysqli_connect($host, $user, $password, $database, $port)
			//mysql_error($connect);这个函数是输出 错误号
			or die('数据库连接失败,错误号:'.mysql_errno($connect).'错误信息:'.mysql_error());

	//修改数据库编码
	$sql='SET NAMES UTF8';
	mysqli_query($connect, $sql);

	//查询数据量是否有这个用户
	$query  = "select * from kl_users where user_name='$uname' and user_pwd='$upwd'";
	//$query  = "select * from kl_users where id = 1";
	$result =mysqli_query($connect, $query);//是一种数据，叫 资源
	$data = mysqli_fetch_array($result,1);//这句话是从资源里面取出数据

	if($data){
		$data['msg'] = '恭喜您，登陆成功~登陆成功后3s后跳转';
		$data['code'] = '1';
		
	}else{
		$data['msg'] = '用户名或密码错误~';
		$data['code'] = '2';
	}*/

	//echo json_encode($data);//输入json数据给ajax
	//exit;//结束集即使后面有代码也不会执行了。这行可加可不加
	$userArr = array('Lulu','admin');
	if (in_array($uname, $userArr) && $upwd == '123456') {
		$data['msg'] = '恭喜您，登陆成功~登陆成功后3s后跳转';
		$data['code'] = '1';

	}else{
		$data['msg'] = '用户名或密码错误~';
		$data['code'] = '2';
	}

	$str=json_encode($data);
	echo $str;//echo-》只能输出数字和字符串
