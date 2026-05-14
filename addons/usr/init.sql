-- Drop table if it already exists to prevent errors during initialization
DROP TABLE IF EXISTS users;

-- Create users table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    nickname VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    last_login TIMESTAMP NULL,
    status ENUM('ACTIVE', 'SUSPENDED') DEFAULT 'ACTIVE' NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL,
    deleted_at TIMESTAMP NULL
);

-- Create dummy data
INSERT INTO users (id, name, email, nickname, password, last_login, status, created_at, updated_at, deleted_at) VALUES
-- Case 1: Normal active user
(1, 'nnxi', 'nnxi@test.com', 'nnxi', '$2b$10$OA0Kkpc9qq0GmzGqaraH0ugLEkE4kaTMTgj3iAqKL21iVKjfimlH2', NULL, 'ACTIVE', '2026-04-25 20:20:18', '2026-04-25 20:20:18', NULL),
-- Case 2: Normal active user
(2, 'test1', 'test1@test.com', 'test1', '$2b$10$OMh5WiX9IVN5SCNa.wYhWuWL2AR6jPOmwVGL2aENAAWr/czJg5/za', NULL, 'ACTIVE', '2026-04-25 20:25:02', '2026-04-25 20:25:02', NULL),
-- Case 3: Suspended user
(3, 'test2', 'test2@test.com', 'test2', '$2b$10$WBMmbGgpLYSXVvpQlTjQkeYHunuAIvzHG1tu/OhsMv9trhyzRPHIO', NULL, 'SUSPENDED', '2026-04-25 20:25:14', '2026-04-25 20:25:14', NULL),
-- Case 4: Withdrawn user (status remains ACTIVE but soft-deleted)
(4, 'test3', 'test3@test.com', 'test3', '$2b$10$QAlpKjHEFQty/mrcMuzHX.yl1xPDFgWhiIZDC3q24Bnn4pEJKtRzG', NULL, 'ACTIVE', '2026-04-25 20:25:26', '2026-04-25 20:25:26', '2026-04-26 10:00:00'),
-- Case 5: Suspended and withdrawn user
(5, 'test4', 'test4@test.com', 'test4', '$2b$10$pAdIt1VVi8GQ01Kq6x/96uIa2z7F3AGMpDSzWWZcpWanFayXlnnf2', NULL, 'SUSPENDED', '2026-04-25 20:25:37', '2026-04-25 20:25:37', '2026-04-26 10:00:00');