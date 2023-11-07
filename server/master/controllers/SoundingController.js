const { Sounding } = require("../models");

class SoundingController {
  static async addSounding(req, res, next) {
    try {
      const { sounding, capacity, tankId } = req.body;
      await Sounding.create({
        sounding,
        capacity,
        tankId,
      });
      res.status(201).json({ message: `Sounding has been created` });
    } catch (err) {
      next(err);
    }
  }

  static async editSounding(req, res, next) {
    try {
      const { id } = req.params;
      let editSounding = await Sounding.findByPk(id);
      if (!editSounding) {
        throw {
          code: 400,
          name: "Bad Request",
          message: `sounding id ${req.params.id} not found`,
        };
      } else {
        let { sounding, capacity, tankId } = req.body;
        await Sounding.update(
          {
            sounding,
            capacity,
            tankId,
          },
          {
            where: {
              id,
            },
          }
        );
        res.status(200).json({ message: "Sounding update success" });
      }
    } catch (err) {
      next(err);
    }
  }

  static async getSounding(req, res, next) {
    try {
      const sounding = await Sounding.findAll();
      res.status(200).json(sounding);
    } catch (err) {
      next(err);
    }
  }

  static async deleteSounding(req, res, next) {
    try {
      const { id } = req.params;
      Sounding.destroy({ where: { id } });
      res.status(200).json({ message: "Sounding delete success" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = SoundingController;
