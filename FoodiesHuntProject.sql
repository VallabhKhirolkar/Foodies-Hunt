CREATE DATABASE  IF NOT EXISTS `foodieshunttrial` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `foodieshunttrial`;
-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: foodieshunttrial
-- ------------------------------------------------------
-- Server version	8.0.27

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

--
-- Table structure for table `consumer`
--

DROP TABLE IF EXISTS `consumer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `consumer` (
  `regid` int NOT NULL AUTO_INCREMENT,
  `consumername` varchar(255) DEFAULT NULL,
  `contactno` varchar(255) DEFAULT NULL,
  `currentcity` varchar(255) DEFAULT NULL,
  `mailid` varchar(255) DEFAULT NULL,
  `loginid` int DEFAULT NULL,
  `messid` int DEFAULT NULL,
  PRIMARY KEY (`regid`),
  KEY `FKc3ygh2uwrtdspveitcvg0nieh` (`loginid`),
  KEY `FK1p99rfdww5m1s14ppkps2y6sg` (`messid`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consumer`
--

LOCK TABLES `consumer` WRITE;
/*!40000 ALTER TABLE `consumer` DISABLE KEYS */;
INSERT INTO `consumer` VALUES (5,'Customer1','9874562134','Pune','c1@gmail.com',13,7),(6,'Customer2','9890052151','Pune','c2@gmail.com',14,6),(7,'Customer3','9890073814','Pune','c3@gmail.com',15,7);
/*!40000 ALTER TABLE `consumer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `logincredentials`
--

DROP TABLE IF EXISTS `logincredentials`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `logincredentials` (
  `loginid` int NOT NULL AUTO_INCREMENT,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`loginid`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `logincredentials`
--

LOCK TABLES `logincredentials` WRITE;
/*!40000 ALTER TABLE `logincredentials` DISABLE KEYS */;
INSERT INTO `logincredentials` VALUES (15,'Cust','Consumer','Cust3'),(14,'Cust','Consumer','Cust2'),(13,'Cust','Consumer','Cust1'),(12,'mess','Provider','mess2'),(1,'MOVM@123','Admin','MOVM'),(11,'mess','Provider','mess1');
/*!40000 ALTER TABLE `logincredentials` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mess`
--

DROP TABLE IF EXISTS `mess`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mess` (
  `mid` int NOT NULL AUTO_INCREMENT,
  `approvalstatus` varchar(255) DEFAULT NULL,
  `area` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `messname` varchar(255) DEFAULT NULL,
  `messtype` varchar(255) DEFAULT NULL,
  `loginid` int DEFAULT NULL,
  `messid` int DEFAULT NULL,
  PRIMARY KEY (`mid`),
  KEY `FKshqj97r3cxclk138ovbfeyxdl` (`loginid`),
  KEY `FKb3mh9nj5gxkewivx6n62metgg` (`messid`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mess`
--

LOCK TABLES `mess` WRITE;
/*!40000 ALTER TABLE `mess` DISABLE KEYS */;
INSERT INTO `mess` VALUES (6,'Approved','Pimpri','Pune','Manas ','Both',11,6),(7,'Approved','Chinchwad','Pune','Samarth ','Pure Veg',12,7);
/*!40000 ALTER TABLE `mess` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messowner`
--

DROP TABLE IF EXISTS `messowner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `messowner` (
  `messid` int NOT NULL AUTO_INCREMENT,
  `approvalstatus` varchar(255) DEFAULT NULL,
  `contactno` varchar(255) DEFAULT NULL,
  `idproof` varchar(255) DEFAULT NULL,
  `licenseno` varchar(255) DEFAULT NULL,
  `ownername` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`messid`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messowner`
--

LOCK TABLES `messowner` WRITE;
/*!40000 ALTER TABLE `messowner` DISABLE KEYS */;
INSERT INTO `messowner` VALUES (7,'Approved','9890052151','303030','333333','Owner2'),(6,'Approved','9874562134','333333','303030','Owner1');
/*!40000 ALTER TABLE `messowner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nonvegmenu`
--

DROP TABLE IF EXISTS `nonvegmenu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nonvegmenu` (
  `menuid` int NOT NULL AUTO_INCREMENT,
  `breadtype` varchar(255) DEFAULT NULL,
  `colddrink` varchar(255) DEFAULT NULL,
  `curry` varchar(255) DEFAULT NULL,
  `day` varchar(255) DEFAULT NULL,
  `fry` varchar(255) DEFAULT NULL,
  `menustatus` varchar(255) DEFAULT NULL,
  `rice` varchar(255) DEFAULT NULL,
  `messid` int DEFAULT NULL,
  PRIMARY KEY (`menuid`),
  KEY `FKn7cdefpb008pibq5e0324kyup` (`messid`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nonvegmenu`
--

LOCK TABLES `nonvegmenu` WRITE;
/*!40000 ALTER TABLE `nonvegmenu` DISABLE KEYS */;
INSERT INTO `nonvegmenu` VALUES (6,'Jawari Bhakri','Coke','Mutton Curry','Monday','Fish Fry','Dinner','Dum-biryani',6);
/*!40000 ALTER TABLE `nonvegmenu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `revid` int NOT NULL AUTO_INCREMENT,
  `messid` int DEFAULT NULL,
  `rating` int DEFAULT NULL,
  `regid` int DEFAULT NULL,
  `review` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`revid`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (2,6,2,6,'Good');
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vegmenu`
--

DROP TABLE IF EXISTS `vegmenu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vegmenu` (
  `menuid` int NOT NULL AUTO_INCREMENT,
  `breadtype` varchar(255) DEFAULT NULL,
  `colddrink` varchar(255) DEFAULT NULL,
  `curry1` varchar(255) DEFAULT NULL,
  `curry2` varchar(255) DEFAULT NULL,
  `day` varchar(255) DEFAULT NULL,
  `menustatus` varchar(255) DEFAULT NULL,
  `rice` varchar(255) DEFAULT NULL,
  `specialdish` varchar(255) DEFAULT NULL,
  `starter` varchar(255) DEFAULT NULL,
  `sweetdish` varchar(255) DEFAULT NULL,
  `thalitype` varchar(255) DEFAULT NULL,
  `messid` int DEFAULT NULL,
  PRIMARY KEY (`menuid`),
  KEY `FKk3277vtj8iev3lvoqumflyorf` (`messid`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vegmenu`
--

LOCK TABLES `vegmenu` WRITE;
/*!40000 ALTER TABLE `vegmenu` DISABLE KEYS */;
INSERT INTO `vegmenu` VALUES (11,'Butter Nan','Coke','Panner Masala','Dal Fry','Monday','Dinner','Plain Rice','Pav Bhaji','Soyabian Chilli','Jalebi','Punjabi',6),(12,'Roti','Pepsi','Bhedi Fry','Matki Usal','Monday','Dinner','Dal-Rice','Misal Pav','Salad','Sheera','Punjabi',7);
/*!40000 ALTER TABLE `vegmenu` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-14  0:40:52
