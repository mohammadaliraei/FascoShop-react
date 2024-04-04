const express = require("express");

const mongoose = require("mongoose");
const app = express();
const ProductsModel = require("./src/models/products");
const UsersModel = require("./src/models/users");
const UserModel = require("./src/models/users");

const cors = require("cors");
// Allow all origins
app.use(cors());
// Allow specific origin(s)
app.use(
  cors({
    origin: "https://fascoshop.vercel.app/",
    methods: ["POST", "GET"],
    credentials: true,
  })
);

const url =
  "mongodb+srv://muhammad:muhammad1234@nodetest.napzydw.mongodb.net/nodeTest?retryWrites=true&w=majority";

app.use(express.json());

mongoose
  .connect(url)
  .then(() => console.log("connected to mongodb"))
  .catch(() => console.log("disconnected tom mongodb"));

app.post("/create-products", (req, res) => {
  ProductsModel.create(req.body)
    .then((products) => res.json(products))
    .catch((err) => res.json(err));
});

app.get("/", (req, res) => {
  ProductsModel.find()
    .then((products) => res.json(products))
    .catch((err) => res.json(err));
});

app.get("/ManFashion", (req, res) => {
  ProductsModel.find({ modelProducts: "ManFashion" })
    .then((products) => res.json(products))
    .catch((err) => res.json(err));
});

app.get("/WomenFashion", (req, res) => {
  ProductsModel.find({ modelProducts: "WomenFashion" })
    .then((products) => res.json(products))
    .catch((err) => res.json(err));
});

app.get("/WomenAccessories", (req, res) => {
  ProductsModel.find({ modelProducts: "WomenAccessories" })
    .then((products) => res.json(products))
    .catch((err) => res.json(err));
});
app.get("/ManAccessories", (req, res) => {
  ProductsModel.find({ modelProducts: "ManAccessories" })
    .then((products) => res.json(products))
    .catch((err) => res.json(err));
});

app.post("/create-users", (req, res) => {
  UsersModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.get("/users", (req, res) => {
  UserModel.find()
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening port on ${port}`);
});
