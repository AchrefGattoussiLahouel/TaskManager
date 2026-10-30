import Task from "../models/Tasks.js";




const getalltasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    if (!tasks) {
      return res.status(404).json({ error: "Pas de tâches" });
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
      return res.status(404).json({ error: "Tâche introuvable" });
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
      return res.status(404).json({ error: "Tâche introuvable" });
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
