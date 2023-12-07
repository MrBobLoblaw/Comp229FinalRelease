// server/controllers/surveyController.js
const Survey = require('../models/survey');

exports.createSurvey = async (req, res) => {
  try {
    const { schoolName, onlineClassesRating, inPersonClassesRating, productivityRating } = req.body;
    const newSurvey = await Survey.create({
      schoolName,
      onlineClassesRating,
      inPersonClassesRating,
      productivityRating,
    });
    res.status(201).json(newSurvey);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getSurvey = async (req, res) => {
  try {
    const survey = await Survey.findById(req.params.id);
    if (!survey) {
      return res.status(404).json({ error: 'Survey not found' });
    }
    res.status(200).json(survey);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateSurvey = async (req, res) => {
  try {
    const { schoolName, onlineClassesRating, inPersonClassesRating, productivityRating } = req.body;
    const updatedSurvey = await Survey.findByIdAndUpdate(
      req.params.id,
      {
        schoolName,
        onlineClassesRating,
        inPersonClassesRating,
        productivityRating,
      },
      { new: true }
    );
    if (!updatedSurvey) {
      return res.status(404).json({ error: 'Survey not found' });
    }
    res.status(200).json(updatedSurvey);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteSurvey = async (req, res) => {
  try {
    const deletedSurvey = await Survey.findByIdAndDelete(req.params.id);
    if (!deletedSurvey) {
      return res.status(404).json({ error: 'Survey not found' });
    }
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
