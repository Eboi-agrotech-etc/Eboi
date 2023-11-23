const marcas = require('../models/marcas');

class MarcasController {
  // Cria uma nova marca
  async createMarca(brinco, corpo, idproprietario) {
    try {
      const marca = await marcas.create({brinco: brinco, corpo: corpo, idproprietario: idproprietario ?? 0});
      return marca;
    } catch (err) {
      console.error(err);
    }
  }

  // Retorna todas as marcas
  async listMarcas() {
    try {
      const marca = await marcas.findAll();
      marca.forEach(marca => {
        marca.corpo = marca.corpo.toString();
        marca.brinco = marca.brinco.toString();
      });
      return marca;
    } catch (err) {
      console.error(err);
    }
  }

  async getMarca(id) {
    try {
      const marca = await marcas.findByPk(id);
      marca.corpo = marca.corpo.toString();
      marca.brinco = marca.brinco.toString();
      return marca;
    } catch (err) {
      console.error(err);
    }
  }

  // Atualiza a marca com o id passado
  async updateMarca(req, res) {
    try {
      const marca = await marcas.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      return res.status(200).json(marca);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  // Deleta a marca com o id passado
  async deleteMarca(id) {
    try {
      const marca = await marcas.destroy({
        where: {
          id: id,
        },
      });
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new MarcasController();