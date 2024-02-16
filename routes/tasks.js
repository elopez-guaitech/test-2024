/*
    path: /api/tasks
*/

const { Router } = require('express');
const { getTasks, completedTask, createTask } = require('../controller/tasks');
const { check } = require('express-validator');

const router = Router();

router.get('/', getTasks);

router.put('/:id', [
    check("isCompleted", "El estado completado es obligatorio").not().isEmpty()
], completedTask)

router.post('/', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('desc', 'La descripción es obligatoria').not().isEmpty()
], createTask)

module.exports = router;