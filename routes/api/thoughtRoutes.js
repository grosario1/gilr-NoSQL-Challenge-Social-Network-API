const router = require('express').Router();

// Import functions from thoughtController.js
const {
    getAllThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtCtlr');

// Route for handling all thoughts: GET all and POST a new thought
router.route('/').get(getAllThoughts).post(createThought);

// Route for handling a single thought by ID: GET one thought, UPDATE, and DELETE by ID
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// Route for adding a new reaction to a thought
router.route('/:thoughtId/reactions').post(createReaction);

// Route for deleting a reaction from a thought by its ID
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

// Exports the router for use in the application
module.exports = router;

