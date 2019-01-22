-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le :  mar. 22 jan. 2019 à 12:43
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
-- Base de données :  `blog`
--

-- --------------------------------------------------------

--
-- Structure de la table `Author`
--

CREATE TABLE `Author` (
  `Id` int(11) NOT NULL,
  `FirstName` varchar(100) NOT NULL,
  `LastName` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `Author`
--

INSERT INTO `Author` (`Id`, `FirstName`, `LastName`) VALUES
(2, 'Denis', 'Brogniart'),
(3, 'Anastasiya', 'Baryash'),
(4, 'Michail', 'Baryash'),
(6, 'Mariya', 'Varaksina'),
(7, 'Alexander', 'Block');

-- --------------------------------------------------------

--
-- Structure de la table `Category`
--

CREATE TABLE `Category` (
  `Id` int(11) NOT NULL,
  `Name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `Category`
--

INSERT INTO `Category` (`Id`, `Name`) VALUES
(1, 'Jeux-Video'),
(3, 'Restauration'),
(4, 'a'),
(5, 'Music'),
(6, 'Dogs'),
(7, 'Travel'),
(8, 'Food'),
(9, 'Sport'),
(10, 'Sport'),
(11, 'Sport');

-- --------------------------------------------------------

--
-- Structure de la table `Comments`
--

CREATE TABLE `Comments` (
  `Id` int(11) NOT NULL,
  `Pseudo` varchar(100) NOT NULL,
  `CreationDate` datetime NOT NULL,
  `Contents` text NOT NULL,
  `Post_Id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `Comments`
--

INSERT INTO `Comments` (`Id`, `Pseudo`, `CreationDate`, `Contents`, `Post_Id`) VALUES
(1, 'f-f', '2019-01-15 10:21:06', 'bla-bla-bla', 1),
(2, 'f-f', '2019-01-15 11:36:42', '454545454545', 2);

-- --------------------------------------------------------

--
-- Structure de la table `Post`
--

CREATE TABLE `Post` (
  `Id` int(11) NOT NULL,
  `Title` varchar(100) NOT NULL,
  `Content` text NOT NULL,
  `CreationDate` datetime NOT NULL,
  `Author_Id` int(11) NOT NULL,
  `Category_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `Post`
--

INSERT INTO `Post` (`Id`, `Title`, `Content`, `CreationDate`, `Author_Id`, `Category_Id`) VALUES
(1, 'shopping', 'bla bla bla', '2019-01-15 10:20:50', 3, 2),
(2, 'shopping', '56', '2019-01-15 11:33:04', 2, 1);

-- --------------------------------------------------------

--
-- Structure de la table `Users`
--

CREATE TABLE `Users` (
  `Id` int(11) NOT NULL,
  `Mail` varchar(100) NOT NULL,
  `Password` varchar(100) NOT NULL,
  `FirstName` varchar(100) NOT NULL,
  `LastName` varchar(100) NOT NULL,
  `NickName` varchar(100) NOT NULL,
  `Role` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `Users`
--

INSERT INTO `Users` (`Id`, `Mail`, `Password`, `FirstName`, `LastName`, `NickName`, `Role`) VALUES
(17, 'gigi@gogo.com', '$2y$10$CX31NNXc7Gb0wMJCAElC3eM2Bhq8n9gQudw.4R6/57iwFI62BAZ.O', 'Gigi', 'White', 'gigi', 'user'),
(18, 'lada@gogo.com', '$2y$10$QbeCp0.YTHU8Hjzu8/e.aeBuQMOdM7XLCUISUq4fZ9XOQNoB.2LLa', 'Lada', 'Dance', 'lada', 'user'),
(19, 'baryash.anastasiya@gmail.com', '$2y$10$/g.Ej8A0arxvrFG9ytDuZOflqrypi.hdS49HZTpUx88msbLiey1uO', 'Stasiya', 'B', 'StasiyaB', 'admin');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Author`
--
ALTER TABLE `Author`
  ADD PRIMARY KEY (`Id`);

--
-- Index pour la table `Category`
--
ALTER TABLE `Category`
  ADD PRIMARY KEY (`Id`);

--
-- Index pour la table `Comments`
--
ALTER TABLE `Comments`
  ADD PRIMARY KEY (`Id`);

--
-- Index pour la table `Post`
--
ALTER TABLE `Post`
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
-- AUTO_INCREMENT pour la table `Author`
--
ALTER TABLE `Author`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `Category`
--
ALTER TABLE `Category`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `Comments`
--
ALTER TABLE `Comments`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `Post`
--
ALTER TABLE `Post`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `Users`
--
ALTER TABLE `Users`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
