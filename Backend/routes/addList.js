const router = require("express").Router();
const List = require("../models/list");
const User = require("../models/user");

// Add a new task to a user's list
router.post("/addTask", async (req, res) => {
  try {
    const { userId, email, title, description } = req.body;
    const query = userId ? { _id: userId } : { email };
    const existingUser = await User.findOne(query);
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }
    const newList = new List({ title, description, user: existingUser._id });
    const savedList = await newList.save();
    existingUser.lists.push(savedList._id);
    await existingUser.save();
    res
      .status(201)
      .json({ message: "Task added successfully", list: savedList });
  } catch (error) {
    console.error("Error adding task:", error);
    res.status(500).json({ message: "Server error" });
  }
});

//upate
router.put("/updateTask/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;
    const update = {};
    if (title !== undefined) update.title = title;
    if (description !== undefined) update.description = description;
    if (status !== undefined) update.status = status;

    const updatedList = await List.findByIdAndUpdate(id, update, { new: true });
    if (!updatedList) {
      return res.status(404).json({ message: "Task not found" });
    }
    res
      .status(200)
      .json({ message: "Task updated successfully", list: updatedList });
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ message: "Server error" });
  }
});

//delete task
router.delete("/deleteTask/:id", async (req, res) => {
  try {
    const { userId, email } = req.body;
    const query = userId ? { _id: userId } : { email };
    const existingUser = await User.findOneAndUpdate(query, {
      $pull: { lists: req.params.id },
    });
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }
    const { id } = req.params;
    await List.findByIdAndDelete(id).then(() => {
      res.status(200).json({ message: "Task deleted successfully" });
    });
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ message: "Server error" });
  }
});

//retrieve tasks
router.get("/getTasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const lists = await List.find({ user: id }).sort({ createdAt: -1 });
    res.status(200).json({ lists });
  } catch (error) {
    console.error("Error retrieving tasks:", error);
    res.status(500).json({ message: "Server error" });
  }
});
module.exports = router;
