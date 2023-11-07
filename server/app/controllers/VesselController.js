const { VesselInfo } = require("../models/index");
const { Vessel } = require("../models/index");

class VesselController {
  static async getVesselInfo(req, res, next) {
    try {
      const vesselInfo = await VesselInfo.findAll();
      res.status(200).json(vesselInfo);
    } catch (err) {
      next(err);
    }
  }

  static async deleteVesselInfo(req, res, next) {
    try {
      const { id } = req.params;
      VesselInfo.destroy({ where: { id } });
      res.status(200).json({ message: "Vessel delete success" });
    } catch (err) {
      next(err);
    }
  }

  static async getVesselName(req, res, next) {
    try {
      const vesselName = await Vessel.findAll({
        include: [
          {
            model: VesselInfo,
          },
        ],
      });
      res.status(200).json(vesselName);
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

  static async addVessel(req, res, next) {
    try {
      const { phoneNumber, name, productionYear, companyName } = req.body;
      const vessel = await Vessel.create({
        phoneNumber,
        name,
        productionYear,
        companyName,
      });
      // console.log(vessel);
      res.status(201).json({ message: `${vessel.name} has been created` });
    } catch (err) {
      // console.log(err)
      next(err);
    }
  }

  static vesselById(req, res) {
    let { id } = req.params;
    Vessel.findByPk(id, {include: [
      {
        model: VesselInfo,
      },
    ],})
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(404).json({ message: `${id} not found` });
      });
  }

  static vesselInfoById(req, res) {
    let { id } = req.params;
    VesselInfo.findByPk(id)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(404).json({ message: `${id} not found` });
      });
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

  static async editVesselById(req, res, next) {
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
        let { imei, name, productionYear, companyName, phoneNumber } = req.body;
        let update = await Vessel.update(
          {
            imei,
            name,
            productionYear,
            companyName,
            phoneNumber
          },
          {
            where: {
              id,
            },
          }
        );
        res.status(200).json(update);
      }
    } catch (err) {
      next(err);
    }
  }

  static async getVesselByCompanyName(req, res, next) {
    try {
      let { companyName } = req.body;
      const vesselByCompanyName = await Vessel.findAll({
        where: {
          companyName,
        },
      });
      res.status(200).json(vesselByCompanyName);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = VesselController;
