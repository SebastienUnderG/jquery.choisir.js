-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Lun 09 Janvier 2017 à 01:42
-- Version du serveur :  10.1.19-MariaDB
-- Version de PHP :  5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `lottery`
--

-- --------------------------------------------------------

--
-- Structure de la table `base1`
--

CREATE TABLE `base1` (
  `id` int(11) NOT NULL,
  `lastname` text NOT NULL,
  `firstname` text NOT NULL,
  `inbase` tinyint(1) NOT NULL,
  `url` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `base1`
--

INSERT INTO `base1` (`id`, `lastname`, `firstname`, `inbase`, `url`) VALUES
(1, 'Enfant', 'Child', 1, 'images/child-476506_640.jpg'),
(2, 'femme', 'book', 1, 'images/clerk-18915_640.jpg'),
(3, 'Foulard', 'Girl', 1, 'images/girl-647714_640.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `base2`
--

CREATE TABLE `base2` (
  `id` int(11) NOT NULL,
  `firstname` text NOT NULL,
  `lastname` text NOT NULL,
  `inbase` tinyint(1) NOT NULL,
  `url` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `base2`
--

INSERT INTO `base2` (`id`, `firstname`, `lastname`, `inbase`, `url`) VALUES
(4, 'eau', 'men', 1, 'images/men-900190_640.jpg'),
(5, 'femme', 'modele', 1, 'images/model-600222_640.jpg'),
(6, 'Vieux', 'peoples', 1, 'images/old-people-616718_640.jpg');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
