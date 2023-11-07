const { Sms, VesselInfo, Vessel } = require("../models/index");
const { lat, lng } = require("../helpers/ddFormat");
const { VesselMaster } = require("../../master/models/index").Vessel;

class SmsController {
  static async callbackSms(req, res, next) {
    try {
      const { sender, content: message, idsms } = req.query;
      let randomId = `TRX-ID-${sender}-${idsms}`;
      const obj = {
        mobile: sender,
        message,
        trxID: randomId,
        type: "Receive Sms",
      };
      await Sms.create(obj);
      // console.log(obj);
      let newData2 = await message.split(",");
      // console.log(newData2)
      let newLatitude = lat(newData2[15]);
      if (newData2[16] === "S") {
        newLatitude = `${-newLatitude}`;
      }
      // console.log(newLatitude)
      let newLongitude = lng(newData2[17]);
      if (newData2[18] === "W") {
        newLongitude = `${-newLongitude}`;
      }
      // console.log(newLongitude);

      let vesselData = await VesselInfo.create({
        phoneNumber: sender,
        deviceId: newData2[0],
        statusPower: newData2[1],
        statusSignal: newData2[2],
        h2Tank1: newData2[3],
        h2Tank2: newData2[4],
        h2Tank3: newData2[5],
        h2Tank4: newData2[6],
        h2Tank5: newData2[7],
        h2Tank6: newData2[8],
        h2Tank7: newData2[9],
        h2Tank8: newData2[10],
        RPM1: newData2[11],
        RPM2: newData2[12],
        date: newData2[13],
        time: newData2[14],
        latitude: newLatitude,
        NSIndicator: newData2[16],
        longitude: newLongitude,
        EWIndicator: newData2[18],
        speed0: newData2[19],
        pitch: newData2[20],
        roll: newData2[21],
        DFM1: newData2[22],
        DFM2: newData2[23],
      });
      const vesselMasterData = await VesselMaster.findOne({
        where: {
          phoneNumber: sender,
        },
      });
      if (vesselMasterData) {
        await Vessel.update(
          {
            deviceId: newData2[0],
            statusPower: newData2[1],
            statusSignal: newData2[2],
            fuelTank1: newData2[3],
            fuelTank2: newData2[4],
            fuelTank3: newData2[5],
            fuelTank4: newData2[6],
            fuelTank5: newData2[7],
            fuelTank6: newData2[8],
            fuelTank7: newData2[9],
            fuelTank8: newData2[10],
            RPM1: newData2[11],
            RPM2: newData2[12],
            date: newData2[13],
            time: newData2[14],
            latitude: newLatitude,
            NSIndicator: newData2[16],
            longitude: newLongitude,
            EWIndicator: newData2[18],
            speed: newData2[19],
            pitch: newData2[20],
            roll: newData2[21],
            DFM1: newData2[22],
            DFM2: newData2[23],
          },
          {
            where: {
              phoneNumber: sender,
            },
          }
        );
      }
      res.status(201).json(vesselData);
    } catch (err) {
      next(err);
    }
  }

  static async getSms(req, res, next) {
    try {
      const sms = await Sms.findAll();
      res.status(200).json(sms);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = SmsController;
