

const express = require("express");
const app = express();
const port = 3000;
//loading middle ware into the app
//inbuilt middle ware
app.use(express.json());
// middleware - loggin , auth , validation

//creation of middle ware
// const loggingMidddleware = function (req, res, next) {
//   console.log("LOGING in");
//   next();
// };
// //loading middleware into application
// app.use(loggingMidddleware);

// const authMiddleware = function (req, res, next) {
//   console.log("AUTHENTICATING");
//   //res.send("go home")
//   next();   
// };
// app.use(authMiddleware);

// const ValidMiddleware = function (req, res, next) {
//   console.log("VALIDATION");
//   next();
// };
// app.use(ValidMiddleware);

const route = require('./routes/route')
app.use('/api', route)

///api/student ->

app.get("/", (req, res) => {
  console.log("mai router handler huu");
  console.log(req.body);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
