const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({}, { strict: false });
DataSchema.index({ '$**': 'text' }); // Full-text search

module.exports = mongoose.model('Data', DataSchema);
