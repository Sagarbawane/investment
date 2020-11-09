const Client = require("../Models/client");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");

const clientController = {};

clientController.register = (req, res) => {
  const body = req.body;
  const user = new Client(body);
  user.admin_id=req.userId
  user
    .save()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
};

clientController.login = (req, res) => {
  const body = req.body;
 
  Client.findOne({ email: body.email })

    .then((user) => {
      console.log(user)
     
      if (user) {
    
        bcryptjs.compare(body.password, user.password).then((result) => {
          console.log(body.password)
          console.log(user.password)
          console.log(body.password==user.password)
          console.log(result)
         
          if (result) {
            console.log(result)
            const tokenData = {
              id: user._id,
            };
            const token = jwt.sign(tokenData, "invesmentapp", {
              expiresIn: "1d",
            });
            res.json({
              token: token,
            });
            console.log(token);
          } else {
            res.json({ errors: "Invalid UserName Or Password" });
          }
        });
      } else {
        res.json({ errors: "Invali UserName Or Password" });
      }
    })
    .catch((err) => {
      res.json(err);
    });
};
clientController.account = (req, res) => {
  const id = req.userId;
  Client.findById(id)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
};
clientController.list = (req, res) => {
  Client.find()
    .then((client) => {
      res.json(client);
    })
    .catch((err) => {
      res.json(err);
    });
};
clientController.update = (req, res) => {
  const id = req.params.id;

  const body = req.body;
  const user = req.userId;
 

  Client.findByIdAndUpdate({ _id: id, user }, body, {
    new: true,
    runValidators: true,
  }).then((client) => {
    
    if (client) {
     
        
       
           
            client.save((err, savedUser) => {
              if (err) {
                  return next(err);
              }
              res.json(savedUser);
          });

        
      

    } else {
      res.json({});
    }
  });
};

clientController.logout = (req, res) => {
 
  const { user, token } = req;
  Client.findByIdAndUpdate(req.userId, { $pull: { tokens: { token: token } } })
    .then(function () {
      res.send({ notice: "successfully logged out" });
    })
    .catch(function (err) {
      res.send(err);
    });
};

module.exports = clientController;
