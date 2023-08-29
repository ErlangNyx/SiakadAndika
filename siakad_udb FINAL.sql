-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 15, 2023 at 04:16 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `siakad_udb`
--

-- --------------------------------------------------------

--
-- Table structure for table `angkatan`
--

CREATE TABLE `angkatan` (
  `tahun` int(4) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `angkatan`
--

INSERT INTO `angkatan` (`tahun`, `createdAt`, `updatedAt`) VALUES
(2020, '2023-07-15 11:49:45', '2023-07-15 11:49:45'),
(2021, '2023-07-13 18:14:01', '2023-07-13 18:14:01'),
(2022, '2023-07-13 18:12:43', '2023-07-13 18:12:43'),
(2023, '2023-05-09 02:11:03', '2023-05-09 02:11:03');

-- --------------------------------------------------------

--
-- Table structure for table `jenjang_pendidikan`
--

CREATE TABLE `jenjang_pendidikan` (
  `id_jenj_didik` int(2) NOT NULL,
  `nama_jenj_didik` varchar(100) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `jenjang_pendidikan`
--

INSERT INTO `jenjang_pendidikan` (`id_jenj_didik`, `nama_jenj_didik`, `createdAt`, `updatedAt`) VALUES
(22, 'D3', '2023-03-21 09:02:40', '2023-03-21 09:02:40'),
(30, 'S1', '2023-03-21 09:02:40', '2023-03-21 09:02:40');

-- --------------------------------------------------------

--
-- Table structure for table `kurikulum`
--

CREATE TABLE `kurikulum` (
  `id_kurikulum` bigint(20) NOT NULL,
  `nama_kurikulum` varchar(255) NOT NULL,
  `kode_prodi` varchar(10) NOT NULL,
  `id_semester` int(5) NOT NULL,
  `jumlah_sks_lulus` decimal(5,2) NOT NULL,
  `jumlah_sks_wajib` decimal(5,2) NOT NULL,
  `jumlah_sks_pilihan` decimal(5,2) NOT NULL,
  `id_neofeeder` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kurikulum`
--

INSERT INTO `kurikulum` (`id_kurikulum`, `nama_kurikulum`, `kode_prodi`, `id_semester`, `jumlah_sks_lulus`, `jumlah_sks_wajib`, `jumlah_sks_pilihan`, `id_neofeeder`, `createdAt`, `updatedAt`) VALUES
(1, 'Merdeka', 'P0005', 0, '40.00', '50.00', '10.00', NULL, '2023-07-13 19:05:31', '2023-07-13 19:05:31'),
(2, 'Merdeka', 'P0004', 0, '40.00', '50.00', '10.00', NULL, '2023-07-13 19:05:52', '2023-07-13 19:05:52');

-- --------------------------------------------------------

--
-- Table structure for table `mata_kuliah`
--

CREATE TABLE `mata_kuliah` (
  `kode_mata_kuliah` varchar(10) NOT NULL,
  `nama_mata_kuliah` varchar(255) NOT NULL,
  `kode_prodi` varchar(10) NOT NULL,
  `id_jenis_mata_kuliah` char(1) NOT NULL,
  `id_kelompok_mata_kuliah` char(1) NOT NULL,
  `sks_mata_kuliah` decimal(5,2) NOT NULL,
  `sks_tatap_muka` decimal(5,2) NOT NULL,
  `sks_praktik` decimal(5,2) NOT NULL,
  `sks_praktik_lapangan` decimal(5,2) NOT NULL,
  `sks_simulasi` decimal(5,2) NOT NULL,
  `ada_sap` int(1) NOT NULL,
  `ada_silabus` int(1) NOT NULL,
  `ada_bahan_ajar` int(1) NOT NULL,
  `ada_bahan_praktik` int(1) NOT NULL,
  `ada_diktat` int(1) NOT NULL,
  `tanggal_mulai_efektif` int(1) NOT NULL,
  `tanggal_akhir_efektif` int(1) NOT NULL,
  `id_neofeeder` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `mata_kuliah_kurikulum`
--

CREATE TABLE `mata_kuliah_kurikulum` (
  `id_mata_kuliah_kurikulum` bigint(20) NOT NULL,
  `id_kurikulum` bigint(20) NOT NULL,
  `kode_mata_kuliah` varchar(10) NOT NULL,
  `semester` int(1) NOT NULL,
  `apakah_wajib` int(1) NOT NULL,
  `id_neofeeder` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `program_studi`
--

CREATE TABLE `program_studi` (
  `kode_prodi` varchar(10) NOT NULL,
  `nama_prodi` varchar(100) NOT NULL,
  `id_jenj_didik` int(2) NOT NULL,
  `id_neofeeder` varchar(100) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `program_studi`
--

INSERT INTO `program_studi` (`kode_prodi`, `nama_prodi`, `id_jenj_didik`, `id_neofeeder`, `createdAt`, `updatedAt`) VALUES
('P0001', 'Sistem Informasi', 30, NULL, '2023-03-21 08:58:16', '2023-03-21 08:58:16'),
('P0002', 'Manajemen Informasi', 22, NULL, '2023-03-21 08:58:16', '2023-03-21 08:58:16');

-- --------------------------------------------------------

--
-- Table structure for table `satuan_pendidikan`
--

CREATE TABLE `satuan_pendidikan` (
  `kode_perguruan_tinggi` varchar(10) NOT NULL,
  `nama_perguruan_tinggi` varchar(255) NOT NULL,
  `id_neofeeder` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `satuan_pendidikan`
--

INSERT INTO `satuan_pendidikan` (`kode_perguruan_tinggi`, `nama_perguruan_tinggi`, `id_neofeeder`, `createdAt`, `updatedAt`) VALUES
('UDB', 'Universitas Duta Bangsa', NULL, '2023-07-13 19:15:16', '2023-07-13 19:15:16');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(8) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `level` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `nama`, `level`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'rais', '1', '123', '2023-05-23 08:44:38', '2023-05-23 08:44:38');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `angkatan`
--
ALTER TABLE `angkatan`
  ADD PRIMARY KEY (`tahun`);

--
-- Indexes for table `jenjang_pendidikan`
--
ALTER TABLE `jenjang_pendidikan`
  ADD PRIMARY KEY (`id_jenj_didik`);

--
-- Indexes for table `kurikulum`
--
ALTER TABLE `kurikulum`
  ADD PRIMARY KEY (`id_kurikulum`);

--
-- Indexes for table `mata_kuliah`
--
ALTER TABLE `mata_kuliah`
  ADD PRIMARY KEY (`kode_mata_kuliah`);

--
-- Indexes for table `mata_kuliah_kurikulum`
--
ALTER TABLE `mata_kuliah_kurikulum`
  ADD PRIMARY KEY (`id_mata_kuliah_kurikulum`);

--
-- Indexes for table `program_studi`
--
ALTER TABLE `program_studi`
  ADD PRIMARY KEY (`kode_prodi`);

--
-- Indexes for table `satuan_pendidikan`
--
ALTER TABLE `satuan_pendidikan`
  ADD PRIMARY KEY (`kode_perguruan_tinggi`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `kurikulum`
--
ALTER TABLE `kurikulum`
  MODIFY `id_kurikulum` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `mata_kuliah_kurikulum`
--
ALTER TABLE `mata_kuliah_kurikulum`
  MODIFY `id_mata_kuliah_kurikulum` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
