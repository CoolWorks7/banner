const express = require('express')
const sqlite3 = require('sqlite3').verbose()
const cors = require('cors')

let corsOptions = {
    origin : ['http://localhost:3001', 'https://banner-satya.netlify.app'],
}

const app = express()
app.use(express.json())
app.use(cors(corsOptions))

// Initialize SQLite database
const db = new sqlite3.Database('./banner.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE);

// Creating the banner Table to store the content
db.run(`CREATE TABLE IF NOT EXISTS BannerDetails (
    id INTEGER PRIMARY KEY,
    isVisible BOOLEAN,
    description TEXT,
    hour INTEGER,
    minute INTEGER,
    second INTEGER,
    colorId INTEGER
)`)

// Insert initial Banner Details if the table is empty
db.get(`SELECT COUNT(*) as count FROM BannerDetails`, (error, row) => {
    if (error) { console.error(error.message);
    } else if (row.count === 0) {
        db.run(`INSERT INTO BannerDetails (isVisible, description, hour, minute, second, colorId) VALUES (?, ?, ?, ?, ?, ?)`, [true, 'Hello Satyaprakash Here!', 0, 0, 60, 1])
    }
});


// api routes
app.get('/api/banner', (req, res) => {
    db.get(`SELECT isVisible, description, hour, minute, second, colorId FROM BannerDetails WHERE id = 1`, (error, row) => {
        if (error) res.json({error: error.message})
        res.json(row)        
    })
})

app.post('/api/banner/update', (req, res) => {
    const {isVisible, description, timer, colorId} = req.body
    
    db.run(`
        UPDATE BannerDetails
        SET isVisible = ?, description = ?, hour = ?, minute = ?, second = ?, colorId = ?
        WHERE id = 1` , 
        [isVisible, description, timer.h, timer.m, timer.s, colorId]
    )
    res.json({success: "Banner Updated Successfully!"})
})

// app.post('/api/banner/update/isVisible', (req, res) => {
//     const {isVisible} = req.body
//     db.run(`
//         UPDATE BannerDetails
//         SET isVisible = ?
//         WHERE id = 1`, 
//         [isVisible]
//     )
// })

app.listen(3000)