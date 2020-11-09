const Transaction = require("../Models/transaction");

const transactionController = {};
transactionController.list = (req, res) => {
  Transaction.find()
    .then((transaction) => {
      res.json(transaction);
    })
    .catch((err) => {
      res.json(err);
    });
};

transactionController.create = (req, res) => {
  const body = req.body;

  const transaction = new Transaction(body);
  transaction.userId = req.userId;
  // assigning the user id to the message

  transaction
    .save()
    .then((transaction) => {
      res.json(transaction);
    })
    .catch((err) => {
      res.json(err);
    });
};
transactionController.show = (req, res) => {
  const id = req.params.id;
 Transaction.findById(id)
    .then((transaction) => {
      res.json(transaction);
    })
    .catch((err) => {
      res.json(err);
    });
};

transactionController.update = (req, res) => {
  const id = req.params.id;

  const body = req.body;

  Transaction.findByIdAndUpdate({ _id: id, user }, body, {
    new: true,
    runValidators: true,
  }).then((transaction) => {
    if (transaction) {
      res.json(transaction);
    } else {
      res.json({});
    }
  });
};
transactionController.destroy = (req, res) => {
  const id = req.params.id;

  Transaction.findOneAndDelete({ _id: id, userId: req.userId })
    .then((transaction) => {
      if (transaction) {
        res.json(transaction);
      } else {
        res.json("It is posted by other user ");
      }
    })
    .catch((err) => {
      res.json("It is posted by other user ");
    });
};

module.exports = transactionController;
