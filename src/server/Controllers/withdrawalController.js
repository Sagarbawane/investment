const Withdrawal = require("../Models/withdrawal");

const withdrawalController = {};
withdrawalController.list = (req, res) => {
    Withdrawal.find()
    .then((withdrawal) => {
      res.json(withdrawal);
    })
    .catch((err) => {
      res.json(err);
    });
};

withdrawalController.create = (req, res) => {
  const body = req.body;

  const withdrawal = new Withdrawal(body);
  withdrawal.userId = req.userId;
  withdrawal.investment_id=req.userId
  // assigning the user id to the message

  withdrawal
    .save()
    .then((withdrawal) => {
      res.json(withdrawal);
    })
    .catch((err) => {
      res.json(err);
    });
};
withdrawalController.show = (req, res) => {
  const id = req.params.id;
 Withdrawal.findById(id)
    .then((withdrawal) => {
      res.json(withdrawal);
    })
    .catch((err) => {
      res.json(err);
    });
};

withdrawalController.update = (req, res) => {
  const id = req.params.id;

  const body = req.body;

  Withdrawal.findByIdAndUpdate({ _id: id, user }, body, {
    new: true,
    runValidators: true,
  }).then((withdrawal) => {
    if (withdrawal) {
      res.json(withdrawal);
    } else {
      res.json({});
    }
  });
};
withdrawalController.destroy = (req, res) => {
  const id = req.params.id;

  Withdrawal.findOneAndDelete({ _id: id, userId: req.userId })
    .then((withdrawal) => {
      if (withdrawal) {
        res.json(withdrawal);
      } else {
        res.json("It is posted by other user ");
      }
    })
    .catch((err) => {
      res.json("It is posted by other user ");
    });
};

module.exports = withdrawalController;
