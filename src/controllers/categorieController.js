const { categorieService } = require('../services/categorieService');

const addNewCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required' });
  const newCategory = await categorieService.addNewCategory(req.body);
  res.status(201).json(newCategory);
};

module.exports = { addNewCategory };