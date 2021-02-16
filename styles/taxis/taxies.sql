-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Nov 11, 2019 at 10:07 PM
-- Server version: 5.7.23
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `ryde`
--

-- --------------------------------------------------------

--
-- Table structure for table `Taxis`
--

CREATE TABLE `Taxis` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `address` text NOT NULL,
  `phone` text NOT NULL,
  `website` text NOT NULL,
  `img` text NOT NULL,
  `city` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Taxis`
--

INSERT INTO `Taxis` (`id`, `name`, `address`, `phone`, `website`, `img`, `city`) VALUES
(1, 'Vancouver Taxi', '760 Clark Drive, Vancouver, BC, V5L 3J2', '(604) 871-1111', 'www.avancouvertaxi.com', 'http://images.dailyhive.com/20181123171257/shutterstock_1127066942-1.jpg', 'Vancouver'),
(2, 'Black Top & Checker Cabs', '777 Pacific St, Vancouver, BC V6Z 2R7', '(604) 731-1111', 'https://www.btccabs.net/', 'https://assets.simpleviewinc.com/simpleview/image/upload/crm/vancouverbc/blacktop_b9197347-5056-b3a8-49d1d8fff83e6e72.jpg', 'Vancouver'),
(3, 'Yellow Cabs', '1441 Clark Drive Vancouver BC V5L 3K9', '(604) 681-1111', 'http://www.yellowcabonline.com/#/booking/', 'https://www.vancouverisawesome.com/wp-content/uploads/2015/05/yellow-cab-wifi.jpg', 'Vancouver'),
(4, 'Maclures Cabs', '1275 W 75th Avenue\r\nVancouver, BC V6P 3G4.', '604-831-1111', 'https://www.maclurescabs.ca/contactus.html', 'https://s3-media2.fl.yelpcdn.com/buphoto/7IPDhCDr79X7eyum7bbMyQ/o.jpg', 'Vancouver'),
(5, 'Excel Limousine Service', '7176 Nanaimo St, Vancouver, BC V5P 4L9', '(604) 433-3550', 'http://www.excellimousine.ca/', 'https://s3-media4.fl.yelpcdn.com/bphoto/XaEAo-7VsClvIWKbJzSfaQ/ls.jpg', 'Vancouver'),
(6, 'Bonny\'s Taxi', '5759 Sidley St, Burnaby, BC V5J 5E6', '(604) 451-1111', 'http://www.bonnystaxi.com/defaultx.htm', 'http://bonnystaxi.com/fleet/car_small.jpg', 'Burnaby'),
(7, 'Capitol Hill Taxi', '5759 Sidley St, Burnaby, BC V5J 5E6', '604) 299-6262', 'No Website Found', 'https://s3-media1.fl.yelpcdn.com/bphoto/_NdHYIpZ-lQElGSQ08iiKA/ls.jpg', 'Burnaby'),
(8, 'Royal City Taxi', '436 Rousseau St, New Westminster, BC V3L 3R3', '(604) 526-6666', 'https://royalcitytaxi.com/', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbndBPIyY3d4I-XEsNa5vLm6NTYForfJodpJTjx7vBmQDvCGX7', 'Burnaby'),
(9, 'Chateau Concierge', '1-4181 McConnell Dr, Burnaby, BC V5A 3J7', '(778) 302-1181', 'No website found', 'https://www.burnabylimos.com/uploads/5/6/0/0/56007497/black-lincoln-suv-limo-orig_3.jpg', 'Burnaby'),
(10, 'Aldergrove-Langley Taxi', '18418 53 Ave #101, Surrey, BC V3S 7A4', '(604) 530-4444', 'http://langleytaxi.ca/', 'http://langleytaxi.ca/images/banner_home_6.jpg', 'Langley'),
(11, 'PACIFIC CABS LANGLEY BC', '17921 55 Ave #3, Surrey, BC V3S 6C4', '(604) 533-3333', 'https://pacificcabs.com/', 'https://pacificcabs.com/wp-content/uploads/2012/02/pacific-cabs1.jpg', 'Langley'),
(12, 'Richmond Taxi Ltd', '2440 Shell Rd, Richmond, BC V6X 2P1', '(604) 272-1111', 'https://www.richmondtaxi.ca/', 'https://www.richmondtaxi.ca/uploads/uNC0g4IC/r96.jpg', 'Richmond'),
(13, 'Kimber Cabs', 'Unit No. 248 - 2633 Viking Way Richmond\r\nBC V6V 3B6, Canada', '604.278.2155', 'http://kimbercabs.com/', 'http://files.cluster2.hgsitebuilder.com/hostgator43100/image/img_3416.jpg', 'Richmond'),
(14, 'Surrey Metro Taxi', ' 8299 129 St #101, Surrey, BC V3W 0A6', '(604) 585-8888', 'http://www.surreymetrotaxi.com/', 'http://www.surreymetrotaxi.com/images/page-12.jpg', 'Surrey'),
(15, 'Newton Whalley Taxi', 'No Address Found', '604-581-1111', 'http://www.whalleytaxi.com/', 'http://www.whalleytaxi.com/wp-content/uploads/2015/07/home-banner2.jpg', 'Surrey'),
(16, 'Kuber Taxi Service', '12815 85 Ave Unit 209, Surrey, BC V3W 0K8', '(778) 565-8294', 'https://kubertaxi.ca/', 'https://img1.wsimg.com/isteam/ip/ea917ae1-d6ee-4b80-a099-b1b4a38b21ac/3e18a415-35c5-464d-a832-fc96adef8f2c.JPG/:/rs=w:2600,h:1600', 'Surrey'),
(17, 'Delta Surrey Green Cab', '13425 71a Ave, Surrey, BC V3W 2L2', '(604) 594-1111', 'https://www.deltasurreygreencab.ca/', 'https://www.deltasurreygreencab.ca/uploads/Vd9D5oV6/zpcj04pomg-5668abe2-6ff3-7f59-5420-a2e0a7b26dd5.jpg', 'Surrey'),
(18, 'Surdell Taxi', '8128 128 St #286, Surrey, BC V3W 1R1', '(604) 588-8888', 'http://surdelltaxi.com/', 'https://live.staticflickr.com/8148/7576376394_72c1199865_b.jpg', 'Surrey'),
(19, 'Topsuit Services', '10187 143 St, Surrey, BC V3T 4T2', '(604) 789-0833', 'No Website Available', 'https://s3.amazonaws.com/up.411.ca/base/211aa54771330b8b3ffa3eac08ab4daf.jpg', 'Surrey');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Taxis`
--
ALTER TABLE `Taxis`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Taxis`
--
ALTER TABLE `Taxis`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
