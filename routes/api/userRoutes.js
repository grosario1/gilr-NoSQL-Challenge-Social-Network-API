const router = require('express').Router();
const {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// Get all users
router.route('/').get(getAllUsers);

// Get a single user by ID
router.route('/:userId').get(getSingleUser);

// Create a new user
router.route('/').post(createUser);

// Update user information
router.route('/:userId').put(updateUser);

// Delete a user
router.route('/:userId').delete(deleteUser);

// Add a friend to the user's friend list
router.route('/:userId/friends/:friendId').post(addFriend);

// Remove a friend from the user's friend list
router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;