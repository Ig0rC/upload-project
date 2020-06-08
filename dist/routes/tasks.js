"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _task = require("../controllers/task.controller");

var router = (0, _express.Router)();
// /api/tasks
router.post('/', _task.createTask);
router.get('/', _task.getTasks);
router.get('/:id', _task.getOneTask);
router["delete"]('/:id', _task.deleteTask);
router.put('/:id', _task.updateTask); // buscar especializada

router.get('/project/:projectid', _task.getTasksByProject);
var _default = router;
exports["default"] = _default;