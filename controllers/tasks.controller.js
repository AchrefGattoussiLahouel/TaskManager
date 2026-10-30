import Task from "../models/Tasks.js";
import NotFoundError from "../errors/not_found_err.js";



const getalltasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    if (!tasks) {
      const not_found_error = new NotFoundError("No tasks found");
      return res.status(not_found_error.statusCode).json({ error: not_found_error.message });
    }
    res.status(200).json({ data: tasks });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const gettaskbyid = async (req, res) => {
  try {
    console.log("id:", req.params.id);
    const task = await Task.findById(req.params.id);
    if (!task) {
      const not_found_error = new NotFoundError("Task not found");
      return res.status(not_found_error.statusCode).json({ error: not_found_error.message });
    }
    res.status(200).json({ data: task });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const inserttask = async (req, res) => {
  try {
    console.log("req.body: ", req.body);
    const newTask = await Task.insertOne(req.body);
    res.status(201).json({ data: newTask });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const updatetask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
      runValidators: true,
    });
    if (!task) {
      const not_found_error = new NotFoundError("Task not found");
      return res.status(not_found_error.statusCode).json({ error: not_found_error.message });
    }
    res.status(200).json({ data: task });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deletetask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.status(204).send();
};
const TaskController = {
  getalltasks,
  gettaskbyid,
  inserttask,
  updatetask,
  deletetask,
};
export default TaskController;
