CREATE DATABASE  IF NOT EXISTS `Coamazon` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `Coamazon`;
-- MySQL dump 10.13  Distrib 5.7.26, for Linux (x86_64)
--
-- Host: localhost    Database: Coamazon
-- ------------------------------------------------------
-- Server version	5.7.26

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
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `course` (
  `idcourse` int(11) NOT NULL,
  `course` varchar(45) DEFAULT NULL,
  `user_iduser` int(11) NOT NULL,
  PRIMARY KEY (`idcourse`),
  KEY `fk_course_user1_idx` (`user_iduser`),
  CONSTRAINT `fk_course_user1` FOREIGN KEY (`user_iduser`) REFERENCES `user` (`iduser`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course`
--

LOCK TABLES `course` WRITE;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
INSERT INTO `course` VALUES (1,'qw',1);
/*!40000 ALTER TABLE `course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course_has_user`
--

DROP TABLE IF EXISTS `course_has_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `course_has_user` (
  `course_idcourse` int(11) NOT NULL,
  `user_iduser` int(11) NOT NULL,
  `state` tinyint(1) DEFAULT NULL,
  `points_idpoints` int(11) NOT NULL,
  PRIMARY KEY (`course_idcourse`,`user_iduser`),
  KEY `fk_course_has_user_user1_idx` (`user_iduser`),
  KEY `fk_course_has_user_course1_idx` (`course_idcourse`),
  KEY `fk_course_has_user_points1_idx` (`points_idpoints`),
  CONSTRAINT `fk_course_has_user_course1` FOREIGN KEY (`course_idcourse`) REFERENCES `course` (`idcourse`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_course_has_user_points1` FOREIGN KEY (`points_idpoints`) REFERENCES `points` (`idpoints`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_course_has_user_user1` FOREIGN KEY (`user_iduser`) REFERENCES `user` (`iduser`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_has_user`
--

LOCK TABLES `course_has_user` WRITE;
/*!40000 ALTER TABLE `course_has_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `course_has_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `departament`
--

DROP TABLE IF EXISTS `departament`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `departament` (
  `iddepartament` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `flag` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`iddepartament`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departament`
--

LOCK TABLES `departament` WRITE;
/*!40000 ALTER TABLE `departament` DISABLE KEYS */;
INSERT INTO `departament` VALUES (1,'Caqueta','1');
/*!40000 ALTER TABLE `departament` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `option`
--

DROP TABLE IF EXISTS `option`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `option` (
  `idoption` int(11) NOT NULL,
  `option` varchar(45) DEFAULT NULL,
  `veracirty` tinyint(1) DEFAULT NULL,
  `question_idquestion` int(11) NOT NULL,
  PRIMARY KEY (`idoption`),
  KEY `fk_option_question1_idx` (`question_idquestion`),
  CONSTRAINT `fk_option_question1` FOREIGN KEY (`question_idquestion`) REFERENCES `question` (`idquestion`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `option`
--

LOCK TABLES `option` WRITE;
/*!40000 ALTER TABLE `option` DISABLE KEYS */;
/*!40000 ALTER TABLE `option` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `points`
--

DROP TABLE IF EXISTS `points`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `points` (
  `idpoints` int(11) NOT NULL,
  `points` int(11) DEFAULT NULL,
  `cualificate` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idpoints`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `points`
--

LOCK TABLES `points` WRITE;
/*!40000 ALTER TABLE `points` DISABLE KEYS */;
/*!40000 ALTER TABLE `points` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question`
--

DROP TABLE IF EXISTS `question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `question` (
  `idquestion` int(11) NOT NULL,
  `description` varchar(45) DEFAULT NULL,
  `points` int(11) DEFAULT NULL,
  `questionaire_idquestiona` int(11) NOT NULL,
  PRIMARY KEY (`idquestion`),
  KEY `fk_question_questionaire1_idx` (`questionaire_idquestiona`),
  CONSTRAINT `fk_question_questionaire1` FOREIGN KEY (`questionaire_idquestiona`) REFERENCES `questionaire` (`idquestiona`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question`
--

LOCK TABLES `question` WRITE;
/*!40000 ALTER TABLE `question` DISABLE KEYS */;
/*!40000 ALTER TABLE `question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questionaire`
--

DROP TABLE IF EXISTS `questionaire`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `questionaire` (
  `idquestiona` int(11) NOT NULL,
  `description` varchar(45) DEFAULT NULL,
  `pointstotal` int(11) DEFAULT NULL,
  `theme_idtheme` int(11) NOT NULL,
  PRIMARY KEY (`idquestiona`),
  KEY `fk_questionaire_theme1_idx` (`theme_idtheme`),
  CONSTRAINT `fk_questionaire_theme1` FOREIGN KEY (`theme_idtheme`) REFERENCES `theme` (`idtheme`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questionaire`
--

LOCK TABLES `questionaire` WRITE;
/*!40000 ALTER TABLE `questionaire` DISABLE KEYS */;
/*!40000 ALTER TABLE `questionaire` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questionaire_has_course_has_user`
--

DROP TABLE IF EXISTS `questionaire_has_course_has_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `questionaire_has_course_has_user` (
  `questionaire_idquestiona` int(11) NOT NULL,
  `course_has_user_course_idcourse` int(11) NOT NULL,
  `course_has_user_user_iduser` int(11) NOT NULL,
  `pointsobtenidos` int(11) DEFAULT NULL,
  PRIMARY KEY (`questionaire_idquestiona`,`course_has_user_course_idcourse`,`course_has_user_user_iduser`),
  KEY `fk_questionaire_has_course_has_user_course_has_user1_idx` (`course_has_user_course_idcourse`,`course_has_user_user_iduser`),
  KEY `fk_questionaire_has_course_has_user_questionaire1_idx` (`questionaire_idquestiona`),
  CONSTRAINT `fk_questionaire_has_course_has_user_course_has_user1` FOREIGN KEY (`course_has_user_course_idcourse`, `course_has_user_user_iduser`) REFERENCES `course_has_user` (`course_idcourse`, `user_iduser`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_questionaire_has_course_has_user_questionaire1` FOREIGN KEY (`questionaire_idquestiona`) REFERENCES `questionaire` (`idquestiona`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questionaire_has_course_has_user`
--

LOCK TABLES `questionaire_has_course_has_user` WRITE;
/*!40000 ALTER TABLE `questionaire_has_course_has_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `questionaire_has_course_has_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `role` (
  `idrole` int(11) NOT NULL,
  `tipo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idrole`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'Studens'),(2,'Teacher');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subtheme`
--

DROP TABLE IF EXISTS `subtheme`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subtheme` (
  `idsubtheme` int(11) NOT NULL,
  `image` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `theme_idtheme` int(11) NOT NULL,
  PRIMARY KEY (`idsubtheme`),
  KEY `fk_subtheme_theme1_idx` (`theme_idtheme`),
  CONSTRAINT `fk_subtheme_theme1` FOREIGN KEY (`theme_idtheme`) REFERENCES `theme` (`idtheme`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subtheme`
--

LOCK TABLES `subtheme` WRITE;
/*!40000 ALTER TABLE `subtheme` DISABLE KEYS */;
/*!40000 ALTER TABLE `subtheme` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `theme`
--

DROP TABLE IF EXISTS `theme`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `theme` (
  `idtheme` int(11) NOT NULL,
  `description` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idtheme`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `theme`
--

LOCK TABLES `theme` WRITE;
/*!40000 ALTER TABLE `theme` DISABLE KEYS */;
INSERT INTO `theme` VALUES (1,'Fauna del Caqueta'),(2,'Flora del Caqueta');
/*!40000 ALTER TABLE `theme` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `theme_has_departament`
--

DROP TABLE IF EXISTS `theme_has_departament`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `theme_has_departament` (
  `theme_idtheme` int(11) NOT NULL,
  `departament_iddepartament` int(11) NOT NULL,
  `state` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`theme_idtheme`,`departament_iddepartament`),
  KEY `fk_theme_has_departament_departament1_idx` (`departament_iddepartament`),
  KEY `fk_theme_has_departament_theme1_idx` (`theme_idtheme`),
  CONSTRAINT `fk_theme_has_departament_departament1` FOREIGN KEY (`departament_iddepartament`) REFERENCES `departament` (`iddepartament`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_theme_has_departament_theme1` FOREIGN KEY (`theme_idtheme`) REFERENCES `theme` (`idtheme`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `theme_has_departament`
--

LOCK TABLES `theme_has_departament` WRITE;
/*!40000 ALTER TABLE `theme_has_departament` DISABLE KEYS */;
INSERT INTO `theme_has_departament` VALUES (1,1,1),(2,1,1);
/*!40000 ALTER TABLE `theme_has_departament` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `iduser` int(11) NOT NULL,
  `username` varchar(45) DEFAULT NULL,
  `password` text,
  `name` varchar(45) DEFAULT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `role_idrole` int(11) NOT NULL,
  PRIMARY KEY (`iduser`),
  KEY `fk_user_role_idx` (`role_idrole`),
  CONSTRAINT `fk_user_role` FOREIGN KEY (`role_idrole`) REFERENCES `role` (`idrole`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'cediel','123','123','123','123',1),(2,'cediel1','f44939b9aaf643ffc0e587d244f98fab55bb55edd92bb153a0fa91901554eb6a$fa282d598be7a977d0d696b491cf2366c35645a0e66168a2b45f6f8edfa7e7c1','Victor14324','cediel145645','akjshd@gmail.com',1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-06-14 15:02:46