// backend/controllers/dataController.js
const Data = require('../models/DataModel');

exports.getData = async (req, res) => {
  const { search, filterField, filterValue } = req.query;

  let query = {};

  if (search) {
    query.$text = { $search: search };
  }

  if (filterField && filterValue) {
    query[filterField] = filterValue;
  }

  try {
    const data = await Data.find(query).limit(100);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getDataById = async (req, res) => {
  try {
    const data = await Data.findById(req.params.id);
    if (!data) return res.status(404).json({ error: 'Data not found' });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteData = async (req, res) => {
  try {
    await Data.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
