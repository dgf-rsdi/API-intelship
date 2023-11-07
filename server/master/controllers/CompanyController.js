const { Company } = require("../models");
const { User } = require("../models");

class CompanyController {
  static async addCompany(req, res, next) {
    try {
      const { companyName, address, owner, phone, phone2 } = req.body;
      const company = await Company.create({
        companyName,
        address,
        owner,
        phone,
        phone2,
      });
      res
        .status(201)
        .json({ message: `${company.companyName} has been created` });
    } catch (err) {
      next(err);
    }
  }

  static async companyById(req, res) {
    let { id } = req.params;
    Company.findByPk(id)
      .then((companyById) => {
        res.status(200).json(companyById);
      })
      .catch((err) => {
        console.log(err);
        res.status(404).json({ message: `${id} not found` });
      });
  }

  static async getCompany(req, res, next) {
    try {
      const company = await Company.findAll({
        include: [
          {
            model: User,
          },
        ],
      });
      res.status(200).json(company);
    } catch (err) {
      next(err);
    }
  }

  static async deleteCompany(req, res, next) {
    try {
      const { id } = req.params;
      Company.destroy({ where: { id } });
      res.status(200).json({ message: "Company delete success" });
    } catch (err) {
      next(err);
    }
  }

  static async editCompany(req, res, next) {
    try {
      const { id } = req.params;
      let company = await Company.findByPk(id);
      if (!company) {
        throw {
          code: 400,
          name: "Bad Request",
          message: `company id ${req.params.id} not found`,
        };
      } else {
        let { companyName, address, owner, phone, phone2 } = req.body;
        await Company.update(
          {
            companyName,
            address,
            owner,
            phone,
            phone2,
          },
          {
            where: {
              id,
            },
          }
        );
        res.status(200).json({ message: "Company update success" });
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = CompanyController;
