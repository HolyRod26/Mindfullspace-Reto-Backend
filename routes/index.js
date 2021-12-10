const express = require('express'),
    router = express.Router();
    
const authenticate = require('../middlewares/authentication');

router.use('/auth', authenticate, require('./auth'));
router.use('/categories', authenticate, require('./categories'));
router.use('/orders', authenticate, require('./orders'));
router.use('/posts', authenticate, require('./posts'));
router.use('/products', authenticate, require('./products'));
router.use('/supliers', authenticate, require('./supliers'));
router.use('/users', authenticate, require('./users'));

module.exports = router;