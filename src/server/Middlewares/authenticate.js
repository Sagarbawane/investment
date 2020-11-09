const jwt = require("jsonwebtoken");

// 4 responsibilites of a middleware function
// * can execute any code
// * can modify req, res objects
// * can end req, res cycle
// * call the next middlware function

const authenticateUser = (req, res, next) => {
  
  const token = req.headers.auth;
 
  if (token) {
    let tokenData;
    try {
      tokenData = jwt.verify(token, "invesmentapp");
     
      
      req.userId = tokenData.id;
      console.log(req.userId)
      console.log(tokenData.id)
      next();
    } catch (e) {
      res.status("401").json(e);
    }
  } else {
    res.status("401").json({ error: "token not provided" });
  }
};

module.exports = {
  authenticateUser,
};
