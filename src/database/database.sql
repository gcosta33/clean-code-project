-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.9.4-MariaDB-1:10.9.4+maria~ubu2204 - mariadb.org binary distribution
-- OS do Servidor:               debian-linux-gnu
-- HeidiSQL Versão:              12.1.0.6557
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para ccca
CREATE DATABASE IF NOT EXISTS `ccca` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `ccca`;

-- Copiando estrutura para tabela ccca.coupon
CREATE TABLE IF NOT EXISTS `coupon` (
  `code` varchar(50) DEFAULT NULL,
  `percentage` int(3) DEFAULT NULL,
  `expire_date` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela ccca.coupon: ~2 rows (aproximadamente)
DELETE FROM `coupon`;
INSERT INTO `coupon` (`code`, `percentage`, `expire_date`) VALUES
	('VALE20', 20, '2023-10-10 10:00:00'),
	('VALE20_EXPIRED', 20, '2020-10-10 10:00:00');

-- Copiando estrutura para tabela ccca.item
CREATE TABLE IF NOT EXISTS `item` (
  `idItem` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(50) DEFAULT NULL,
  `description` varchar(50) DEFAULT NULL,
  `price` float DEFAULT NULL,
  PRIMARY KEY (`idItem`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela ccca.item: ~3 rows (aproximadamente)
DELETE FROM `item`;
INSERT INTO `item` (`idItem`, `category`, `description`, `price`) VALUES
	(1, 'Musical Instruments', 'Guitar', 1000),
	(2, 'Musical Instruments', 'Amplify', 5000),
	(3, 'Musical Instruments', 'Cable', 30);

-- Copiando estrutura para tabela ccca.orders
CREATE TABLE IF NOT EXISTS `orders` (
  `id_order` int(11) NOT NULL AUTO_INCREMENT,
  `coupon` varchar(50) DEFAULT NULL,
  `code` varchar(50) DEFAULT NULL,
  `cpf` varchar(50) DEFAULT NULL,
  `issue_date` timestamp NULL DEFAULT NULL,
  `freight` float(16,2) DEFAULT NULL,
  `sequence` int(8) DEFAULT NULL,
  PRIMARY KEY (`id_order`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela ccca.orders: ~0 rows (aproximadamente)
DELETE FROM `orders`;

-- Copiando estrutura para tabela ccca.order_item
CREATE TABLE IF NOT EXISTS `order_item` (
  `id_order` int(11) NOT NULL,
  `id_item` int(11) NOT NULL,
  `price` float(16,2) DEFAULT NULL,
  `quantity` int(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela ccca.order_item: ~0 rows (aproximadamente)
DELETE FROM `order_item`;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
