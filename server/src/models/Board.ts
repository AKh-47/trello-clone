import mongoose from "mongoose";

const listItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  lastEditedAt: {
    type: Date,
  },
  // lastEditedBy: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  // },
});

const listSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  lastEditedAt: {
    type: Date,
  },
  // lastEditedBy: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  // },
  // createdBy: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  // },
  listItems: {
    type: [listItemSchema],
    default: [],
  },
});

const boardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // owner: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  // },
  // githubLink: {
  //   type: String,
  //   required: true,
  // },
  // completed: {
  //   type: Boolean,
  //   default: false,
  // },
  // completedAt: {
  //   type: Date,
  // },
  lastEditedAt: {
    type: Date,
  },
  // lastEditedBy: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  // },
  lists: {
    type: [listSchema],
    default: [],
  },
  private: {
    type: Boolean,
    default: false,
  },
  // collaborators: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

export default mongoose.model<any>("Board", boardSchema);
