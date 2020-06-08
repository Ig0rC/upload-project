"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _project = require("../controllers/project.controller");

var router = (0, _express.Router)();
// api/projects/
router.post('/', _project.createProject);
router.get('/', _project.getProjects); // api/project/: projectID

router.get('/:id', _project.getOneProject); //buscar One.

router["delete"]('/:id', _project.deleteProject); //DEletar ID

router.put('/:id', _project.updtateProject); // atualizar ID

var _default = router;
exports["default"] = _default;