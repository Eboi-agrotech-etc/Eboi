import marcas from '../models/marcas.model.js';

class MarcasController {
  // Cria uma nova marca
  async createMarca(req, res) {
    try {
      const marca = await marcas.create(req.body);
      return res.status(200).json(marca);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  // Retorna todas as marcas
  async listMarcas(req, res) {
    try {
      const marca = await marcas.findAll();
      return res.status(200).json(marca);
    } catch (err) {
      return res.status(500).json(err);
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
  async deleteMarca(req, res) {
    try {
      const marca = await marcas.destroy({
        where: {
          id: req.params.id,
        },
      });
      return res.status(200).json(marca);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}