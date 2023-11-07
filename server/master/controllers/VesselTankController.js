const { VesselTank } = require("../models");
const { Sounding } = require("../models");

class VesselTankController {
  static async addVesselTank(req, res, next) {
    try {
      const { vesselId, tankName, ZP, Z1P, ZL, Y, Y1P, Y1L, KL, KP } = req.body;
      const vesselTank = await VesselTank.create({
        vesselId,
        tankName,
        ZP,
        Z1P,
        ZL,
        Y,
        Y1P,
        Y1L,
        KL,
        KP,
      });
      res
        .status(201)
        .json({ message: `${vesselTank.tankName} has been created` });
    } catch (err) {
      next(err);
    }
  }

  static async editVesselTank(req, res, next) {
    try {
      const { id } = req.params;
      let vesselTank = await VesselTank.findByPk(id);
      if (!vesselTank) {
        throw {
          code: 400,
          name: "Bad Request",
          message: `vessel tank id ${req.params.id} not found`,
        };
      } else {
        let { vesselId, tankName, ZP, Z1P, ZL, Y, Y1P, Y1L, KL, KP } = req.body;
        await VesselTank.update(
          {
            vesselId,
            tankName,
            ZP,
            Z1P,
            ZL,
            Y,
            Y1P,
            Y1L,
            KL,
            KP,
          },
          {
            where: {
              id,
            },
          }
        );
        res.status(200).json({ message: "Vessel Tank update success" });
      }
    } catch (err) {
      next(err);
    }
  }

  static async getVesselTank(req, res, next) {
    try {
      const vesselTank = await VesselTank.findAll({
        include: [
          {
            model: Sounding,
          },
        ],
      });
      res.status(200).json(vesselTank);
    } catch (err) {
      next(err);
    }
  }

  static async deleteVesselTank(req, res, next) {
    try {
      const { id } = req.params;
      VesselTank.destroy({ where: { id } });
      res.status(200).json({ message: "Vessel Tank delete success" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = VesselTankController;
