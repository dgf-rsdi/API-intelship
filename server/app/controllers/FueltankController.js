const { FuelTankType } = require("../models/index");

class FueltankController {
  static async getFueltankTypes(req, res, next) {
    try {
      const fuelType = await FuelTankType.findAll();
      res.status(200).json(fuelType);
    } catch (err) {
      next(err);
    }
  }

  static async deleteFueltank(req, res, next) {
    try {
      const { id } = req.params;
      FuelTankType.destroy({ where: { id } })
      res.status(200).json({ message: "Fueltank type delete success" });
    } catch (err) {
      next(err);
    }
  }
  
  static async fueltankById(req, res) {
      let { id } = req.params;
      FuelTankType.findByPk(id)
      .then((fueltankById) => {
        res.status(200).json(fueltankById);
      })
      .catch((err) => {
        console.log(err);
        res.status(404).json({ message: `${id} not found` });
      });
  }

  static async addFueltank(req, res, next) {
    try {
      const { type, sounding, capacity } = req.body;
      const fueltank = await FuelTankType.create({
        type,
        sounding,
        capacity,
      });
      res
        .status(201)
        .json({ message: `${fueltank.type} has been created` });
    } catch (err) {
      next(err);
    }
  }

  static async editFueltankById(req, res, next) {
    try {
      let fueltank = await FuelTankType.findByPk(req.params.id);
      if (!fueltank) {
        throw {
          code: 400,
          name: "Bad Request",
          message: `fueltank id ${req.params.id} not found`,
        };
      } else {
        let { type, sounding, capacity } = req.body;
        let update = await FuelTankType.update({   
          type,
          sounding,
          capacity,
          },
          {
            where: {
              id: req.params.id,
            },
          }
        );
        res.status(200).json(update);
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = FueltankController;