-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: megacoffee
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


--
-- Table structure for table `manager`
--

DROP TABLE IF EXISTS `manager`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `manager` (
  `PW` varchar(10) NOT NULL DEFAULT '000000',
  PRIMARY KEY (`PW`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manager`
--

LOCK TABLES `manager` WRITE;
/*!40000 ALTER TABLE `manager` DISABLE KEYS */;
INSERT INTO `manager` VALUES ('000000');
/*!40000 ALTER TABLE `manager` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu`
--

DROP TABLE IF EXISTS `menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menu` (
  `Cat` varchar(45) NOT NULL,
  `Name` varchar(45) NOT NULL,
  `Price` int NOT NULL,
  `Ice` int DEFAULT NULL,
  `S` int DEFAULT NULL,
  `W` int DEFAULT NULL,
  `SW` int DEFAULT NULL,
  `SS` int DEFAULT NULL,
  `Image` varchar(100) DEFAULT NULL,
  `Soldout` int DEFAULT NULL,
  PRIMARY KEY (`Name`),
  UNIQUE KEY `Name_UNIQUE` (`Name`) /*!80000 INVISIBLE */
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu`
--

LOCK TABLES `menu` WRITE;
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` VALUES ('BEVERAGE','h 고구마라떼',3500,NULL,NULL,NULL,NULL,NULL,'이미지/BEVERAGE/고구마라떼.png',NULL),('BEVERAGE','h 곡물라떼',3000,NULL,NULL,NULL,NULL,NULL,'이미지/BEVERAGE/곡물라떼.png',NULL),('COFFEE(HOT)','h 꿀아메리카노',2500,NULL,1,NULL,NULL,NULL,'이미지/커피HOT/꿀아메리카노.png',NULL),('TEA','h 녹차',2500,NULL,NULL,NULL,NULL,NULL,'이미지/TEA/녹차(HOT).png',NULL),('BEVERAGE','h 녹차라떼',3200,NULL,NULL,NULL,NULL,NULL,'이미지/BEVERAGE/녹차라떼.png',NULL),('TEA','h 레몬티',3000,NULL,NULL,NULL,NULL,NULL,'이미지/TEA/레몬티(HOT).png',NULL),('BEVERAGE','h 로얄밀크티',3500,NULL,NULL,NULL,NULL,NULL,'이미지/BEVERAGE/로얄밀크티.png',NULL),('BEVERAGE','h 메가초코',3800,NULL,NULL,1,NULL,NULL,'이미지/BEVERAGE/메가초코.png',NULL),('COFFEE(HOT)','h 민트카페모카',4500,NULL,NULL,NULL,1,NULL,'이미지/커피HOT/민트카페모카.png',NULL),('BEVERAGE','h 민트크림초코',3500,NULL,NULL,1,NULL,NULL,'이미지/BEVERAGE/민트크림초코.png',NULL),('COFFEE(HOT)','h 바닐라라떼',3200,NULL,NULL,NULL,1,NULL,'이미지/커피HOT/바닐라라떼.png',NULL),('COFFEE(HOT)','h 바닐라아메리카노',2500,NULL,1,NULL,NULL,NULL,'이미지/커피HOT/바닐라아메리카노.png',NULL),('TEA','h 사과유자차',3500,NULL,NULL,NULL,NULL,NULL,'이미지/TEA/사과유자차(HOT).png',NULL),('COFFEE(HOT)','h 아메리카노',1500,NULL,1,NULL,NULL,NULL,'이미지/커피HOT/아메리카노.png',NULL),('TEA','h 얼그레이',2500,NULL,NULL,NULL,NULL,NULL,'이미지/TEA/얼그레이(HOT).png',NULL),('COFFEE(HOT)','h 연유라떼',3700,NULL,1,NULL,NULL,NULL,'이미지/커피HOT/연유라떼.png',NULL),('TEA','h 유자차',3000,NULL,NULL,NULL,NULL,NULL,'이미지/TEA/유자차(HOT).png',NULL),('TEA','h 자몽티',3000,NULL,NULL,NULL,NULL,NULL,'이미지/TEA/자몽티(HOT).png',NULL),('COFFEE(HOT)','h 카라멜마끼아또',3500,NULL,1,NULL,NULL,NULL,'이미지/커피HOT/카라멜마끼아또.png',NULL),('COFFEE(HOT)','h 카페라떼',2700,NULL,1,NULL,NULL,NULL,'이미지/커피HOT/카페라떼.png',NULL),('COFFEE(HOT)','h 카페모카',3700,NULL,NULL,NULL,1,NULL,'이미지/커피HOT/카페모카.png',NULL),('COFFEE(HOT)','h 카푸치노',2700,NULL,NULL,NULL,NULL,1,'이미지/커피HOT/카푸치노.png',NULL),('TEA','h 캐모마일',2500,NULL,NULL,NULL,NULL,NULL,'이미지/TEA/캐모마일(HOT).png',NULL),('COFFEE(HOT)','h 콜드브루 라떼',3800,NULL,NULL,NULL,NULL,NULL,'이미지/콜드브루/콜드브루 라떼 HOT.png',NULL),('COFFEE(HOT)','h 콜드브루 쇼콜라 아인슈페너',3500,NULL,NULL,NULL,NULL,NULL,'이미지/콜드브루/콜드브루 쇼콜라 아인슈페너(HOT).jpg',NULL),('COFFEE(HOT)','h 콜드브루 아인슈페너',3500,NULL,NULL,NULL,NULL,NULL,'이미지/콜드브루/콜드브루 아인슈페너(HOT).png',NULL),('COFFEE(HOT)','h 콜드브루 커피',3300,NULL,NULL,NULL,NULL,NULL,'이미지/콜드브루/콜드브루 커피 HOT.png',NULL),('COFFEE(HOT)','h 콜드브루 헤이즐넛 아인슈페너',3500,NULL,NULL,NULL,NULL,NULL,'이미지/콜드브루/콜드브루 헤이즐넛 아인슈페너(HOT).jpg',NULL),('BEVERAGE','h 토피넛라떼',3800,NULL,NULL,NULL,NULL,NULL,'이미지/BEVERAGE/토피넛라떼.png',NULL),('COFFEE(HOT)','h 티라미수라떼',3900,NULL,1,NULL,NULL,NULL,'이미지/커피HOT/티라미수라떼.png',NULL),('TEA','h 페퍼민트',2500,NULL,NULL,NULL,NULL,NULL,'이미지/TEA/페퍼민트(HOT).png',NULL),('TEA','h 허니자몽블랙티',3500,NULL,NULL,NULL,NULL,NULL,'이미지/TEA/허니자몽블랙티(HOT).png',NULL),('COFFEE(HOT)','h 헤이즐넛아메리카노',2500,NULL,1,NULL,NULL,NULL,'이미지/커피HOT/헤이즐넛아메리카노.png',NULL),('DESSERT','갈릭바게트볼',4500,NULL,NULL,NULL,NULL,NULL,'이미지/DESSERT/갈릭바게트볼.jpg',NULL),('BEVERAGE','고구마라떼(ICE)',3500,1,NULL,NULL,NULL,NULL,'이미지/BEVERAGE/고구마라떼.jpg',NULL),('SMOOTHIE&FRAFFE','골드망고 스무디',3900,1,NULL,NULL,NULL,NULL,'이미지/SMOOTHIE & FRAPPE/골드망고 스무디.jpg',NULL),('COFFEE(ICE)','꿀아메리카노(ICE)',2500,1,1,NULL,NULL,NULL,'이미지/커피ICE/꿀아메리카노.jpg',NULL),('BEVERAGE','녹차라떼(ICE)',3200,1,NULL,NULL,NULL,NULL,'이미지/BEVERAGE/녹차라떼.jpg',NULL),('SMOOTHIE&FRAFFE','녹차프라페',3900,1,NULL,1,NULL,NULL,'이미지/SMOOTHIE & FRAPPE/녹차프라페.jpg',NULL),('BEVERAGE','다회용컵(BEVERAGE)',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('COFFEE(HOT)','다회용컵(HOT)',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('COFFEE(ICE)','다회용컵(ICE)',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('JUICE','딸기',3800,1,NULL,NULL,NULL,NULL,'이미지/JUICE/딸기.jpg',NULL),('SMOOTHIE&FRAFFE','딸기 퐁크러쉬',3900,1,NULL,NULL,NULL,NULL,'이미지/SMOOTHIE & FRAPPE/딸기 퐁크러쉬.jpg',NULL),('BEVERAGE','딸기라떼(ICE)',3500,1,NULL,NULL,NULL,NULL,'이미지/BEVERAGE/딸기라떼.jpg',NULL),('JUICE','딸기바나나',3800,1,NULL,NULL,NULL,NULL,'이미지/JUICE/딸기바나나.jpg',NULL),('DESSERT','딸기생크림와플',2500,NULL,NULL,NULL,NULL,NULL,'이미지/DESSERT/딸기생크림와플.jpg',NULL),('SMOOTHIE&FRAFFE','딸기요거트스무디',3900,1,NULL,NULL,NULL,NULL,'이미지/SMOOTHIE & FRAPPE/딸기요거트스무디.jpg',NULL),('SMOOTHIE&FRAFFE','딸기쿠키프라페',3900,1,NULL,1,NULL,NULL,'이미지/SMOOTHIE & FRAPPE/딸기쿠키프라페.jpg',NULL),('ADE','라임모히또(무알콜)',3800,1,NULL,NULL,NULL,NULL,'이미지/ADE/라임모히또(무알콜).jpg',NULL),('ADE','레몬에이드',3500,1,NULL,NULL,NULL,NULL,'이미지/ADE/레몬에이드.jpg',NULL),('SMOOTHIE&FRAFFE','리얼초코프라페',3900,1,NULL,1,NULL,NULL,'이미지/SMOOTHIE & FRAPPE/리얼초코프라페.jpg',NULL),('DESSERT','마카다미아 쿠키',1800,NULL,NULL,NULL,NULL,NULL,'이미지/DESSERT/마카다미아 쿠키.jpg',NULL),('SMOOTHIE&FRAFFE','망고요거트스무디',3900,1,NULL,NULL,NULL,NULL,'이미지/SMOOTHIE & FRAPPE/망고요거트스무디.jpg',NULL),('ADE','메가에이드',3900,1,NULL,NULL,NULL,NULL,'이미지/ADE/메가에이드.jpg',NULL),('BEVERAGE','메가초코(ICE)',3800,1,NULL,1,NULL,NULL,'이미지/BEVERAGE/메가초코.jpg',NULL),('COFFEE(ICE)','민트카페모카(ICE)',4500,1,NULL,NULL,1,NULL,'이미지/커피ICE/민트카페모카.jpg',NULL),('BEVERAGE','민트크림초코(ICE)',3500,1,NULL,1,NULL,NULL,'이미지/BEVERAGE/민트크림초코.jpg',NULL),('SMOOTHIE&FRAFFE','민트프라페',3900,1,NULL,1,NULL,NULL,'이미지/SMOOTHIE & FRAPPE/민트프라페.jpg',NULL),('SMOOTHIE&FRAFFE','바나나 퐁크러쉬',3900,1,NULL,NULL,NULL,NULL,'이미지/SMOOTHIE & FRAPPE/바나나 퐁크러쉬.jpg',NULL),('COFFEE(ICE)','바닐라라떼(ICE)',3200,1,1,NULL,NULL,NULL,'이미지/커피ICE/바닐라라떼.jpg',NULL),('COFFEE(ICE)','바닐라아메리카노(ICE)',2500,1,1,NULL,NULL,NULL,'이미지/커피ICE/바닐라아메리카노.jpg',NULL),('SMOOTHIE&FRAFFE','복숭아스무디',3900,1,NULL,NULL,NULL,NULL,'이미지/SMOOTHIE & FRAPPE/복숭아스무디.jpg',NULL),('ADE','블루레몬에이드',3500,1,NULL,NULL,NULL,NULL,'이미지/ADE/블루레몬에이드.jpg',NULL),('DESSERT','블루베리베이글',2000,NULL,NULL,NULL,NULL,NULL,'이미지/DESSERT/블루베리베이글.jpg',NULL),('DESSERT','사과생크림와플',2500,NULL,NULL,NULL,NULL,NULL,'이미지/DESSERT/사과생크림와플.jpg',NULL),('TEA','사과유자티(ICE)',3500,1,NULL,NULL,NULL,NULL,'이미지/TEA/사과유자티(ICE).jpg',NULL),('COFFEE(HOT)','샷추가(HOT)',500,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('COFFEE(ICE)','샷추가(ICE)',500,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('JUICE','수박주스',3800,1,NULL,NULL,NULL,NULL,'이미지/JUICE/수박주스.jpg',NULL),('SMOOTHIE&FRAFFE','스트로베리치즈홀릭',4500,1,NULL,NULL,NULL,NULL,'이미지/SMOOTHIE & FRAPPE/스트로베리치즈홀릭.png',NULL),('BEVERAGE','스트로베리큐브라떼(ICE)',4000,1,NULL,NULL,NULL,NULL,'이미지/BEVERAGE/스트로베리큐브라떼.jpg',NULL),('COFFEE(ICE)','아메리카노(ICE)',2000,1,1,NULL,NULL,NULL,'이미지/커피ICE/아메리카노.jpg',NULL),('BEVERAGE','아이스 초코',3200,1,NULL,NULL,NULL,NULL,'이미지/BEVERAGE/아이스 초코.jpg',NULL),('BEVERAGE','아이스 토피넛라떼',3800,1,NULL,NULL,NULL,NULL,'이미지/BEVERAGE/아이스 토피넛라떼.jpg',NULL),('BEVERAGE','아이스밀크티(ICE)',3500,1,NULL,NULL,NULL,NULL,'이미지/BEVERAGE/아이스밀크티.jpg',NULL),('TEA','아이스티',3000,1,NULL,NULL,NULL,NULL,'이미지/TEA/아이스티(ICE).jpg',NULL),('JUICE','오곡바나나',3800,1,NULL,NULL,NULL,NULL,'이미지/JUICE/오곡바나나.jpg',NULL),('DESSERT','오레오생크림와플',3000,NULL,NULL,NULL,NULL,NULL,'이미지/DESSERT/오레오생크림와플.jpg',NULL),('BEVERAGE','오레오초코(ICE)',3900,1,NULL,1,NULL,NULL,'이미지/BEVERAGE/오레오초코.jpg',NULL),('DESSERT','오트밀레이즌 쿠키',1800,NULL,NULL,NULL,NULL,NULL,'이미지/DESSERT/오트밀레이즌 쿠키.jpg',NULL),('ADE','유니콘매직에이드(블루)',3500,1,NULL,NULL,NULL,NULL,'이미지/ADE/유니콘매직에이드(블루).jpg',NULL),('ADE','유니콘매직에이드(핑크)',3500,1,NULL,NULL,NULL,NULL,'이미지/ADE/유니콘매직에이드(핑크).jpg',NULL),('SMOOTHIE&FRAFFE','유니콘프라페',4800,1,NULL,1,NULL,NULL,'이미지/SMOOTHIE & FRAPPE/유니콘프라페.jpg',NULL),('DESSERT','유니콘프라페 마카롱',1800,NULL,NULL,NULL,NULL,NULL,'이미지/DESSERT/유니콘프라페 마카롱.jpg',NULL),('BEVERAGE','일회용컵(BEVERAGE)',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('COFFEE(HOT)','일회용컵(HOT)',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('COFFEE(ICE)','일회용컵(ICE)',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('DESSERT','잉글리시머핀',3500,NULL,NULL,NULL,NULL,NULL,'이미지/DESSERT/잉글리시머핀.jpg',NULL),('SMOOTHIE&FRAFFE','자두스무디',3900,1,NULL,NULL,NULL,NULL,'이미지/SMOOTHIE & FRAPPE/자두스무디.jpg',NULL),('ADE','자몽모히또',3800,1,NULL,NULL,NULL,NULL,'이미지/ADE/자몽모히또.jpg',NULL),('ADE','자몽에이드',3500,1,NULL,NULL,NULL,NULL,'이미지/ADE/자몽에이드.jpg',NULL),('ADE','청포도 에이드',3500,1,NULL,NULL,NULL,NULL,'이미지/ADE/청포도 에이드.jpg',NULL),('ADE','청포도모히또(무알콜)',3800,1,NULL,NULL,NULL,NULL,'이미지/ADE/청포도모히또(무알콜).jpg',NULL),('SMOOTHIE&FRAFFE','청포도스무디',3900,1,NULL,NULL,NULL,NULL,'이미지/SMOOTHIE & FRAPPE/청포도스무디.jpg',NULL),('ADE','체리콕',3000,1,NULL,NULL,NULL,NULL,'이미지/ADE/체리콕.jpg',NULL),('DESSERT','초코무스케익',3300,NULL,NULL,NULL,NULL,NULL,'이미지/DESSERT/초코무스케익.jpg',NULL),('JUICE','초코바나나',3800,1,NULL,NULL,NULL,NULL,'이미지/JUICE/초코바나나.jpg',NULL),('DESSERT','초콜릿칩 쿠키',1800,NULL,NULL,NULL,NULL,NULL,'이미지/DESSERT/초콜릿칩 쿠키.jpg',NULL),('DESSERT','치즈케익',3300,NULL,NULL,NULL,NULL,NULL,'이미지/DESSERT/치즈케익.jpg',NULL),('COFFEE(ICE)','카라멜마끼아또(ICE)',3500,1,1,NULL,NULL,NULL,'이미지/커피ICE/카라멜마끼아또.jpg',NULL),('DESSERT','카라멜크로넛',4000,NULL,NULL,NULL,NULL,NULL,'이미지/DESSERT/카라멜크로넛.jpg',NULL),('COFFEE(ICE)','카페라떼(ICE)',2700,1,1,NULL,NULL,NULL,'이미지/커피ICE/카페라떼.jpg',NULL),('COFFEE(ICE)','카페모카(ICE)',3700,1,NULL,NULL,1,NULL,'이미지/커피ICE/카페모카.jpg',NULL),('COFFEE(ICE)','카푸치노(ICE)',2700,1,NULL,NULL,NULL,1,'이미지/커피ICE/카푸치노.jpg',NULL),('SMOOTHIE&FRAFFE','커피프라페',3900,1,NULL,1,NULL,NULL,'이미지/SMOOTHIE & FRAPPE/커피프라페.jpg',NULL),('SMOOTHIE&FRAFFE','코코넛커피 스무디',4800,1,NULL,NULL,NULL,NULL,'이미지/SMOOTHIE & FRAPPE/코코넛커피 스무디.jpg',NULL),('COFFEE(ICE)','콜드브루 라떼(ICE)',3800,1,NULL,NULL,NULL,NULL,'이미지/콜드브루/콜드브루 라떼(ICE).jpg',NULL),('COFFEE(ICE)','콜드브루 쇼콜라 아인슈페너(ICE)',3500,1,NULL,NULL,NULL,NULL,'이미지/콜드브루/콜드브루 쇼콜라 아인슈페너(ICE).jpg',NULL),('COFFEE(ICE)','콜드브루 아인슈페너(ICE)',3500,1,NULL,NULL,NULL,NULL,'이미지/콜드브루/콜드브루 아인슈페너(ICE).jpg',NULL),('COFFEE(ICE)','콜드브루 커피(ICE)',3800,1,NULL,NULL,NULL,NULL,'이미지/콜드브루/콜드브루 커피(ICE).jpg',NULL),('COFFEE(ICE)','콜드브루 헤이즐넛 아인슈페너(ICE)',3500,1,NULL,NULL,NULL,NULL,'이미지/콜드브루/콜드브루 헤이즐넛 아인슈페너(ICE).jpg',NULL),('DESSERT','쿠키크로넛',4000,NULL,NULL,NULL,NULL,NULL,'이미지/DESSERT/쿠키크로넛.jpg',NULL),('SMOOTHIE&FRAFFE','쿠키프라페',3900,1,NULL,1,NULL,NULL,'이미지/SMOOTHIE & FRAPPE/쿠키프라페.jpg',NULL),('DESSERT','쿠키프라페 마카롱',1800,NULL,NULL,NULL,NULL,NULL,'이미지/DESSERT/쿠키프라페 마카롱.jpg',NULL),('COFFEE(ICE)','큐브라떼(ICE)',3900,1,1,NULL,NULL,NULL,'이미지/커피ICE/큐브라떼.jpg',NULL),('DESSERT','크로크무슈',3800,NULL,NULL,NULL,NULL,NULL,'이미지/DESSERT/크로크무슈.jpg',NULL),('DESSERT','크림바바 생크림빵',1800,NULL,NULL,NULL,NULL,NULL,'이미지/DESSERT/크림바바 생크림빵.jpg',NULL),('DESSERT','크림바바 초코 크림빵',1800,NULL,NULL,NULL,NULL,NULL,'이미지/DESSERT/크림바바 초코 크림빵.jpg',NULL),('DESSERT','크림바바 커스터드 크림빵',1800,NULL,NULL,NULL,NULL,NULL,'이미지/DESSERT/크림바바 커스터드 크림빵.jpg',NULL),('COFFEE(ICE)','티라미수라떼(ICE)',3900,1,1,NULL,NULL,NULL,'이미지/커피ICE/티라미수라떼.jpg',NULL),('DESSERT','티라미수케익',3300,NULL,NULL,NULL,NULL,NULL,'이미지/DESSERT/티라미수케익.jpg',NULL),('COFFEE(HOT)','펄추가(HOT)',700,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('COFFEE(ICE)','펄추가(ICE)',700,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('DESSERT','퐁크러쉬 마카롱',1800,NULL,NULL,NULL,NULL,NULL,'이미지/DESSERT/퐁크러쉬 마카롱.jpg',NULL),('SMOOTHIE&FRAFFE','플레인 퐁크러쉬',3900,1,NULL,NULL,NULL,NULL,'이미지/SMOOTHIE & FRAPPE/플레인 퐁크러쉬.jpg',NULL),('DESSERT','플레인베이글',2000,NULL,NULL,NULL,NULL,NULL,'이미지/DESSERT/플레인베이글.jpg',NULL),('SMOOTHIE&FRAFFE','플레인요거트스무디',3900,1,NULL,NULL,NULL,NULL,'이미지/SMOOTHIE & FRAPPE/플레인요거트스무디.jpg',NULL),('DESSERT','피넛버터 쿠키',1800,NULL,NULL,NULL,NULL,NULL,'이미지/DESSERT/피넛버터 쿠키.jpg',NULL),('DESSERT','핫도그',2200,NULL,NULL,NULL,NULL,NULL,'이미지/DESSERT/핫도그.jpg',NULL),('BEVERAGE','핫초코',3200,NULL,NULL,NULL,NULL,NULL,'이미지/BEVERAGE/핫초코.png',NULL),('DESSERT','허니브레드',4500,NULL,NULL,NULL,NULL,NULL,'이미지/DESSERT/허니브레드.jpg',NULL),('TEA','허니자몽블랙티(ICE)',3500,1,NULL,NULL,NULL,NULL,'이미지/TEA/허니자몽블랙티(ICE).jpg',NULL),('COFFEE(ICE)','헤이즐넛아메리카노(ICE)',2500,1,1,NULL,NULL,NULL,'이미지/커피ICE/헤이즐넛아메리카노.jpg',NULL),('BEVERAGE','흑당버블그린티(ICE)',3800,1,NULL,NULL,NULL,NULL,'이미지/BEVERAGE/흑당버블그린티.jpg',NULL),('BEVERAGE','흑당버블라떼(ICE)',3500,1,NULL,NULL,NULL,NULL,'이미지/BEVERAGE/흑당버블라떼.jpg',NULL),('BEVERAGE','흑당버블밀크티(ICE)',3800,1,NULL,NULL,NULL,NULL,'이미지/BEVERAGE/흑당버블밀크티.jpg',NULL);
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orderlist`
--

DROP TABLE IF EXISTS `orderlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orderlist` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Customer` int NOT NULL,
  `Time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Name` varchar(45) NOT NULL,
  `Price` int NOT NULL,
  `Quantity` int DEFAULT NULL,
  `Shot` int DEFAULT NULL,
  `WhippedCream` int DEFAULT NULL,
  `Cinammon` int DEFAULT NULL,
  `Pearl` int DEFAULT NULL,
  `TotalPrice` int DEFAULT NULL,
  `Card` int DEFAULT NULL,
  `Ordernum` int DEFAULT NULL,
  `Served` int DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderlist`
--

LOCK TABLES `orderlist` WRITE;
/*!40000 ALTER TABLE `orderlist` DISABLE KEYS */;
INSERT INTO `orderlist` VALUES (1,1,'2020-10-01 01:00:31','아메리카노(ICE)',2000,1,NULL,NULL,NULL,NULL,2000,1,1,1),(2,2,'2020-10-02 01:10:31','h 아메리카노',1500,1,1,NULL,NULL,NULL,1500,1,1,1),(3,3,'2020-10-02 02:00:31','h 티라미수라떼',3900,2,NULL,NULL,NULL,NULL,7800,1,2,1),(4,4,'2020-10-03 06:00:31','아메리카노(ICE)',2000,1,NULL,NULL,NULL,NULL,2000,1,1,1),(5,4,'2020-10-03 06:00:31','바닐라라떼(ICE)',3200,1,1,NULL,NULL,NULL,3200,1,1,1),(6,5,'2020-10-04 01:00:31','h 녹차라떼',3200,1,NULL,NULL,NULL,NULL,3200,1,1,1);
/*!40000 ALTER TABLE `orderlist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shoppingcart`
--

DROP TABLE IF EXISTS `shoppingcart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shoppingcart` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  `Price` int NOT NULL,
  `Quantity` int NOT NULL DEFAULT '1',
  `Shot` int DEFAULT NULL,
  `WhippedCream` int DEFAULT NULL,
  `Cinammon` int DEFAULT NULL,
  `Pearl` int DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `Name_idx` (`Name`),
  CONSTRAINT `Name` FOREIGN KEY (`Name`) REFERENCES `menu` (`Name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shoppingcart`
--

LOCK TABLES `shoppingcart` WRITE;
/*!40000 ALTER TABLE `shoppingcart` DISABLE KEYS */;
/*!40000 ALTER TABLE `shoppingcart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stamp`
--

DROP TABLE IF EXISTS `stamp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stamp` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Ph` varchar(45) NOT NULL,
  `Stamp` int NOT NULL DEFAULT '1',
  `Date` date NOT NULL,
  `ExpDate` date NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stamp`
--

LOCK TABLES `stamp` WRITE;
/*!40000 ALTER TABLE `stamp` DISABLE KEYS */;
/*!40000 ALTER TABLE `stamp` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-09 13:08:40
