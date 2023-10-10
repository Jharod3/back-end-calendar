//  Event Routes
//  /api/events
const {Router} = require('express');
const { check } = require('express-validator');
const { isDate } = require('../helpers/isDate');
const {validarJWT} = require('../middlewares/validar-jwt')
const { validarCampos } = require('../middlewares/validar-campos');
const {getEventos, crearEvento, actualizarEvento, eliminarEvento} = require('../controllers/events')

const router = Router();

//todas tienen la validación del token
router.use(validarJWT);

//obtener eventos 
router.get('/' ,getEventos)

//crear nuevo evento
router.post('/',
    [
        check('title','El titulo es obligatorio').not().isEmpty(),
        check('start','Fecha de inicio es obligatoria').custom( isDate ),
        check('end','Fecha de finalización es obligatoria').custom( isDate ),
        validarCampos
    ]
 ,crearEvento)

//atualizar evento 
router.put('/:id',
    [
        check('title','El titulo es obligatorio').not().isEmpty(),
        check('start','Fecha de inicio es obligatoria').custom( isDate ),
        check('end','Fecha de finalización es obligatoria').custom( isDate ),
        validarCampos
    ]
 ,actualizarEvento)

//borrar evento 
router.delete('/:id' , eliminarEvento)

module.exports = router;