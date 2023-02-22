import express, { request } from "express";
import cors from "cors";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { stringToHash, varifyHash } from "bcrypt-inzi";





let dbURI =
  process.env.MONGODBURI ||
  "mongodb+srv://tabish:1234@cluster0.wtc3jvl.mongodb.net/loginform?retryWrites=true&w=majority";
const SECRET = process.env.SECRET || "topsecret";
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: [
      "http://localhost:3001",
      "https://ecommercewebsite-221ee.web.app",
      "*",
    ],
    credentials: true,
  })
);
app.use(bodyParser.json())

const userSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, required: true },
  password: { type: String, required: true },
  createdOn: { type: Date, default: Date.now },
});

const userModel = mongoose.model("user", userSchema);




app.post("/login", (req, res) => {
  let body = req.body;

  if (!body.email || !body.password) {
    res.status(400).send(
      `required fields missing, request example: 
      {
        "email": "abc@abc.com",
                    "password": "12345"
                }`
    );
    return;
  }

  userModel.findOne(
    { email: body.email },
    "email firstName lastName age password",
    (err, user) => {
      if (!err) {
        console.log("user: ", user);

        if (user) {
          varifyHash(body.password, user.password).then((isMatched) => {
            if (isMatched) {
              var token = jwt.sign(
                {
                  _id: user._id,
                  email: user.email,
                  iat: Math.floor(Date.now() / 1000) - 30,

                  exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
                },
                SECRET
              );

              console.log("token:", token);

              res.cookie("Token", token, {
                maxAge: 86_400_000,
                httpOnly: true,
              });

              res.send({
                message: "Login successful",
                // profile: {
                //   email: user.email,
                //   firstName: user.firstName,
                //   lastName: user.lastName,
                //   gender: user.gender,
                //   address: user.address,
                //   _id: user._id,
                // },
              });

              return;
            } else {
              console.log("user not found: ");
              res.status(401).send({ message: "Incorrect email.or password," });
              return;
            }
          });
        } else {
          // user not found

          console.log("user not found: ");
          res.status(401).send({ message: "Incorrect email.or password," });
          return;
        }
      } else {
        console.log("db error: ", err);
        res.status(500).send({ message: "Login failed please try later" });
      }
    }
  );
});

app.post("/logout", (req, res) => {
  res.cookie("Token", "", {
    maxAge: 0,
    httpOnly: true,
  });

  res.send({ message: "Logout successful" });
});

app.post('/signup', (req, res) => {
  let body = req.body
  console.log(body, "body")
  if (!body.firstName || !body.lastName || !body.email || !body.password) {
    res.status(400).send(
      `
required filled missing, request example
{
firstName = 'john'
lastName = 'doe
email = 'abc@abc.com'
password = '12345'
}`
    );
    return
  }

  // check if user already exist // query email user

  userModel.findOne({ email: body.email }, (err, user) => {
    if (!err) {
      console.log("user");

      if (user) {
        //user already exist
        console.log("user already exist :", user);
        res
          .status(400)
          .send({ message: "user already exist,Please try deffrent email" });
        return;
      } else {
        //user not already exist

        stringToHash(body.password).then((hashString) => {
          userModel.create(
            {
              firstName: body.firstName,
              lastName: body.lastName,
              email: body.email.toLowerCase(),
              password: hashString,
            },
            (err, result) => {
              if (!err) {
                console.log("data saved:", result);
                res.status(201).send({ message: "user is created" });
              } else {
                console.log("db error: ", err);
                res.status(500).send({ message: "internal server error" });
              }
            }
          );
        });
      }
    } else {
      console.log("db error: ", err);
      res.status(500).send({ message: "db error in query" });
      return;
    }
  });
});

/////////////////////////////////////////

app.post("/adminlogin", (req, res) => {
  let body = req.body;

  if (!body.email || !body.password) {
    res.status(400).send(
      `required fields missing, request example: 
                {
                    "email": "abc@abc.com",
                    "password": "12345"
                }`
    );
    return;
  }

  userModel.findOne(
    { email: body.email },
    "email  password",
    (err, user) => {
      if (!err) {
        console.log("user: ", user);

        if (user) {
          varifyHash(body.password, user.password).then((isMatched) => {
            if (isMatched) {
              var token = jwt.sign(
                {
                  _id: user._id,
                  email: user.email,
                  iat: Math.floor(Date.now() / 1000) - 30,

                  exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
                },
                SECRET
              );

              console.log("token:", token);

              res.cookie("Token", token, {
                maxAge: 86_400_000,
                httpOnly: true,
              });

              res.send({
                message: "Login successful",
                // profile: {
                //   email: user.email,
                //   firstName: user.firstName,
                //   lastName: user.lastName,
                //   gender: user.gender,
                //   address: user.address,
                //   _id: user._id,
                // },
              });

              return;
            } else {
              console.log("user not found: ");
              res.status(401).send({ message: "Incorrect email.or password," });
              return;
            }
          });
        } else {
          // user not found

          console.log("user not found: ");
          res.status(401).send({ message: "Incorrect email.or password," });
          return;
        }
      } else {
        console.log("db error: ", err);
        res.status(500).send({ message: "Login failed please try later" });
      }
    }
  );
});


/////////////////setup///////////////////////
const setupSchema = new mongoose.Schema({
  BusinessName: { type: String, required: true },
  EmailName: { type: String, required: true },
  ContactName: { type: Number, required: true },
  TimezoneName: { type: String, required: true },
  // contact: { type: Number, required: true },
  CurrencyName: { type: String, required: true },
  AddresName: { type: String, required: true },
  createdOn: { type: Date, default: Date.now },
});


const setupModel = mongoose.model("setup", setupSchema);





app.post('/setupp', (req, res) => {
  let body = req.body
  console.log(body, "body")
  if (!body.BusinessName || !body.AddresName || !body.ContactName || !body.EmailName || !body.TimezoneName || !body.CurrencyName) {
    res.status(400).send(
      `
required filled missing, request example
{
        business = 'abc'
        addres = '28/03 Pakistan Karachi'
        contact = '03104647853'
        email = 'abc@gmail.com'
        timezone = 'eufbuie'
        currency = 'PKR'

}`
    );
    return
  }

//   // check if user already exist // query email user

setupModel.findOne({ email:  body.EmailName
 }, (err, user) => {
  // console.log(email,"hello");
  // console.log(body.EmailName,"hello1");
    if (!err) {
      console.log("user");

      if (user) {
        //user already exist
        console.log("user already exist :", user);
        res
          .status(400)
          .send({ message: "user already exist,Please try deffrent email" });
        return;
      } else {
        //user not already exist

        // stringToHash(body.password).then((hashString) => {
          setupModel.create(
            {
              BusinessName: body.BusinessName,
              AddresName: body.AddresName,
              ContactName: body.ContactName,
              CurrencyName: body.CurrencyName,
              TimezoneName: body.TimezoneName,
              EmailName: body.EmailName.toLowerCase(),
              
            },
            (err, result) => {
              if (!err) {
                console.log("data saved:", result);
                res.status(201).send({ message: "Setup is created" });
              } else {
                console.log("db error: ", err);
                res.status(500).send({ message: "internal server error" });
              }
            }
          );
        // });
      }
    } else {
      console.log("db error: ", err);
      res.status(500).send({ message: "db error in query" });
      return;
    }
  });
});
/////////////////////////////////////////
const addUserSchema = new mongoose.Schema({
  userName: { type: String },
  // lastName: { type: String },
  userEmail: { type: String, required: true },
  userPassword: { type: String, required: true },
  createdOn: { type: Date, default: Date.now },
});

const addUserModel = mongoose.model("adduser", addUserSchema);
//////////////////////////////////////////

app.post('/addnewuser', (req, res) => {
  let body = req.body
  console.log(body, "body")
  if (!body.userName || !body.userEmail || !body.userPassword) {
    res.status(400).send(
      `
required filled missing, request example
{
  userName = 'john'
  userEmail = 'abc@abc.com'
  userPassword = '12345'
}`
    );
    return
  }

  // check if user already exist // query email user

  addUserModel.findOne({ email: body.userEmail }, (err, user) => {
    if (!err) {
      console.log("user");

      if (user) {
        //user already exist
        console.log("user already exist :", user);
        res
          .status(400)
          .send({ message: "user already exist,Please try deffrent email" });
        return;
      } else {
        //user not already exist

        stringToHash(body.userPassword).then((hashString) => {
          userModel.create(
            {
              userName: body.userName,
              email: body.userEmail.toLowerCase(),
              password: hashString,
            },
            (err, result) => {
              if (!err) {
                console.log("data saved:", result);
                res.status(201).send({ message: "user is created" });
              } else {
                console.log("db error: ", err);
                res.status(500).send({ message: "internal server error" });
              }
            }
          );
        });
      }
    } else {
      console.log("db error: ", err);
      res.status(500).send({ message: "db error in query" });
      return;
    }
  });
});

////////////////////////////////////////////

app.use(function (req, res, next) {
  console.log("req.cookies: ", req.cookies);

  if (!req.cookies.Token) {
    res.status(401).send({
      message: "include http-only credentials with every request",
    });
    return;
  }
  jwt.verify(req.cookies.Token, SECRET, function (err, decodedData) {
    if (!err) {
      console.log("decodedData: ", decodedData);

      const nowDate = new Date().getTime() / 1000;

      if (decodedData.exp < nowDate) {
        res.status(401).send("token expired");
      } else {
        console.log("token approved");
        req.body.token = decodedData;
        next();
      }
    } else {
      res.status(401).send("invalid token");
    }
  });
});

app.use((req, res) => {
  res.status(404).send("404 not found");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});



// /////////////////////////////////////////////////////////////////////////////////////////////////

mongoose.connect(dbURI);

////////////////mongodb connected & disconnected events///////////////////////////////////////////////
mongoose.connection.on("connected", function () {
  //connected
  console.log("Mongoose is connected");
});

mongoose.connection.on("disconnected", function () {
  //disconnected
  console.log("Mongoose is disconnected");
  process.exit(1);
});

mongoose.connection.on("error", function (err) {
  //any error
  console.log("Mongoose connection error: ", err);
  process.exit(1);
});

process.on("SIGINT", function () {
  /////this function will run jst before app is closing
  console.log("app is terminating");
  mongoose.connection.close(function () {
    console.log("Mongoose default connection closed");
    process.exit(0);
  });
});
////////////////mongodb connected disconnected events///////////////////////////////////////////////