-- MySQL dump 10.13  Distrib 5.6.17, for Win64 (x86_64)
--
-- Host: 203.86.236.19    Database: vivmalldb
-- ------------------------------------------------------
-- Server version	5.6.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tb_activities`
--

DROP TABLE IF EXISTS `tb_activities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_activities` (
  `email` char(100) CHARACTER SET utf8 DEFAULT NULL,
  `activity` char(100) CHARACTER SET utf8 DEFAULT NULL,
  `activity_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_activities`
--

LOCK TABLES `tb_activities` WRITE;
/*!40000 ALTER TABLE `tb_activities` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_activities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_allcode`
--

DROP TABLE IF EXISTS `tb_allcode`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_allcode` (
  `ID` varchar(2) COLLATE utf8_unicode_ci NOT NULL,
  `length` int(11) DEFAULT NULL,
  `increase` int(11) DEFAULT '0',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_allcode`
--

LOCK TABLES `tb_allcode` WRITE;
/*!40000 ALTER TABLE `tb_allcode` DISABLE KEYS */;
INSERT INTO `tb_allcode` VALUES ('OD',8,72);
/*!40000 ALTER TABLE `tb_allcode` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_contact`
--

DROP TABLE IF EXISTS `tb_contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_contact` (
  `fullname` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `email` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `phone` char(100) CHARACTER SET utf8 DEFAULT NULL,
  `content` varchar(500) CHARACTER SET utf8 DEFAULT NULL,
  `contact_date` datetime DEFAULT NULL,
  `state` int(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_contact`
--

LOCK TABLES `tb_contact` WRITE;
/*!40000 ALTER TABLE `tb_contact` DISABLE KEYS */;
INSERT INTO `tb_contact` VALUES ('123','asdf@gmail.com','123123','123','2015-04-08 00:00:00',1),('231','12312@gmail.com','123','23123','2015-04-08 00:00:00',1),('312','12@gmail.com','123','13','2015-04-08 00:00:00',1),('123123','ngocphung2002@gmail.com','13123','123123','2015-04-09 00:00:00',1),('123123','ngocphung2002@gmail.com','123','123123','2015-08-18 00:00:00',0),('123','ngocphung2002@gmail.com','123','123123','2015-08-18 00:00:00',0),('123','12321@gmail.com','123','123','2015-08-18 00:00:00',1),('123123','12312@gmail.com','123','123123','2015-08-18 00:00:00',1),('askjasklaskj','uyuyuyuy@gmail.com','0.2123as1df','3oiyuhjkhdsf','2015-08-19 00:00:00',1);
/*!40000 ALTER TABLE `tb_contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_delivery_method`
--

DROP TABLE IF EXISTS `tb_delivery_method`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_delivery_method` (
  `delivery_method_id` varchar(255) CHARACTER SET utf8 NOT NULL,
  `delivery_method_name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `delivery_method_des` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`delivery_method_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_delivery_method`
--

LOCK TABLES `tb_delivery_method` WRITE;
/*!40000 ALTER TABLE `tb_delivery_method` DISABLE KEYS */;
INSERT INTO `tb_delivery_method` VALUES ('01','AAA','AAA'),('02','BBB','BBB');
/*!40000 ALTER TABLE `tb_delivery_method` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_guide`
--

DROP TABLE IF EXISTS `tb_guide`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_guide` (
  `info_guide` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`info_guide`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_guide`
--

LOCK TABLES `tb_guide` WRITE;
/*!40000 ALTER TABLE `tb_guide` DISABLE KEYS */;
INSERT INTO `tb_guide` VALUES ('Huong dan su dung');
/*!40000 ALTER TABLE `tb_guide` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_introduction`
--

DROP TABLE IF EXISTS `tb_introduction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_introduction` (
  `info_intro` text CHARACTER SET utf8
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_introduction`
--

LOCK TABLES `tb_introduction` WRITE;
/*!40000 ALTER TABLE `tb_introduction` DISABLE KEYS */;
INSERT INTO `tb_introduction` VALUES ('<p>The information is being updated</p>\n');
/*!40000 ALTER TABLE `tb_introduction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_mailsending`
--

DROP TABLE IF EXISTS `tb_mailsending`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_mailsending` (
  `email` varchar(100) DEFAULT NULL,
  `email_to` varchar(100) DEFAULT NULL,
  `senddate` datetime DEFAULT NULL,
  `title` text,
  `content` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_mailsending`
--

LOCK TABLES `tb_mailsending` WRITE;
/*!40000 ALTER TABLE `tb_mailsending` DISABLE KEYS */;
INSERT INTO `tb_mailsending` VALUES ('123@34','234@234','2015-04-14 00:00:00','titletest','contentstest'),('testsendmail@MailSendingController.com','ngocphung2002@gmail.com','2015-04-14 00:00:00','test 14','   test 2014'),('testsendmail@MailSendingController.com','ngocphung2002@gmail.com','2015-04-14 00:00:00','testat','   trst2'),('testsendmail@MailSendingController.com','asdf@gmail.com','2015-04-15 00:00:00','hshaj','   gshaj'),('u1','ngocphung2002@gmail.com','2015-04-15 00:00:00','trauin','trian   '),('u1','ngocphung2002@gmail.com','2015-04-15 00:00:00','456','   dfg'),('u1','asdf@gmail.com','2015-08-17 00:00:00','123123','   123'),('u1','asdf@gmail.com','2015-08-17 00:00:00','123123','   123'),('u1','asdf@gmail.com','2015-08-17 00:00:00','45345','   53'),('u1','asdf@gmail.com','2015-08-17 00:00:00','45345','   53'),('u1','asdf@gmail.com','2015-08-17 00:00:00','123','   123'),('u1','asdf@gmail.com','2015-08-17 00:00:00','123','   123'),('u1','12312@gmail.com','2015-08-17 00:00:00','123','   123'),('u1','asdf@gmail.com','2015-08-17 00:00:00','123','   123123'),('u1','12321@gmail.com','2015-08-18 00:00:00','iuy234','sdfsdjkfhds   ');
/*!40000 ALTER TABLE `tb_mailsending` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_member`
--

DROP TABLE IF EXISTS `tb_member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_member` (
  `email` varchar(100) NOT NULL,
  `pass` varchar(100) DEFAULT NULL,
  `fullname` varchar(100) DEFAULT NULL,
  `birthday` varchar(100) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `address_delivery` varchar(100) DEFAULT NULL,
  `register_date` varchar(20) DEFAULT NULL,
  `confirm` int(11) DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_member`
--

LOCK TABLES `tb_member` WRITE;
/*!40000 ALTER TABLE `tb_member` DISABLE KEYS */;
INSERT INTO `tb_member` VALUES ('123@gmail.com','','123','',NULL,'123123','sdfsdfsdf3223','2015-08-17 15:51:58',1),('999@gmail.com','','asdf','',NULL,'0909 256 596','sdfsdfsdf3223','2015-08-18 10:10:51',1),('aaaa@gmail.com','','aaaaa','',NULL,'10314121','asfh31','2015-08-19 17:04:56',1),('asdas@gmail.com','','gsfds','',NULL,'01201201101','sdfsdfsdf3223','2015-08-19 16:56:47',1),('asfa@gmail.com','','123','',NULL,'12312','sdfsdfsdf3223','2015-08-17 15:54:01',1),('minhchau2611@gmail.com','123456','aaa','01/04/2015',NULL,'1234567','sdfsdfsdf3223','15/04/2015 21:16:00',0),('ngocphung2002@gmail.com','123','Hùng Ngọc Phụng','',NULL,'12313','sdfsdfsdf3223','2015-03-10 00:25:48',1),('OD00000062','','123123','',NULL,'123123','sdfsdfsdf3223','2015-03-10 08:52:58',1),('OD00000063','','ngocphung200','',NULL,'123123','sdfsdfsdf3223','2015-03-13 10:35:52',1),('OD00000064','','12313213131','',NULL,'231231','sdfsdfsdf3223','2015-03-13 10:38:34',1),('OD00000065','','huynh minh chau','',NULL,'0916772477','sdfsdfsdf3223','2015-04-03 18:09:09',1),('OD00000066','','huynh minh chau','',NULL,'0916772477','sdfsdfsdf3223','2015-04-03 20:14:28',1),('test@gmail.com','123456','test','09/09/1998',NULL,'0909090990',NULL,'04/07/2017 10:15:19',0),('testdangky@gmail.com','123456','triet','22/08/2015',NULL,'01010101','sdfsdfsdf3223','19/08/2015 15:49:33',0),('u2@gmail.com','123456','123','20/08/2015',NULL,'123','sdfsdfsdf3223','18/08/2015 10:03:06',0),('yyyyh@gmail.com','123456','456456','14/08/2015',NULL,'252525','sdfsdfsdf3223','18/08/2015 09:28:56',0);
/*!40000 ALTER TABLE `tb_member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_member_role`
--

DROP TABLE IF EXISTS `tb_member_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_member_role` (
  `email` varchar(50) CHARACTER SET utf8 NOT NULL,
  `role_id` char(10) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_member_role`
--

LOCK TABLES `tb_member_role` WRITE;
/*!40000 ALTER TABLE `tb_member_role` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_member_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_order`
--

DROP TABLE IF EXISTS `tb_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_order` (
  `order_id` char(10) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `payment_method_id` char(10) DEFAULT NULL,
  `delivery_method_id` char(10) DEFAULT NULL,
  `order_date` datetime DEFAULT NULL,
  `order_status` varchar(50) DEFAULT NULL,
  `note` varchar(50) DEFAULT NULL,
  `invoice` int(11) DEFAULT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_order`
--

LOCK TABLES `tb_order` WRITE;
/*!40000 ALTER TABLE `tb_order` DISABLE KEYS */;
INSERT INTO `tb_order` VALUES ('OD00000061','ngocphung2002@gmail.com','01','01','2015-03-10 00:25:48','-1','123123',0),('OD00000062','123123','01','01','2015-03-10 08:52:58','0','12313',0),('OD00000063','OD00000063','01','01','2015-03-13 10:35:52','-1','',0),('OD00000064','OD00000064','01','01','2015-03-13 10:38:34','2','',0),('OD00000065','OD00000065','01','01','2015-04-03 18:09:09','-1','',0),('OD00000066','OD00000066','01','01','2015-04-03 20:14:28','2','',0),('OD00000067','123@gmail.com','01','01','2015-08-17 15:51:58','1','123123',0),('OD00000068','asfa@gmail.com','01','01','2015-08-17 15:54:01','-1','123123',0),('OD00000069','999@gmail.com','01','01','2015-08-18 10:10:51','-1','123123',1),('OD00000070','asdas@gmail.com','01','01','2015-08-19 16:56:47','0','ggg',1),('OD00000071','asdas@gmail.com','01','01','2015-08-19 16:56:57','1','ggg',1),('OD00000072','aaaa@gmail.com','01','01','2015-08-19 17:04:56','-1','',0);
/*!40000 ALTER TABLE `tb_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_order_detail`
--

DROP TABLE IF EXISTS `tb_order_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_order_detail` (
  `product_id` varchar(20) CHARACTER SET latin1 DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `amount` float DEFAULT NULL,
  `order_id` varchar(10) CHARACTER SET latin1 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_order_detail`
--

LOCK TABLES `tb_order_detail` WRITE;
/*!40000 ALTER TABLE `tb_order_detail` DISABLE KEYS */;
INSERT INTO `tb_order_detail` VALUES ('11',1,700,700,'OD00000061'),('10',1,600,600,'OD00000062'),('12',9,800,7200,'OD00000062'),('13',1,700,700,'OD00000062'),('10',1,300000,300000,'OD00000063'),('11',1,700000,700000,'OD00000064'),('10',1,300000,300000,'OD00000066'),('3',1,500000,500000,'OD00000067'),('1',1,200000,200000,'OD00000068'),('den2',2,200000,400000,'OD00000069'),('den1',1,120000,120000,'OD00000070'),('den1',1,120000,120000,'OD00000071'),('den1',1,120000,120000,'OD00000072');
/*!40000 ALTER TABLE `tb_order_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_payment_method`
--

DROP TABLE IF EXISTS `tb_payment_method`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_payment_method` (
  `payment_id` char(10) CHARACTER SET utf8 NOT NULL,
  `payment_name` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `payment_desc` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`payment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_payment_method`
--

LOCK TABLES `tb_payment_method` WRITE;
/*!40000 ALTER TABLE `tb_payment_method` DISABLE KEYS */;
INSERT INTO `tb_payment_method` VALUES ('01','Trực tiếp','thanh toan truc tiep'),('02','Card','Card');
/*!40000 ALTER TABLE `tb_payment_method` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_product`
--

DROP TABLE IF EXISTS `tb_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_product` (
  `product_index` int(11) DEFAULT NULL,
  `product_id` varchar(20) CHARACTER SET utf8 NOT NULL,
  `product_name` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `product_type_id` char(10) CHARACTER SET utf8 DEFAULT NULL,
  `product_image` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `product_des` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `product_price` double DEFAULT NULL,
  `product_provider_id` char(10) CHARACTER SET utf8 DEFAULT NULL,
  `product_input_date` datetime DEFAULT NULL,
  `quantity` int(11) DEFAULT '0',
  `more_information` varchar(225) CHARACTER SET latin1 DEFAULT NULL,
  `guide` text CHARACTER SET latin1,
  `desc_short` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `isvisible` bit(1) DEFAULT NULL,
  `orderproduct` int(11) DEFAULT '0',
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_product`
--

LOCK TABLES `tb_product` WRITE;
/*!40000 ALTER TABLE `tb_product` DISABLE KEYS */;
INSERT INTO `tb_product` VALUES (1,'1','Đèn sạc LED','01','dpin1.jpg','MÃ´ taÌ‰ saÌ‰n',200000,'1','0000-00-00 00:00:00',100,'<p>aa</p>\n','<p>Huong dan su dung</p>\n','temporary','\0',12),(10,'10','Bao  da điện thoại','02','dthoai1.jpg','Mô tả sản phẩm',300000,'1','0000-00-00 00:00:00',97,'','bbbbbbbbbbbbbbbbbbbbbbbbb','','\0',102),(11,'11','Bao  da điện thoại','02','dthoai2.jpg','a',700000,'1','0000-00-00 00:00:00',98,'','','','\0',0),(12,'12','Đèn năng lượng','01','dthoai3.jpg','a',900000,'1','0000-00-00 00:00:00',91,'','','','\0',0),(NULL,'12312132123','123','01','IMG_4198.jpg','123',123,'1','2015-07-23 00:00:00',123,'',NULL,'temporary','\0',0),(NULL,'12312312312312','123','01','Chrysanthemum.jpg','123123',132,'1','2015-07-22 00:00:00',123,'<p>123</p>\n',NULL,'temporary','\0',0),(13,'13','Giày LED','02','giay.jpg','a',700000,'1','0000-00-00 00:00:00',99,'','','','\0',0),(14,'14','Đèn LED hoa sen','02','hoa1.jpg','a',900000,'1','0000-00-00 00:00:00',100,'','','','\0',0),(15,'15','Đèn LED hoa sen','02','hoa2.jpg','a',300000,'1','0000-00-00 00:00:00',100,'','','','\0',0),(16,'16','Máy bay điều khiển','01','maybay1.jpg','',400000,'1','0000-00-00 00:00:00',100,'','','','\0',0),(17,'17','Máy bay điều khiển','02','maybay2.jpg','a',5000000,'1','0000-00-00 00:00:00',100,'','','','\0',0),(18,'18','Máy bay điều khiển','01','maybay3.jpg','',500000,'1','0000-00-00 00:00:00',100,'','','','\0',0),(19,'19','Cáp USB','02','usb.jpg','',400000,'1','0000-00-00 00:00:00',100,'','','','\0',100),(2,'2','Đèn sạc LED','01','dpin2.jpg','www',300000,'1','0000-00-00 00:00:00',100,'','','temporary','\0',100),(20,'20','Đèn dự phòng','02','bongden.jpg','',200000,'1','0000-00-00 00:00:00',100,'','','','\0',0),(3,'3','Đèn sạc LED','01','dpin3.jpg','www',500000,'1','0000-00-00 00:00:00',100,'','','','\0',0),(4,'4','Đèn câu cá LED','02','dpin4.jpg','',600000,'1','0000-00-00 00:00:00',100,'','','','\0',0),(5,'5','Định vị GPS','02','dongho1.jpg','www',200000,'1','0000-00-00 00:00:00',100,'','','','\0',0),(6,'6','Dây đeo Bluetooth 123','01','dongho2.jpg','',300000,'1','0000-00-00 00:00:00',100,'','','','\0',0),(7,'7','Dây đeo Bluetooth','01','Koala.jpg','www',300000,'1','0000-00-00 00:00:00',100,'<p>123123</p>\n','<p>123</p>\n','temporary','\0',0),(8,'8','Đồng hồ thông minh','01','dongho4.jpg','www',600000,'1','0000-00-00 00:00:00',100,'','','','\0',0),(9,'9','Dây đeo Bluetooth','02','dongho5.jpg','',500000,'1','0000-00-00 00:00:00',100,'','','','\0',0),(NULL,'daudua','Coconut oil for cook','02','Untitled-9.jpg','',24,'1','2015-08-17 00:00:00',12,'',NULL,'temporary','',103),(NULL,'daudua2','Coconut oil 50ml','02','Untitled-10.jpg','',24,'1','2015-08-17 00:00:00',15,'',NULL,'temporary','',107),(NULL,'daudua3','Coconut oil for message','02','Untitled-12.jpg','',47,'1','2015-08-17 00:00:00',25,'',NULL,'temporary','',109),(NULL,'den1','Coconut light','01','','',69,'1','2015-08-17 00:00:00',9,'','','temporary','\0',113),(NULL,'dia','Coconut disk','01','Untitled-2.jpg','',31,'1','2015-08-17 00:00:00',12,'',NULL,'temporary','',111),(NULL,'dia2','Coconut disk','01','Untitled-3.jpg','',31,'1','2015-08-17 00:00:00',12,'<p>aaaaaaaaaaaaaaaa</p>\n','<p>aaaaaaaaaaaaaaa</p>\n','temporary','',112),(NULL,'gel','Coconut oil 100ml','02','Untitled-8.jpg','',52,'1','2015-08-17 00:00:00',15,'',NULL,'temporary','',106),(NULL,'matna','Coconut mask','03','Untitled-7.jpg','',51,'1','2015-08-17 00:00:00',12,'',NULL,'temporary','',105),(NULL,'spdua1','Coconut bowl','01','PMT_6785.jpg','',11,'1','2015-08-17 00:00:00',25,'',NULL,'temporary','',110),(NULL,'xaphong','Coconut soap','04','Untitled-6.jpg','',13,'1','2015-08-17 00:00:00',12,'',NULL,'temporary','',104),(NULL,'xaphong2','Coconut soap','04','Untitled-11.jpg','',13,'1','2015-08-17 00:00:00',15,'',NULL,'temporary','',108);
/*!40000 ALTER TABLE `tb_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_product_sub`
--

DROP TABLE IF EXISTS `tb_product_sub`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_product_sub` (
  `product_index` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` varchar(50) COLLATE ucs2_unicode_ci DEFAULT NULL,
  `product_image` varchar(255) COLLATE ucs2_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`product_index`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=ucs2 COLLATE=ucs2_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_product_sub`
--

LOCK TABLES `tb_product_sub` WRITE;
/*!40000 ALTER TABLE `tb_product_sub` DISABLE KEYS */;
INSERT INTO `tb_product_sub` VALUES (1,'1','Jellyfish.jpg'),(2,'null','Desert.jpg'),(3,'null','Penguins.jpg'),(4,'null','Penguins.jpg'),(5,'null','Penguins.jpg'),(6,'null','Penguins.jpg'),(7,'1','Tulips.jpg'),(8,'den2','Penguins.jpg'),(9,'den1','Penguins.jpg');
/*!40000 ALTER TABLE `tb_product_sub` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_product_type`
--

DROP TABLE IF EXISTS `tb_product_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_product_type` (
  `product_type_id` char(10) CHARACTER SET utf8 NOT NULL,
  `product_type_name` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`product_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_product_type`
--

LOCK TABLES `tb_product_type` WRITE;
/*!40000 ALTER TABLE `tb_product_type` DISABLE KEYS */;
INSERT INTO `tb_product_type` VALUES ('01','Coconut Wood'),('02','Coconut oil'),('03','Coconut Mask'),('04','Coconut Soap');
/*!40000 ALTER TABLE `tb_product_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_provider`
--

DROP TABLE IF EXISTS `tb_provider`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_provider` (
  `provider_id` char(10) CHARACTER SET utf8 NOT NULL,
  `provider_name` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`provider_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_provider`
--

LOCK TABLES `tb_provider` WRITE;
/*!40000 ALTER TABLE `tb_provider` DISABLE KEYS */;
INSERT INTO `tb_provider` VALUES ('1','Hong Kong Company'),('2','China Company'),('3','Taiwan Company');
/*!40000 ALTER TABLE `tb_provider` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_rating`
--

DROP TABLE IF EXISTS `tb_rating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_rating` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Product_ID` varchar(45) DEFAULT NULL,
  `Star` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_rating`
--

LOCK TABLES `tb_rating` WRITE;
/*!40000 ALTER TABLE `tb_rating` DISABLE KEYS */;
INSERT INTO `tb_rating` VALUES (8,'1',4),(9,'1',4),(10,'11',4),(11,'17',4),(12,'10',5),(13,'1',3),(14,'12',0),(15,'10',4),(16,'den1',4),(17,'dia2',4),(18,'dia',4);
/*!40000 ALTER TABLE `tb_rating` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_role`
--

DROP TABLE IF EXISTS `tb_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_role` (
  `role_id` char(10) CHARACTER SET utf8 NOT NULL,
  `role_name` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `role_desc` varchar(100) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_role`
--

LOCK TABLES `tb_role` WRITE;
/*!40000 ALTER TABLE `tb_role` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_useradmin`
--

DROP TABLE IF EXISTS `tb_useradmin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_useradmin` (
  `Username` varchar(20) NOT NULL,
  `Password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_useradmin`
--

LOCK TABLES `tb_useradmin` WRITE;
/*!40000 ALTER TABLE `tb_useradmin` DISABLE KEYS */;
INSERT INTO `tb_useradmin` VALUES ('u1','123');
/*!40000 ALTER TABLE `tb_useradmin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'vivmalldb'
--

--
-- Dumping routines for database 'vivmalldb'
--
/*!50003 DROP FUNCTION IF EXISTS `getobj` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`vinhsang`@`%` FUNCTION `getobj`(id varchar(2)) RETURNS char(10) CHARSET latin1
BEGIN
 declare leng int;
    declare incr int;
    declare n int;
    declare obj char(10);
    select length,increase into leng,incr
    from tb_allcode
    where ID=id;
    set incr = incr+1;
    set n = leng - length(cast(ltrim(rtrim(incr)) as char));
    set obj = concat(id,repeat('0',n),incr);
    update tb_allcode
    set increase = incr
    where ID = id;
RETURN obj;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_order` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`vinhsang`@`%` PROCEDURE `get_order`(in fromdate varchar(10) charset utf8,    in todate varchar(10) charset utf8,    in order_status varchar(10) charset utf8)
BEGIN
	select tb1.order_id,tb4.fullname,tb4.address,tb4.address_delivery,tb4.phone,
		tb2.payment_name payment_name,
		tb3.delivery_method_name delivery_name,
        tb1.order_date,
        (
			case tb1.order_status
				when '0' then 'New'
                when '1' then 'Processing'
				when '-1' then 'Cancel'
                else
					 'finish'
            end
        )order_status,
        (
			case tb1.invoice
            when '0' then 'Không'
            else
				'Có'
			end
        )invoice
	from tb_order  tb1, tb_payment_method tb2,tb_delivery_method tb3,tb_member tb4
	where  tb1.email = tb4.email
	and tb1.delivery_method_id = tb3.delivery_method_id
	and tb1.payment_method_id = tb2.payment_id
    order by tb1.order_date desc;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_order_by_id` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`vinhsang`@`%` PROCEDURE `get_order_by_id`(in orderid varchar(10) charset utf8)
BEGIN
	select tb1.order_id,tb4.fullname,tb4.address,tb4.address_delivery,tb4.phone,
		tb2.payment_name payment_name,
		tb3.delivery_method_name delivery_name,
        tb1.order_date,
        (
			case tb1.order_status
				when '0' then 'New'
                when '1' then 'Processing'
                when '-1' then 'Cancel'
                else
					 'finish'
            end
        )order_status,
        (
			case tb1.invoice
            when '0' then 'Không'
            else
				'Có'
			end
        )invoice
	from tb_order  tb1, tb_payment_method tb2,tb_delivery_method tb3,tb_member tb4
	where  tb1.email = tb4.email
	and tb1.delivery_method_id = tb3.delivery_method_id
	and tb1.payment_method_id = tb2.payment_id
    and tb1.order_id = orderid
    order by tb1.order_date desc;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_get_provider` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`vinhsang`@`%` PROCEDURE `sp_get_provider`()
BEGIN
	select provider_id,provider_name
	from tb_provider;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_insert_product` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`vinhsang`@`%` PROCEDURE `sp_insert_product`(in p_type varchar(2),in productid VARCHAR(20),in productname VARCHAR(50),in producttypeid VARCHAR(10),in productimage VARCHAR(100),in productdes VARCHAR(100),in productprice float,in productproviderid CHAR(10),in quantity int,in moreinformation VARCHAR(255),in p_guide text,in desshort VARCHAR(255))
BEGIN
	if not exists(select * from tb_product where product_id = productid)
    then
		insert into tb_product(product_id,product_name,product_type_id,
		product_image,product_des, product_price, product_provider_id,
		product_input_date,quantity,more_information,guide,desc_short)

		values(productid,productname,producttypeid,productimage,productdes,
		productprice,productproviderid,CURDATE(),quantity,moreinformation,guide,desshort);
     else
		if isnull(productimage)
        then
			update tb_product
			set product_name = productname,
				product_type_id = producttypeid,
				
				product_des = productdes,
				quantity = quantity,
				product_price = productprice,
				more_information=moreinformation,
				guide = p_guide,
				desc_short=desshort
			where product_id = productid;
		else
			update tb_product
			set product_name = productname,
				product_type_id = producttypeid,
				product_des = productdes,
                product_image = productimage,
				quantity = quantity,
				product_price = productprice,
				more_information=moreinformation,
				guide = p_guide,
				desc_short=desshort
			where product_id = productid;
        end if;

     end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_insert_product1` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_insert_product1`(in p_type varchar(2),in productid VARCHAR(20),in productname VARCHAR(50),in producttypeid VARCHAR(10),in productimage VARCHAR(100),in productdes VARCHAR(100),in productprice float,in productproviderid CHAR(10),in quantity int,in moreinformation VARCHAR(255),in p_guide text,in desshort VARCHAR(255))
BEGIN

	if not exists(select * from tb_product where product_id = productid)

    then

		insert into tb_product(product_id,product_name,product_type_id,

		product_image,product_des, product_price, product_provider_id,

		product_input_date,quantity,more_information,guide,desc_short)



		values(productid,productname,producttypeid,productimage,productdes,

		productprice,productproviderid,CURDATE(),quantity,moreinformation,guide,desshort);

     else

		if isnull(productimage)

        then

			update tb_product

			set product_name = productname,

				product_type_id = producttypeid,

				product_image = productimage,

				product_des = productdes,

				quantity = quantity,

				product_price = productprice,

				more_information=moreinformation,

				guide = p_guide,

				desc_short=desshort

			where product_id = productid;

		else

			update tb_product

			set product_name = productname,

				product_type_id = producttypeid,

				product_des = productdes,

				quantity = quantity,

				product_price = productprice,

				more_information=moreinformation,

				guide = p_guide,

				desc_short=desshort

			where product_id = productid;

        end if;



     end if;



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_tbproduct_visisble` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`vinhsang`@`%` PROCEDURE `sp_tbproduct_visisble`(
	out f int,
    in p_productid varchar(50)
)
L_return:
BEGIN
	declare _rollback bool default 0;

	declare continue handler  for sqlexception set _rollback  = 1;
    start transaction;
	if  exists(select * from tb_product where product_id = p_productid and isvisible=true)
    then
		update tb_product
        set isvisible = false
        where product_id = p_productid;
        if (_rollback)
		then
			rollback ;
			set f = -1;
		else
			commit;
			set f = 0;
		end if;
    else
		update tb_product
        set isvisible = true
        where product_id = p_productid;
        if (_rollback)
		then
			rollback ;
			set f = -1;
		else
			commit;
			set f = 0;
		end if;
    end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tb_contact_insert` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`vinhsang`@`%` PROCEDURE `tb_contact_insert`(in fullname varchar(100),    in email varchar(100),    in phone varchar(100),    in content varchar(500))
BEGIN

	insert into tb_contact(fullname,email,phone,content,contact_date)

    values(fullname,email,phone,content,CURDATE());

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tb_introduction_get` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`vinhsang`@`localhost` PROCEDURE `tb_introduction_get`()
BEGIN
	select info_intro 
    from tb_introduction limit 1;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tb_introduction_insert_info_intro` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`vinhsang`@`localhost` PROCEDURE `tb_introduction_insert_info_intro`(
in infointro text charset utf8
)
begin
if not exists(select info_intro from tb_introduction limit 1)
    then
    insert into tb_introduction(info_intro)
    values(infointro);
    else
    SET SQL_SAFE_UPDATES = 0;
    update tb_introduction
    set info_intro=infointro;
    end if;

end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tb_mailsending_insert` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`vinhsang`@`localhost` PROCEDURE `tb_mailsending_insert`(

	in Email varchar(100),

    in Email_to varchar(100),

    in Title text,

    in Content text

)
BEGIN

	insert into tb_mailsending(email,email_to,title,content,senddate)

    values(Email,Email_to,Title,Content,CURDATE());

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tb_member_insert` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`vinhsang`@`%` PROCEDURE `tb_member_insert`(in email VARCHAR(100),    in pass VARCHAR(100),	in fullname varchar(100),    in birthday VARCHAR(100),    in phone VARCHAR(100),    in registerdate varchar(20))
BEGIN

	insert into tb_member(email,pass,fullname,birthday,phone,register_date,confirm)

    values(email,pass,fullname,birthday,phone,registerdate,0);

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tb_order_detail_insert` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`vinhsang`@`%` PROCEDURE `tb_order_detail_insert`(in pro_id varchar(20)charset utf8,    in quan int,    in price float,    in amount float,    in order_id varchar(10) ,    out f int)
BEGIN

	declare _rollback bool default 0;

	declare continue handler  for sqlexception set _rollback  = 1;

    start transaction;

		insert into tb_order_detail(product_id,quantity,price,amount,order_id)

		values(pro_id,quan,price,amount,order_id);



        update tb_product

        set quantity = quantity - quan

        where product_id=pro_id;

	if (_rollback)

    then

		set f = -1;

		rollback ;

	else

		set f = 0;

		commit;

    end if;



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tb_order_get` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`vinhsang`@`%` PROCEDURE `tb_order_get`(in orderid char(10) charset utf8)
BEGIN


    select tb2.fullname,tb2.phone,tb2.address_delivery,tb3.delivery_method_name delivery_name,

    tb4.payment_name payment_name

    from tb_order tb1,tb_member tb2,tb_delivery_method tb3,tb_payment_method tb4

    where tb1.order_id = orderid

    and  tb1.email = tb2.email

    and  tb1.delivery_method_id = tb3.delivery_method_id

    and tb1.payment_method_id = tb4.payment_id;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tb_order_insert` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`vinhsang`@`%` PROCEDURE `tb_order_insert`(in fullname varchar(200),    in email varchar(100) charset utf8,    in phone varchar(100),    in address varchar(200),    in address2 varchar(200),    in delivery char(10),    in payment char(10),    in invoice int,    in notes varchar(255),    out orderid char(10),        out f int)
BEGIN

	declare _rollback bool default 0;

	declare continue handler  for sqlexception set _rollback  = 1;

    start transaction;

		set orderid =  getobj('OD');

		if(ISNULL(email) or email = '' or email is null )

		then

			insert into tb_member(email,pass,fullname,birthday,phone,register_date,confirm,address_delivery)

			values(orderid,'',fullname,'',phone,now(),1,address2);

            set email = orderid;

		elseif not exists (select tb1.email from tb_member tb1 where tb1.email=email)

        then

			insert into tb_member(email,pass,fullname,birthday,phone,register_date,confirm,address_delivery)

			values(email,'',fullname,'',phone,now(),1,address2);

		else

			update tb_member

            set address_delivery = address2

            where email = email;

		end if;

        insert into tb_order(order_id,email,payment_method_id,delivery_method_id,order_date,order_status,invoice,note)

        values(orderid,email,payment,delivery,now(),'0',invoice,notes);



	if (_rollback)

    then

		rollback ;

        set f = -1;

	else

		commit;

        set f = 0;

    end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tb_order_processing` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`vinhsang`@`%` PROCEDURE `tb_order_processing`(in orderid varchar(50) charset utf8,    in p_type varchar(1) charset utf8,    out f varchar(1))
BEGIN
	declare p_status varchar(2);
    declare p_status2 varchar(2);
	if p_type = '1'
    then
			if not exists (select * from tb_order where order_id=orderid)
            then
				set f = '2';
			elseif exists (select * from tb_order where order_id=orderid and order_status='2')
            then
				set f = '1';
			else
                select order_status into p_status
                from tb_order
                where order_id=orderid;

                if p_status = '0'
                then
					set p_status2 = '1';
				else
					set p_status2 = '2';
				end if;

                update tb_order
                set order_status = p_status2
                where order_id= orderid;



                set f = '0';
            end if;
    end if;

    if p_type = '2'
    then
			if not exists (select * from tb_order where order_id=orderid)
            then
				set f = '2';
			elseif exists (select * from tb_order where order_id=orderid and order_status='2')
            then
				set f = '1';
			elseif exists (select * from tb_order where order_id=orderid and order_status='-1')
            then
				set f = '3';
			else

                update tb_order
                set order_status = '-1'
                where order_id= orderid;
                set f = '0';
            end if;
    end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tb_product_manager` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`vinhsang`@`%` PROCEDURE `tb_product_manager`(in p_name varchar(255) charset utf8,in p_type varchar(255) charset utf8,in p_fromprice char(255) charset utf8,in p_toprice  char(255) charset utf8)
BEGIN
	declare v_name varchar(255) charset utf8;
    declare v_type varchar(255) charset utf8;
    if p_name is null or p_name='' or isnull(p_name)
    then
		set v_name = '%';
    else
		set v_name = concat('%',trim(rtrim(p_name)),'%');

    end if;

    if p_type is null or p_type ='' or isnull(p_type) or LENGTH(p_type)=0 or p_type = '00'
    then
		set v_type='%%';
	else
		set v_type =p_type;
    end if;

	if p_fromprice = '' or p_fromprice = null
    then
		set p_fromprice ='0';
    end if;

    if p_toprice = '' or p_toprice = null
    then
		set p_toprice ='1000000000';
    end if;

    select tb1.product_id,tb1.product_name,tb1.product_image,tb1.product_price,tb1.product_type_id,tb1.quantity,tb1.isvisible,tb1.orderproduct
    from tb_product tb1,tb_product_type tb2
    where tb1.product_type_id = tb2.product_type_id
	and   tb1.product_name like v_name
    and tb2.product_type_id like v_type
    and tb1.product_price >=p_fromprice
    and tb1.product_price <=p_toprice
    order by tb1.orderproduct desc;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tb_product_seach` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`vinhsang`@`%` PROCEDURE `tb_product_seach`(in p_name varchar(255) charset utf8,    in p_type varchar(255) charset utf8,    in p_fromprice char(255) charset utf8,    in p_toprice  char(255) charset utf8,    in fromrow int,    in recordperpage int)
BEGIN

	declare v_name varchar(255) charset utf8;

    declare v_type varchar(255) charset utf8;

    if p_name is null or p_name='' or isnull(p_name)

    then

		set v_name = '%';

    else

		set v_name = concat('%',trim(rtrim(p_name)),'%');

    end if;



    if p_type is null or p_type ='' or isnull(p_type) or LENGTH(p_type)=0 or p_type = '00'

    then

		set v_type='%%';

	else

		set v_type =p_type;

    end if;



    select tb1.product_id,tb1.product_name,tb1.product_image,tb1.product_price,tb1.product_type_id

    from tb_product tb1,tb_product_type tb2

    where tb1.product_type_id = tb2.product_type_id

	and   tb1.product_name like v_name

    and tb2.product_type_id like v_type

    and tb1.product_price >=p_fromprice

    and tb1.product_price <=p_toprice

    limit fromrow,recordperpage;



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tb_product_seach_basic` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`vinhsang`@`%` PROCEDURE `tb_product_seach_basic`(
	in p_name varchar(255) charset utf8,
     in fromrow int,   
     in recordperpage int
)
BEGIN

	declare v_name varchar(255) charset utf8;
    if p_name is null or p_name='' or isnull(p_name)
    then
		set v_name = '%';
    else
		set v_name = concat('%',trim(rtrim(p_name)),'%');
    end if;

    select tb1.product_id,tb1.product_name,tb1.product_image,tb1.product_price,tb1.product_type_id,tb1.desc_short
    from tb_product tb1,tb_product_type tb2
    where tb1.product_type_id = tb2.product_type_id
	and   tb1.product_name like v_name    
	and isvisible=true 
    limit fromrow,recordperpage;



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tb_product_seach_cate` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`vinhsang`@`%` PROCEDURE `tb_product_seach_cate`(
	in p_cate varchar(255) charset utf8,
     in fromrow int,   
     in recordperpage int
)
BEGIN

	

    select tb1.product_id,tb1.product_name,tb1.product_image,tb1.product_price,tb1.product_type_id,tb1.desc_short
    from tb_product tb1,tb_product_type tb2
    where tb1.product_type_id = tb2.product_type_id
	and   tb1.product_type_id like p_cate    
	and isvisible=true 
    limit fromrow,recordperpage;


END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `tb_product_type_get` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`vinhsang`@`%` PROCEDURE `tb_product_type_get`()
BEGIN

	select '00' typeid ,N'Tất cả' typename

	union all

	select product_type_id typeid,product_type_name typename

	from tb_product_type;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-07-10 16:24:40
