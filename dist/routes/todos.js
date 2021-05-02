"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_1 = require("../controller/todos");
const todos_2 = require("../controller/todos");
const todos_3 = require("../controller/todos");
const router = express_1.Router();
router.post("/", todos_1.createTodo);
router.get("/", todos_2.getTodos);
router.patch("/:id", todos_3.updateTodo);
exports.default = router;
