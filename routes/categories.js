const express = require("express");
const router = express.Router();
const sequelize = require("../db");
const permission = require("../middlewares/permission");

router.get("/", permission("admin"), async (req, res) => {
  const categories = await sequelize.models.categories.findAndCountAll();
  return res.status(200).json({ data: categories });
});

router.post("/", permission("admin"), async (req, res) => {
  const { body } = req;
  const category = await sequelize.models.categories.create({
    
  });
  await category.save();
  return res.status(201).json({ data: category });
});


router.put('/:id', permission('admin'), async (req, res) => {
    const { body, params: { id } } = req;
    const category = await sequelize.models.categories.findByPk(id);
    if (!category) {
      return res.status(404).json({ code: 404, message: 'category not found' });
    }
    const updatedCategory = await category.update({
      userId: body.userId,
      productId: body.productId,
      quantity: body.quantity,
    });
    return res.json({ data: updatedCategory });
  });
  
  // Delete a category by id
  router.delete('/:id', permission('admin'), async (req, res) => {
    const { params: { id } } = req;
    const category = await sequelize.models.categories.findByPk(id);
    if (!category) {
      return res.status(404).json({ code: 404, message: 'category not found' });
    }
    await category.destroy();
    return res.json();
  });
  
  module.exports = router;