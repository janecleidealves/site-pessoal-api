const express = require('express');

const portfolioController = require('../controllers/portfolioController');

const router = express.Router();


router.get ('/', portfolioController.getAllPortfolio);
router.get('/:id', portfolioController.getPortfolioById)
router.post('/', portfolioController.createPortfolio)
router.put('/:id', portfolioController.updatePortfolio)
router.delete ('/:id',portfolioController.deletePortfolio)

module.exports = router;