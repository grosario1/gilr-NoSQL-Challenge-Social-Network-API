const { Schema, model, Types } = require('mongoose');
const dateFormat = require("../utils/dateFormat");

// Define the schema for reactions
const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280, // Reaction text should not exceed 280 characters
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// Define the schema for thoughts
const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: "Thought is Required",
      minlength: 1, // Minimum length of a thought
      maxlength: 280, // Maximum length of a thought
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [ReactionSchema], // An array of nested reaction documents
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// Virtual property to calculate the count of reactions on a thought
ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// Create the Thought model using the ThoughtSchema
const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;