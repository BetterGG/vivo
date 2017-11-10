SET NAMES UTF8;
DROP DATABASE IF EXISTS vivo;
CREATE DATABASE vivo CHARSET=UTF8;
USE vivo;


--/**************商城页****************************************/
--   轮播图
CREATE TABLE vivo_banner(
    banner_id INT PRIMARY KEY AUTO_INCREMENT,
    banner_pic VARCHAR(128),
    banner_place VARCHAR(128)
);
INSERT INTO vivo_banner VALUES
--    主页 轮播图
    (NULL,"img/index/slide1","index"),
    (NULL,"img/index/slide2","index"),
    (NULL,"img/index/slide3","index"),
    (NULL,"img/index/slide4","index"),
--    商城页 轮播图
    (NULL,"img/mall/slide1.jpg","mall"),
    (NULL,"img/mall/slide2.jpg","mall"),
    (NULL,"img/mall/slide3.jpg","mall"),
    (NULL,"img/mall/slide4.jpg","mall"),
    (NULL,"img/mall/slide5.jpg","mall");


--  手机 专区
CREATE TABLE vivo_phone(
    phone_id INT PRIMARY KEY AUTO_INCREMENT,
    phone_pic VARCHAR(128),
    phone_title VARCHAR(128),
    phone_detail VARCHAR(128),
    phone_price FLOAT(8),
--    类型：新品，热销 ...
    phone_type VARCHAR(128),
--    所需图片类型
    phone_pic_type VARCHAR(128),
--    使用在哪个页面
    phone_place VARCHAR(128)
);
INSERT INTO vivo_phone VALUES
--    商城页 手机数据 新品专区
    (NULL,"img/index/newproduct1.jpg",null,null,null,"new_pro",null,"mall"),
    (NULL,"img/index/newproduct2.jpg",null,null,null,"new_pro",null,"mall"),
    (NULL,"img/index/newproduct3.jpg",null,null,null,"new_pro",null,"mall"),
--    商城页 手机数据 热卖专区
	(NULL,"img/index/hotsale0.png","X9 Plus全网通","独立DSP图像处理芯片",3600.00,"hotsale","spec","mall"),
	(NULL,"img/index/hotsale2.png","X9 Plus全网通","独立DSP图像处理芯片",3600.00,"hotsale","common","mall"),
	(NULL,"img/index/hotsale3.png","X9 Plus全网通","独立DSP图像处理芯片",3600.00,"hotsale","common","mall"),
	(NULL,"img/index/hotsale4.png","X9 Plus全网通","独立DSP图像处理芯片",3600.00,"hotsale","common","mall"),
	(NULL,"img/index/hotsale5.png","X9 Plus全网通","独立DSP图像处理芯片",3600.00,"hotsale","common","mall"),
	(NULL,"img/index/hotsale6.png","X9 Plus全网通","独立DSP图像处理芯片",3600.00,"hotsale","common","mall");


--  精品配件
CREATE TABLE vivo_fittings(
	fit_id INT PRIMARY KEY AUTO_INCREMENT,
	fit_pic VARCHAR(128),
	fit_title VARCHAR(128),
	fit_detail VARCHAR(128),
	fit_price FLOAT(8),
--	配件类型
	fit_type VARCHAR(128),
--	配件使用的网页
	fit_place VARCHAR(128)
);
INSERT INTO vivo_fittings VALUES
    (NULL,"img/index/fitting1.png","原装闪充充电器","9V/2A支持双引擎充电",58.00,null,"mall"),
    (NULL,"img/index/fitting2.png","原装闪充充电器","9V/2A支持双引擎充电",58.00,null,"mall"),
    (NULL,"img/index/fitting3.png","原装闪充充电器","9V/2A支持双引擎充电",58.00,null,"mall"),
    (NULL,"img/index/fitting4.png","原装闪充充电器","9V/2A支持双引擎充电",58.00,null,"mall"),
    (NULL,"img/index/fitting5.png","原装闪充充电器","9V/2A支持双引擎充电",58.00,null,"mall"),
    (NULL,"img/index/fitting6.png","原装闪充充电器","9V/2A支持双引擎充电",58.00,null,"mall");

-- ---------------------------------------------
--  详情页相关的表 detail 将detail分化，每种参数建一个表
-- ---------------------------------------------

-- 1 手机名称 及 卖点
CREATE TABLE detail_name(
    dn_id INT PRIMARY KEY AUTO_INCREMENT,
    phone_id INT,
    dn_title VARCHAR(128),
    dn_salepoint VARCHAR(128)
);
INSERT INTO detail_name VALUES
    (NULL,1,"X20Plus 全面屏手机 4GB+64GB内存","【新品首发，送半年碎屏宝+明星定制礼盒】18:9更大全面屏，逆光也清晰，照亮你的美！"),
    (NULL,2,"Y66 全网通 3GB+32GB内存","【双十一狂欢购，花呗12期免息分期】3G运存+32G内存，5.5英寸高清大屏。");

-- 2 手机容量
CREATE TABLE detail_capacity(
    cap_id INT PRIMARY KEY AUTO_INCREMENT,
    phone_id INT,
    cap_text VARCHAR(128)
);
INSERT INTO detail_capacity VALUES
    (NULL,1,"全网通 32G版本"),
    (NULL,1,"全网通 64G版本"),
    (NULL,2,"全网通 32G版本"),
    (NULL,2,"全网通 64G版本");

-- 3 手机颜色
CREATE TABLE detail_color(
    cl_id INT PRIMARY KEY AUTO_INCREMENT,
    phone_id INT,
    cl_text VARCHAR(128)
);
INSERT INTO detail_color VALUES
    (NULL,1,"金色"),
    (NULL,1,"玫瑰金"),
    (NULL,1,"磨砂黑"),
    (NULL,2,"金色"),
    (NULL,2,"玫瑰金"),
    (NULL,2,"磨砂黑");

-- 4 手机套餐
CREATE TABLE detail_package(
    pk_id INT PRIMARY KEY AUTO_INCREMENT,
    phone_id INT,
    pk_text VARCHAR(128)
);
INSERT INTO detail_package VALUES
    (NULL,1,"官方标配"),
    (NULL,1,"乐心手环套餐 ¥3133 省¥34"),
    (NULL,1,"蓝牙音箱套餐 ¥3077 省¥20"),
    (NULL,1,"AKG耳机套餐 ¥3232 省¥65"),
    (NULL,2,"官方标配"),
    (NULL,2,"保护壳套餐 ¥1332 省¥5"),
    (NULL,2,"钢化膜套餐 ¥1322 省¥5"),
    (NULL,2,"游戏手柄套餐 ¥1397 省¥20");

-- 5 手机服务
CREATE TABLE detail_sevice(
    sv_id INT PRIMARY KEY AUTO_INCREMENT,
    phone_id INT,
    sv_text VARCHAR(128)
);
INSERT INTO detail_sevice VALUES
    (NULL,1,"半年延保￥69"),
    (NULL,1,"一年延保￥109"),
    (NULL,2,"半年延保￥69"),
    (NULL,2,"一年延保￥109"),
    (NULL,2,"一年碎屏宝.Y系列普通屏");

-- 6 镌刻服务
CREATE TABLE detail_engrave(
    egr_id INT PRIMARY KEY AUTO_INCREMENT,
    phone_id INT,
    egr_text VARCHAR(128)
);
INSERT INTO detail_engrave VALUES
    (NULL,1,"添加免费的镭射镌刻服务");

-- --------------------------------------------
--  全屏展示图
-- --------------------------------------------
CREATE TABLE super_pic(
    sp_id INT PRIMARY KEY AUTO_INCREMENT,
    phone_id INT,
    sp_page VARCHAR(128),           --  使用位置，哪个页面
    sp_pic VARCHAR(128)
);
INSERT INTO super_pic VALUES
    (NULL,1,"detail","../img/detail/ad06.jpg"),
    (NULL,1,"detail","../img/detail/ad05.jpg"),
    (NULL,1,"detail","../img/detail/ad04.jpg"),
    (NULL,1,"detail","../img/detail/ad03.jpg");

-- ---------------------------------------------
--  评论 与 回复
-- ---------------------------------------------
CREATE TABLE comment(
    c_id INT PRIMARY KEY AUTO_INCREMENT,
    uid INT,
    c_text VARCHAR(2048)
);
INSERT INTO comment VALUES
    (NULL,1,"手机今天下午收到了 手机确实不错非常好用 而且送的小音响非常棒 全部五星好评物流非常快 头天上午买的 第二天上午就到了"),
    (NULL,1,"手机收到了，这是我买的第五部vivo了"),
    (NULL,1,"从五年前，选择vivo就一直没有变过手机品牌，用的三台手机都没有出现任何状况，而且非常耐用，五年用三台，平均一台用两年，继续支持！！配图"),
    (NULL,2,"N台vivo不解释，忠实v粉。怎奈囊中羞涩有x7p将就用不敢对x20下手。"),
    (NULL,2,"一句话国产手机的娇娇者"),
    (NULL,2,"一直用vivo，手机不错"),
    (NULL,2,"本次是第二次购机，都是维沃，本机价格合理，从未出现任何毛病，发货都挺顺畅的，我们一家已有4部维沃了，希望维沃多卖点，特评价，100分。");

-- -------------------------------------
-- 使用者 user
-- -------------------------------------
CREATE TABLE vivo_user_list(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(16),
    upwd VARCHAR(32),
    email VARCHAR(32),
    phone VARCHAR(16),
    user_name VARCHAR(8),
    user_card VARCHAR(18),
    gender VARCHAR(1)
);
INSERT INTO vivo_user_list VALUES
    (1, 'tom', '123456', 'tom@qq.com', '13755886388', '汤姆汉', '362220198307201220', '1'),
    (2, 'snack', '123456', 'snack@qq.com', '18265423699', '张益达', '362420199507140233', '1'),
    (3, 'anne', '123456', 'anne@qq.com', '13755886388', '程晓玥', '362202199810053304', '0'),
    (4, 'jackpa', '123456', 'jack111@qq.com', '1375156156', '杰克安多福', '362220198307201221', '1'),
    (5, 'jackson', '123456', 'jack111@qq.com', '1375156156', '杰克安多福', '362220198307201221', '1'),
    (6, 'jsdpa', '123456', 'jack111@qq.com', '1375156156', '欧文', '362220198307201221', '1'),
    (7, 'dongdong', '123456', 'jack111@qq.com', '1375156156', '家肯德基', '362220198307201221', '1'),
    (8, 'anmate', '123456', 'jack111@qq.com', '1375156156', '安静点', '362220198307201221', '0'),
    (9, 'adas', '123456', 'jack111@qq.com', '1375156156', '阿达', '362220198307201231', '1'),
    (10, 'adsdfc', '123456', 'jack111@qq.com', '1375156156', '奥迪福', '362220198303201221', '1'),
    (11, 'jaoasdf', '123456', 'jack111@qq.com', '1375156156', '打的费福', '362220198303201221', '0'),
    (12, 'kaka', '123456', 'jack111@qq.com', '1375156156', '家看到', '362220198303201221', '1'),
    (13, 'waipo', '123456', 'jack111@qq.com', '1375156156', '乤婆', '362220198303201221', '0'),
    (14, 'adf', '123456', 'jack111@qq.com', '1375156156', '阿道夫', '362220198303201221', '1'),
    (15, 'xiedifei', '123456', 'jack111@qq.com', '1375156156', '谢迪飞', '362220198303201221', '1'),
    (16, 'jadad', '123456', 'jack111@qq.com', '1375156156', '奥迪福', '362220198303201221', '1'),
    (17, 'hanmm', '123456', 'jack111@qq.com', '1375156156', '韩梅梅', '362220198303201221', '0'),
    (18, 'ouxiang', '123456', 'jack111@qq.com', '1375156156', '偶像', '362220198303201221', '1'),
    (19, 'jaoadfadf', '123456', 'jack111@qq.com', '1375156156', '奥迪福', '362220198303201221', '1'),
    (20, 'kakaxi', '123456', 'jack111@qq.com', '1375156156', '卡卡西', '362220198303201221', '1'),
    (21, 'nanido', '123456', 'jack111@qq.com', '1375156156', '鸣人', '362220198303201221', '1'),
    (22, 'zuozhu', '123456', 'jack111@qq.com', '1375156156', '佐助', '362220198303201221', '1'),
    (23, '小李', '123456', 'jack111@qq.com', '1375156156', '小李', '362220198303201221', '1'),
    (NULL,"tom","123456","tom@qq.com","13755886388","汤姆汉","362220198307201220","1"),
    (NULL,"snack","123456","snack@qq.com","18265423699","张益达","362420199507140233","1"),
    (NULL,"anne","123456","anne@qq.com","13755886388","程晓玥","362202199810053304","0");

