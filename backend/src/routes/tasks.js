const express = require('express');
const router = express.Router();

let tasks = [
  { id: 1, title: 'Task 1', description: 'Description for Task 1' },
  { id: 2, title: 'Task 2', description: 'Description for Task 2' },
];

function validateTask(req, res, next) {
  const taskId = parseInt(req.params.id);
  const task = tasks.find((t) => t.id === taskId);
  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }
  req.task = task;
  next();
}

router.get('/', (req, res) => {
  res.json(tasks);
});

router.get('/:id', validateTask, (req, res) => {
  res.json(req.task);
});

router.post('/', (req, res) => {
  const { title, description } = req.body;
  console.log(title,description)
  if (!title || !description) {
    return res.status(400).json({ message: 'Title and description are required' });
  }
  const newTask = {
    id: tasks.length + 1,
    title,
    description,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

router.put('/:id', validateTask, (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ message: 'Title and description are required' });
  }
  req.task.title = title;
  req.task.description = description;
  res.json(req.task);
});

router.delete('/:id', validateTask, (req, res) => {
  tasks = tasks.filter((t) => t.id !== req.task.id);
  res.json({ message: 'Task deleted' });
});

module.exports = router;
