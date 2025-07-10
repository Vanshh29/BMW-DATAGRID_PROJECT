const mongoose = require('mongoose');
const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
const Data = require('./models/DataModel');
const connectDB = require('./config/db');

connectDB();

const seedData = [];

fs.createReadStream(path.join(__dirname, 'data.csv'))
  .pipe(csv())
  .on('data', (row) => seedData.push(row))
  .on('end', async () => {
    try {
      await Data.deleteMany({});
      await Data.insertMany(seedData);
      console.log('Data seeded successfully!');
    } catch (err) {
      console.error('Seeding failed:', err);
    } finally {
      mongoose.connection.close();
    }
  });
