-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Apr 22, 2024 at 07:55 AM
-- Server version: 5.7.39
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `torch_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `banner`
--

CREATE TABLE `banner` (
  `id` int(10) UNSIGNED NOT NULL,
  `banner_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `banner_picture` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'รูปภาพ',
  `banner_status` tinyint(1) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `banner`
--

INSERT INTO `banner` (`id`, `banner_name`, `banner_picture`, `banner_status`, `created_at`, `updated_at`) VALUES
(2, 'mimi', '1710347973_65f1d6c57c658.jpg', 1, '2024-03-13 07:57:28', '2024-03-13 09:39:33'),
(3, 'eiei1234', '1710342366_65f1c0de2e7de.png', 0, '2024-03-13 08:06:06', '2024-03-13 08:24:46');

-- --------------------------------------------------------

--
-- Table structure for table `catgory_products`
--

CREATE TABLE `catgory_products` (
  `id` int(10) UNSIGNED NOT NULL,
  `cat_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'ชื่อหมวดหมู่',
  `cat_parents` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'ลำดับ',
  `cat_picture` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cat_detail` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cat_status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `catgory_products`
--

INSERT INTO `catgory_products` (`id`, `cat_name`, `cat_parents`, `cat_picture`, `cat_detail`, `cat_status`, `created_at`, `updated_at`) VALUES
(1, 'ไฟฉาย', '1', '', 'edfdf', 1, '2024-03-12 09:07:50', '2024-03-12 09:07:50'),
(2, 'หลอดไฟ', '2', '', 'หลอดไฟ', 1, '2024-03-20 05:29:52', '2024-03-20 05:29:52'),
(3, 'ปลั๊กไฟ', '3', '', 'ปลั๊กไฟ', 1, '2024-03-20 05:34:22', '2024-03-20 05:34:22'),
(4, 'Solar', '4', '', '3', 1, '2024-03-21 09:23:06', '2024-03-21 09:23:06'),
(5, 'น้ำมัน', '5', '', 'e', 1, '2024-03-21 09:23:28', '2024-03-21 09:23:28');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2024_03_13_150238_update_banner_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `cat_id` int(10) UNSIGNED NOT NULL,
  `product_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `product_detail` text COLLATE utf8mb4_unicode_ci,
  `product_price` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `product_status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `cat_id`, `product_name`, `product_title`, `product_detail`, `product_price`, `product_status`, `created_at`, `updated_at`) VALUES
(7, 1, 'Seeker 4 Pro ไฟฉายสำหรับการค้นหาและช่วยเหลือ', 'Seeker 4 Pro ไฟฉายสำหรับการค้นหาและช่วยเหลือ ส่องสว่าง 4600 ลูเมน ระยะส่องไกลสุด 260 เมตร ใช้งานได้สูงสุด 15 วัน ระดับกันน้ำ IPX8', '<p><strong>คุณสมบัติ</strong></p><p>✅4&nbsp;หลอดไฟ&nbsp;OSRAM&nbsp;P9 ความสว่าง&nbsp;4600&nbsp;ลูเมน,&nbsp;เพิ่มขึ้น&nbsp;10%,&nbsp;ระยะส่อง&nbsp;260&nbsp;เมตร</p><p>✅&nbsp;ปุ่มโลหะรุ่นที่ขยายใหญ่ขึ้น&nbsp;สะดวกกว่าในการหมุน&nbsp;หมุนได้&nbsp;360°&nbsp;หรือกดค้างเพื่อลดแสง<br>✅&nbsp;สามารถตั้งค่าความสว่างเริ่มต้น&nbsp;(จากแสงจันทร์เป็นความสว่างสูง)&nbsp;โดยการหมุนปุ่มก่อนเปิดเครื่อง</p><p>&nbsp;</p><p>✅&nbsp;แผงหน้าปัดแบบซ่อน&nbsp;(เป็นครั้งแรกที่ใช้เทคโนโลยีการแกะสลักด้วยเลเซอร์แบบไมโครเพื่อให้แสดงผ่านแสงบนโลหะ)&nbsp;ความสว่างของจอแสดงผล&nbsp;&amp;&nbsp;กำลังไฟที่เหลืออยู่<br>&nbsp;</p><p>✅&nbsp;รองรับการชาร์จสองวิธี:&nbsp;การชาร์จ&nbsp;Type-C&nbsp;(พร้อมซองหนัง)&nbsp;หรือการชาร์จแบบแม่เหล็ก&nbsp;(การชาร์จ&nbsp;MCC3&nbsp;2A);<br>✅&nbsp;มาพร้อมซองหนังมัลติฟังก์ชั่นมาตรฐานใหม่&nbsp;พกพาสะดวก&nbsp;จัดเก็บ&nbsp;และใช้งานฟังก์ชั่นดึงออกและปลดล็อคพร้อมๆ&nbsp;กัน<br>✅&nbsp;ขายึดซองหนังสามารถติดตั้งได้หลายสถานการณ์ทั้งบนผนังหรือบนรถ</p>', '500', 1, '2024-03-13 09:34:38', '2024-03-21 08:38:49'),
(8, 1, 'ไฟฉายกระบอกใหญ่ ไฟฉายสปอตไลท์ ไฟฉายเดินป่า มีสายถือคล้อง', 'ไฟฉายกระบอกใหญ่ ไฟฉายชาร์จไฟบ้านแบบใหญ่ ไฟฉายแรงสูง ไฟฉายสปอตไลท์ ไฟฉายเดินป่า มีสายถือคล้อง', '<p>ชื่อสินค้า ：ไฟฉายชาร์จไฟบ้านแบบใหญ่และแรงสูง แบรนด์： NEOBEE รุ่น ：NB-661 ประเภทหลอดไฟ: 5W + 30 SMD ข้อกำหนดแบตเตอรี่: แบตเตอรี่ขาร์จไฟ แบตเตอร์รี่ขนาด：2000 mAh เวลาแสงต่อเนื่อง: 10 ชั่วโมง ระยะลูเมน: 100-5000 เมตร พลังงาน：110-240V～ 50/60Hz วิธีการชาร์จไฟ ：ชาร์ไฟบ้าน หรือชาร์ไฟโซล่าเซล ระดับ： 1 หรือ 2-4 ระดับ แสงไฟ：ขาว น้ำหนัก：1.2 ก.ก</p>', '400', 1, '2024-03-13 09:36:47', '2024-03-13 09:36:47'),
(9, 3, 'ปลั๊กไฟแอมบอส 3 ช่อง 2 เมตร', 'ผลิตจากวัสดุ ABS ทนแรงกระแทรก', '<p>คำอธิบาย</p><p>ผลิตจากวัสดุ ABS ทนแรงกระแทกได้เป็นอย่างดี มีตัวตัดกระแสไฟฟ้า (RCBO) มาตรฐาน EN 60934 พร้อมสวิตช์ควบคุมมาตรฐาน IEC 61058-1 ม่านนิรภัย มาตรฐาน มอก. 166-2549 สายไฟ VCT 3×0.75 Sqm. อย่างดี เต้าเสียบสามขา มาตรฐาน มอก.166-2549 รับประกันสินค้า 3 ปี</p>', '250', 1, '2024-03-20 05:34:02', '2024-03-20 05:34:34'),
(10, 4, 'Solar Led Flood Light 40w', 'Solar Led Flood Light 40w JD-8840L', '<p>madlw: 40W</p><p>DAUDUBU SMD LED: 110 LED</p><p>ULGIUGIGOS: 340 x 290 x 17 mm ungkaonlw: 220 x 254 x 70mm</p><p>GOTUQUDOIIUGIGIOS: 13000MAH twofianisaa: 16W</p><p>monusanalw: 5m</p><p>pailumsuaso: 4-6 Balo pailbonu: 10-12 Bolvo unashunuth: IP67</p>', '500', 1, '2024-03-21 08:35:42', '2024-03-21 09:23:56'),
(11, 2, 'Solar Led Flood Light 60w', 'Solar Led Flood Light 60w', '<p>madw: 6ow</p><p>DIUDUDU LED: 156 LED</p><p>UnGlUGIGOS: 500 × 340 × 17 mm</p><p>Ungkaoglw: 245 x 285 x 90mm</p><p>GOTUDUDOIIUGIGIOS: 19500MAH iwofisanisaa: 22W</p><p>monuananaw: 5m</p><p>pailumsuaso: 4-6 Bolto pailbonu: 10-12 Bolo</p><p>UngShunuth: IP67</p>', '650', 1, '2024-03-21 08:36:41', '2024-03-21 08:36:41'),
(12, 2, 'Solar Led Flood Light 300w', 'Solar Led Flood Light 300w', '<p>madw: 100W</p><p>DIUDUDU SMD LED: 255 LED</p><p>UNGIUGIGOS: 580 x 360 × 17 mm ungkaDalw: 290 × 330 × 90mm</p><p>GOTUQUDOIIUGIGOS: 27000mAH iwofisanisaa: 35W</p><p>monusanalw: 5m</p><p>pailumsuaso: 4-6 Balto pailbonu: 10-12 Bolvo</p><p>UngSthunuth: IP67</p>', '450', 1, '2024-03-21 08:41:43', '2024-03-21 08:41:43');

-- --------------------------------------------------------

--
-- Table structure for table `product_images`
--

CREATE TABLE `product_images` (
  `id` int(10) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `image_names` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'รูปภาพ',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_images`
--

INSERT INTO `product_images` (`id`, `product_id`, `image_names`, `created_at`, `updated_at`) VALUES
(106, 7, '1710347678_65f1d59ef1fd4.jpg', '2024-03-13 09:34:38', '2024-03-13 09:34:38'),
(107, 7, '1710347678_65f1d59ef25d3.jpg', '2024-03-13 09:34:38', '2024-03-13 09:34:38'),
(108, 8, '1710347807_65f1d61fdeb89.jpg', '2024-03-13 09:36:47', '2024-03-13 09:36:47'),
(109, 9, '1710938042_65fad7ba84522.jpg', '2024-03-20 05:34:02', '2024-03-20 05:34:02'),
(110, 10, '1711035342_65fc53cec3867.jpg', '2024-03-21 08:35:42', '2024-03-21 08:35:42'),
(111, 11, '1711035401_65fc5409a2018.jpg', '2024-03-21 08:36:41', '2024-03-21 08:36:41'),
(112, 12, '1711035703_65fc5537e356f.jpg', '2024-03-21 08:41:43', '2024-03-21 08:41:43');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `banner`
--
ALTER TABLE `banner`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `catgory_products`
--
ALTER TABLE `catgory_products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_cat_id_foreign` (`cat_id`);

--
-- Indexes for table `product_images`
--
ALTER TABLE `product_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_images_product_id_foreign` (`product_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `banner`
--
ALTER TABLE `banner`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `catgory_products`
--
ALTER TABLE `catgory_products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `product_images`
--
ALTER TABLE `product_images`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=113;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_cat_id_foreign` FOREIGN KEY (`cat_id`) REFERENCES `catgory_products` (`id`);

--
-- Constraints for table `product_images`
--
ALTER TABLE `product_images`
  ADD CONSTRAINT `product_images_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
