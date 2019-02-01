-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le :  ven. 01 fév. 2019 à 17:27
-- Version du serveur :  5.7.24-0ubuntu0.16.04.1
-- Version de PHP :  7.2.11-2+ubuntu16.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `resto`
--

-- --------------------------------------------------------

--
-- Structure de la table `Meal`
--

CREATE TABLE `Meal` (
  `Id` int(11) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Photo` varchar(30) NOT NULL,
  `Description` text NOT NULL,
  `QuantityInStock` int(4) NOT NULL,
  `BuyPrice` double NOT NULL,
  `SalePrice` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `Meal`
--

INSERT INTO `Meal` (`Id`, `Name`, `Photo`, `Description`, `QuantityInStock`, `BuyPrice`, `SalePrice`) VALUES
(1, 'Coca-Cola', 'coca.jpg', 'Mmmm, le Coca-Cola avec 10 morceaux de sucres et tout plein de caféine !', 72, 0.6, 3),
(2, 'Bagel Thon', 'bagel_thon.jpg', 'Notre bagel est constitué d\'un pain moelleux avec des grains de sésame et du thon albacore, accompagné de feuilles de salade fraîche du jour  et d\'une sauce renversante :-)', 18, 2.75, 5.5),
(3, 'Bacon Cheeseburger', 'bacon_cheeseburger.jpg', 'Ce délicieux cheeseburger contient un steak haché viande française de 150g ainsi que d\'un buns grillé juste comme il faut, le tout accompagné de frites fraîches maison !', 14, 6, 12.5),
(4, 'Carrot Cake', 'carrot_cake.jpg', 'Le carrot cake maison ravira les plus gourmands et les puristes : tous les ingrédients sont naturels !\r\nÀ consommer sans modération', 9, 3, 6.75),
(5, 'Donut Chocolat', 'chocolate_donut.jpg', 'Les donuts sont fabriqués le matin même et sont recouvert d\'une délicieuse sauce au chocolat !', 16, 3, 6.2),
(6, 'Dr. Pepper', 'drpepper.jpg', 'Son goût sucré avec de l\'amande vous ravira !', 53, 0.5, 2.9),
(7, 'Milkshake', 'milkshake.jpg', 'Notre milkshake bien crémeux contient des morceaux d\'Oréos et est accompagné de crème chantilly et de smarties en guise de topping. Il éblouira vos papilles !', 12, 2, 5.35);

-- --------------------------------------------------------

--
-- Structure de la table `Users`
--

CREATE TABLE `Users` (
  `Id` int(11) NOT NULL,
  `LastName` varchar(30) NOT NULL,
  `FirstName` varchar(30) NOT NULL,
  `BirthDate` date NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(64) NOT NULL,
  `Address` varchar(250) NOT NULL,
  `City` varchar(40) DEFAULT NULL,
  `ZipCode` varchar(5) NOT NULL,
  `Phone` varchar(10) NOT NULL,
  `CreationTimestamp` datetime NOT NULL,
  `LastloginTimestamp` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `Users`
--

INSERT INTO `Users` (`Id`, `LastName`, `FirstName`, `BirthDate`, `Email`, `Password`, `Address`, `City`, `ZipCode`, `Phone`, `CreationTimestamp`, `LastloginTimestamp`) VALUES
(4, 'Anastasiya', 'Baryash', '1980-07-09', 'baryash.anastasiya@gmail.com', '$2y$11$1fbea6436e1063fa35733u.E8jMN0ySF0HjS2hfif3cwVGYvzVVEy', '54 rue du Gros Murger', NULL, '78600', '0618244767', '2019-01-29 15:26:25', NULL),
(6, 'Gigi', 'Orange', '1990-02-02', 'gigi@gogo.com', '$2y$11$4ca75ff4abf4fbdb0b194uDxnE88S5neoVRIOer76tG6Hrj2sn/ua', '55 rue du Gros Murger', NULL, '78600', '060606060', '2019-01-29 15:50:54', NULL),
(9, 'Lili', 'Blue', '1987-01-01', 'rootlili@gogo.com', '$2y$11$0637b70e424877a706778OygaBPKVDyuahKWxlizmBcyzcHFevgia', '33 rue', NULL, '77777', '77777777', '2019-01-29 17:00:09', NULL),
(10, 'Black', 'Pepe', '2000-01-01', 'pepe@gogo.com', '$2y$11$0eee363b07bf876e2f6f5uT3uz8.M4Cv7uzEtlCcRmWMDG8wMtplm', '33 rue', NULL, '14141', '02020202', '2019-01-29 17:05:50', NULL),
(11, 'Black', 'Pepe', '2000-01-01', 'pepe@gogo.com', '$2y$11$a807dd5833de02c72013bebEFyVWzDDHZo9ODmC3e0vk4fssUgMRq', '33 rue', NULL, '14141', '02020202', '2019-01-29 17:06:54', NULL);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Meal`
--
ALTER TABLE `Meal`
  ADD PRIMARY KEY (`Id`);

--
-- Index pour la table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Meal`
--
ALTER TABLE `Meal`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `Users`
--
ALTER TABLE `Users`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
