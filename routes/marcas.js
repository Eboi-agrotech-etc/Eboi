var express = require('express');
var router = express.Router();
const multer  = require('multer');
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

const MarcasController = require('../controllers/marcas.controller');

const DatauriParser = require('datauri/parser');
const parser = new DatauriParser();

/* Home */
router.get('/', async (req, res) => {
    res.render('marcas', {
        title: 'Home',
        marcas: await MarcasController.listMarcas(),
    });
});

router.get('/new', function(req, res, next) {
    res.render('insert', { title: 'Nova Marca' });
});

const marcasUpload = upload.fields([{ name: 'brinco', maxCount: 1 }, { name: 'corpo', maxCount: 1 }])
router.post('/new', marcasUpload, async (req, res) => {
    try {
        const brinco = parser.format(req.files.brinco[0].originalname, req.files.brinco[0].buffer).content;
        const corpo = parser.format(req.files.corpo[0].originalname, req.files.corpo[0].buffer).content;
        const marca = await MarcasController.createMarca(brinco, corpo, req.body.idproprietario);
        console.log(marca);

        return res.redirect('/marcas');
    } catch (err) {
        console.error(err);
        return res.status(500).json(err);
    }
});

router.get('/:id', async (req, res, next) => {
    const marca = await MarcasController.getMarca(req.params.id);
    if (marca === undefined) {
        return res.render('error', {
            title: 'Erro',
            message: 'Marca não encontrada',
            error: {
                status: 404,
                stack: 'Marca não encontrada',
            }
        });
    }

    res.render('marca', {
        title: 'Mostrar Marca',
        marca: {
            id: marca.id,
            proprietario: '',
            estado: marca.estado, 
            brinco: marca.brinco,
            corpo: marca.corpo,
            data_solicitacao: '',
            data_aprovação: '',
            aprovado: '',
            assinado: '' 
        }
    });
});

router.get('/delete/:id', async (req, res) => {
    let id = req.params.id;
    await MarcasController.deleteMarca(id);
    return res.redirect('/marcas');
});

module.exports = router;