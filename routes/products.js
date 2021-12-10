const express = require("express");
const router = express.Router();
const sequelize = require("../db");
const permission = require("../middlewares/permission");

router.get("/", permission("admin"), async (req, res) => {
  const products = await sequelize.models.products.findAndCountAll();
  return res.status(200).json({ data: products });
});

router.post("/", permission("admin"), async (req, res) => {
  const { body } = req;
  const product = await sequelize.models.products.create({
    
  });
  await product.save();
  return res.status(201).json({ data: product });
});


router.put('/:id', permission('admin'), async (req, res) => {
    const { body, params: { id } } = req;
    const product = await sequelize.models.products.findByPk(id);
    if (!product) {
      return res.status(404).json({ code: 404, message: 'product not found' });
    }
    const updatedProduct = await product.update({
      userId: body.userId,
      productId: body.productId,
      quantity: body.quantity,
    });
    return res.json({ data: updatedProduct });
  });
  
  // Delete a product by id
  router.delete('/:id', permission('admin'), async (req, res) => {
    const { params: { id } } = req;
    const product = await sequelize.models.products.findByPk(id);
    if (!product) {
      return res.status(404).json({ code: 404, message: 'product not found' });
    }
    await product.destroy();
    return res.json();
  });
  
  module.exports = router;