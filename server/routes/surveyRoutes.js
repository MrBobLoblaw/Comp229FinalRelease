// server/routes/surveyRoutes.js
const express = require('express');
const router = express.Router();
const surveyController = require('../controllers/surveyController');

// Survey routes
router.post('/surveys', surveyController.createSurvey);
router.get('/surveys/:id', surveyController.getSurvey);
router.put('/surveys/:id', surveyController.updateSurvey);
router.delete('/surveys/:id', surveyController.deleteSurvey);

module.exports = router;

