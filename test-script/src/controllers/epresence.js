const { users, espresences, sequelize } = require("../../models");

// INSERT EPRESENCE (INSERT INTO TABLE EPRESENCE)
exports.createEpresence = async (req, res) => {
  try {
    const id = req.user.id;

    const data = {
      id_users: id,
      type: req.body.type,
      waktu: req.body.waktu,
    };

    await espresences.create(data);

    res.status(200).send({
      status: "success",
      message: "insert epresence success",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      status: "failed",
      message: "server error",
    });
  }
};

// GET EPRESENCE BY USER
exports.getEpresenceByUser = async (req, res) => {
  try {
    const id = req.user.id;

    let data = await users.findAll({
      where: {
        id: id,
      },
      attributes: ["id", "nama"],
      include: [
        {
          model: espresences,
          as: "epresences",
          attributes: [
            "is_approve",
            [sequelize.fn("DATE", sequelize.col("waktu")), "tanggal"],
            [
              sequelize.fn("date_trunc", "day", sequelize.col("waktu")),
              "waktu",
            ],
          ],
        },
      ],
    });

    res.status(200).send({
      status: "success get data",
      data,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      status: "failed",
      message: "server error",
    });
  }
};

// APPROVE BY SPV
exports.approveBySpv = async (req, res) => {
  try {
    const spvId = req.user.id;
    const epresenceId = req.params.id;

    let checkSpv = await users.findOne({
      where: {
        id: spvId,
      },
    });

    // check is user spv or not
    if (checkSpv.npp_supervisor !== 0) {
      return res.status(401).send({
        status: "failed",
        message: "Unauthorized",
      });
    }

    // get data user to get npp_supervisor
    let checkUser = await espresences.findOne({
      where: {
        id: epresenceId,
      },
      include: [
        {
          model: users,
          as: "users",
          attributes: {
            exclude: ["password", "createdAt", "updatedAt"],
          },
        },
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    // check if users.npp_supervisor !== npp from supervisor
    if (checkUser.users.npp_supervisor !== checkSpv.npp) {
      return res.status(401).send({
        status: "failed",
        message: "Unauthorized",
      });
    }

    const data = {
      is_approve: req.body.is_approve,
    };

    // update status is_approval
    await espresences.update(data, {
      where: {
        id: epresenceId,
      },
    });

    res.status(200).send({
      status: "success",
      message: `Approval for user id: ${epresenceId} success`,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      status: "failed",
      message: "server error",
    });
  }
};
