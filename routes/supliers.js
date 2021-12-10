const express = require("express");
const router = express.Router();
const sequelize = require("../db");
const permission = require("../middlewares/permission");

router.get("/", permission("admin"), async (req, res) => {
  const supliers = await sequelize.models.supliers.findAndCountAll();
  return res.status(200).json({ data: supliers });
});

router.post("/", permission("admin"), async (req, res) => {
  const { body } = req;
  const suplier = await sequelize.models.supliers.create({
    
  });
  await suplier.save();
  return res.status(201).json({ data: suplier });
});


router.put('/:id', permission('admin'), async (req, res) => {
    const { body, params: { id } } = req;
    const suplier = await sequelize.models.supliers.findByPk(id);
    if (!suplier) {
      return res.status(404).json({ code: 404, message: 'suplier not found' });
    }
    const updatedSuplier = await suplier.update({
      userId: body.userId,
      productId: body.productId,
      quantity: body.quantity,
    });
    return res.json({ data: updatedSuplier });
  });
  
  // Delete a suplier by id
  router.delete('/:id', permission('admin'), async (req, res) => {
    const { params: { id } } = req;
    const suplier = await sequelize.models.supliers.findByPk(id);
    if (!suplier) {
      return res.status(404).json({ code: 404, message: 'suplier not found' });
    }
    await suplier.destroy();
    return res.json();
  });
  
  module.exports = router;