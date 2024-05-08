const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

// Create MySQL connection
const connection = mysql.createConnection({
 host: 'localhost',
 user: 'root',
 password: '',
 database: 'image_db'
});


connection.connect();


// Endpoint to handle image upload
app.post('/upload', (req, res) => {
 const imageData = req.body.imageData;
 // Insert imageData into MySQL database
 connection.query('INSERT INTO images (data) VALUES (?)', [imageData], (error, results, fields) => {
   if (error) throw error;
   res.status(200).send('Image uploaded successfully');
 });
});


// Endpoint to retrieve image by ID
app.get('/images/:id', (req, res) => {
 const imageId = req.params.id;
 connection.query('SELECT data FROM images WHERE id = ?', [imageId], (error, results, fields) => {
   if (error) throw error;
   if (results.length > 0) {
     const imageData = results[0].data;
     res.status(200).send(imageData);
   } else {
     res.status(404).send('Image not found');
   }
 });
});

// Endpoint to retrieve all images
app.get('/images', (req, res) => {
  connection.query('SELECT * FROM images', (error, results, fields) => {
    if (error) throw error;
    res.status(200).json({ imageData: results });
  });
});

app.listen(port, () => {
 console.log(`Server is running on port ${port}`);
});