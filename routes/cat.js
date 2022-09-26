const router = require ('express').Router();
const controller = require('../Controller/cat');
const {saveFile} = require('../Utils/gallery.js')

router.get('/',controller.all);
router.post('/',[saveFile,controller.add]);

module.exports = router;