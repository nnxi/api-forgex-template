import pool from '../../config/database.js';

const findById = async (id) => {
    const query = 'SELECT id, nickname, status FROM users WHERE id = ?';
    const [rows] = await pool.execute(query, [id]);
    return rows[0];
};

const findByEmail = async (email) => {
    const query = 'SELECT id FROM users WHERE email = ?';
    const [rows] = await pool.execute(query, [email]);
    return rows[0];
};

const findByNickname = async (nickname) => {
    const query = 'SELECT id FROM users WHERE nickname = ?';
    const [rows] = await pool.execute(query, [nickname]);
    return rows[0];
};

const insert = async (name, email, nickname, hashedPassword) => {
    const query = 'INSERT INTO users (name, email, nickname, password) VALUES (?, ?, ?, ?)';
    const [result] = await pool.execute(query, [name, email, nickname, hashedPassword]);
    return result.insertId;
};

const updateLastLogin = async (id) => {
    const query = 'UPDATE users SET last_login = NOW() WHERE id = ?';
    await pool.execute(query, [id]);
};

export { 
    findById, 
    findByEmail, 
    findByNickname, 
    insert, 
    updateLastLogin 
};