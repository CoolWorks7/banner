const express = require('express')
const sqlite3 = require('sqlite3').verbose()
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

// Initialize SQLite database
const db = new sqlite3.Database('./banner.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE);

// Creating the banner Table to store the content
db.run(`CREATE TABLE IF NOT EXISTS BannerDetails (
    id INTEGER PRIMARY KEY,
    isVisible BOOLEAN,
    description TEXT,
    timer TEXT
)`)

// Insert initial Banner Details if the table is empty
db.get(`SELECT COUNT(*) as count FROM BannerDetails`, (error, row) => {
    if (error) { console.error(error.message);
    } else if (row.count === 0) {
        db.run(`INSERT INTO BannerDetails (isVisible, description, timer) VALUES (?, ?, ?)`, [true, 'Hello Satyaprakash Here!', 60]);
    }
});


// api routes
app.get('/api/banner', (req, res) => {
    db.get(`SELECT isVisible, description, timer FROM BannerDetails WHERE id = 1`, (error, row) => {
        if (error) res.json({error: error.message})
        // console.log(res.json(row));   
    });
})

app.post('/api/banner/update', (req, res) => {
    const {isVisible, description, timer} = req.body
    db.run(`
        UPDATE BannerDetails
        SET isVisible = ?, description = ?, timer = ? 
        WHERE id = 1` , 
        [isVisible, description, timer]
    )
})

app.post('/api/banner/update/isVisible', (req, res) => {
    const {isVisible} = req.body
    db.run(`
        UPDATE BannerDetails
        SET isVisible = ?
        WHERE id = 1` , 
        [isVisible]
    )
})

app.listen(3000)