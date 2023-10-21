const router = require('express').Router();
const {
  getAllThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

// Get all thoughts
router.route('/').get(getAllThoughts);

// Get a single thought by ID
router.route('/:thoughtId').get(getSingleThought);

// Create a new thought
router.route('/').post(createThought);

// Update thought information
router.route('/:thoughtId').put(updateThought);

// Delete a thought
router.route('/:thoughtId').delete(deleteThought);

// Create a reaction for a thought
router.route('/:thoughtId/reactions').post(createReaction);

// Delete a reaction from a thought
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;
