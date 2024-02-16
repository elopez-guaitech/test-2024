/*
    path: /api/tasks
*/

const { Router } = require('express');
const { getTasks } = require('../controller/tasks');

const router = Router();

router.get('/', getTasks);

module.exports = router;