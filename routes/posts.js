const express = require("express");
const router = express.Router();
const sequelize = require("../db");
const permission = require("../middlewares/permission");

router.get("/", permission("admin"), async (req, res) => {
  const posts = await sequelize.models.posts.findAndCountAll();
  return res.status(200).json({ data: posts });
});

router.post("/", permission("admin"), async (req, res) => {
  const { body } = req;
  const post = await sequelize.models.posts.create({
    
  });
  await post.save();
  return res.status(201).json({ data: post });
});


router.put('/:id', permission('admin'), async (req, res) => {
    const { body, params: { id } } = req;
    const post = await sequelize.models.posts.findByPk(id);
    if (!post) {
      return res.status(404).json({ code: 404, message: 'post not found' });
    }
    const updatedPost = await post.update({
      userId: body.userId,
      productId: body.productId,
      quantity: body.quantity,
    });
    return res.json({ data: updatedPost });
  });
  
  // Delete a post by id
  router.delete('/:id', permission('admin'), async (req, res) => {
    const { params: { id } } = req;
    const post = await sequelize.models.posts.findByPk(id);
    if (!post) {
      return res.status(404).json({ code: 404, message: 'post not found' });
    }
    await post.destroy();
    return res.json();
  });
  
  module.exports = router;