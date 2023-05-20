const express = require('express');
const router = express.Router();

const movies_controller = require('../controler/movies');

router.get('/', movies_controller.index);
router.get('/tambah', movies_controller.tambah);
router.post('/create', movies_controller.store);
router.get('/:id', movies_controller.movies_details);
router.post('/:id/update', movies_controller.update);
router.post('/:id/destroy', movies_controller.destroy);
module.exports = router;