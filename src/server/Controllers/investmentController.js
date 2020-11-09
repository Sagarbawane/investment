const Investment = require("../Models/investment");

const investmentController = {};
investmentController.list = (req, res) => {
  Investment.find()
    .then((investment) => {
      res.json(investment);
    })
    .catch((err) => {
      res.json(err);
    });
};

investmentController.create = (req, res) => {
  const body = req.body;

  const investment = new Investment(body);
  investment.userId = req.userId;
  // assigning the user id to the message

  investment
    .save()
    .then((investment) => {
      res.json(investment);
    })
    .catch((err) => {
      res.json(err);
    });
};
investmentController.show = (req, res) => {
  const id = req.params.id;
 Investment.findById(id)
    .then((investment) => {
      res.json(investment);
    })
    .catch((err) => {
      res.json(err);
    });
};

investmentController.update = (req, res) => {
  const id = req.params.id;

  const body = req.body;

  Investment.findByIdAndUpdate({ _id: id, user }, body, {
    new: true,
    runValidators: true,
  }).then((investment) => {
    if (investment) {
      res.json(investment);
    } else {
      res.json({});
    }
  });
};
investmentController.destroy = (req, res) => {
  const id = req.params.id;

  Investment.findOneAndDelete({ _id: id, userId: req.userId })
    .then((investment) => {
      if (investment) {
        res.json(investment);
      } else {
        res.json("It is posted by other user ");
      }
    })
    .catch((err) => {
      res.json("It is posted by other user ");
    });
};

module.exports = investmentController;
