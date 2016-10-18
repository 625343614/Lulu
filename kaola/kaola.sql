SET NAMES utf8;

DROP DATABASE IF EXISTS kaola;#这是删除数据库
CREATE DATABASE kaola CHARSET=UTF8;
USE kaola;

CREATE TABLE IF NOT EXISTS `kl_users`(
	`user_id` int(11) PRIMARY KEY AUTO_INCREMENT,
	`user_name` varchar(100),
	`user_pwd` varchar(100)
);

INSERT INTO `kl_users` VALUES(NULL, 'Lulu', '123456');
#insert into kl_users(user_name,user_pwd) values('xm','123456');
#删除表
#DROP TABLE IF EXISTS kl_users;#删除表kl_users


#删除记录，也就是删除一个用户

delete from kl_users where user_id = 3;
delete from kl_users where user_name='xm';
