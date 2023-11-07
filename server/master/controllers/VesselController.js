const { Vessel } = require("../models");
const { VesselTank } = require("../models");

class VesselController {
  static async addVessel(req, res, next) {
    try {
      const {
        name,
        vesselNumber,
        phone,
        imei,
        productionYear,
        deviceid,
        fueltank1,
        fueltank2,
        fueltank3,
        fueltank4,
        fueltank5,
        fueltank6,
        fueltank7,
        fueltank8,
        RPM1,
        RPM2,
        DFM1,
        DFM2,
        companyId,
      } = req.body;
      const vessel = await Vessel.create({
        name,
        vesselNumber,
        phone,
        imei,
        productionYear,
        deviceid,
        fueltank1,
        fueltank2,
        fueltank3,
        fueltank4,
        fueltank5,
        fueltank6,
        fueltank7,
        fueltank8,
        RPM1,
        RPM2,
        DFM1,
        DFM2,
        companyId,
      });
      res.status(201).json({ message: `${vessel.name} has been created` });
    } catch (err) {
      next(err);
    }
  }

  static async editVessel(req, res, next) {
    try {
      const { id } = req.params;
      let vessel = await Vessel.findByPk(id);
      if (!vessel) {
        throw {
          code: 400,
          name: "Bad Request",
          message: `vessel id ${req.params.id} not found`,
        };
      } else {
        let {
          name,
          vesselNumber,
          phone,
          imei,
          productionYear,
          deviceid,
          fueltank1,
          fueltank2,
          fueltank3,
          fueltank4,
          fueltank5,
          fueltank6,
          fueltank7,
          fueltank8,
          RPM1,
          RPM2,
          DFM1,
          DFM2,
          companyId,
        } = req.body;
        await Vessel.update(
          {
            name,
            vesselNumber,
            phone,
            imei,
            productionYear,
            deviceid,
            fueltank1,
            fueltank2,
            fueltank3,
            fueltank4,
            fueltank5,
            fueltank6,
            fueltank7,
            fueltank8,
            RPM1,
            RPM2,
            DFM1,
            DFM2,
            companyId,
          },
          {
            where: {
              id,
            },
          }
        );
        res.status(200).json({ message: "Vessel update success" });
      }
    } catch (err) {
      next(err);
    }
  }

  static async getVessel(req, res, next) {
    try {
      const vessel = await Vessel.findAll({
        include: [
          {
            model: VesselTank,
          },
        ],
      });
      res.status(200).json(vessel);
    } catch (err) {
      next(err);
    }
  }

  static async deleteVessel(req, res, next) {
    try {
      const { id } = req.params;
      Vessel.destroy({ where: { id } });
      res.status(200).json({ message: "Vessel delete success" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = VesselController;
