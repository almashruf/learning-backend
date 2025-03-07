const express = require("express");
const app = express();

const userModel = require("./usermodel");

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/create", async (req, res) => {
  let createduser = await userModel.create({
    name: "tonoy",
    email: "tonoy@yahoo.com",
    username: "tonoy",
  });

  res.send(createduser);
});

app.get("/read", async (req, res) => {
  let users = await userModel.find({ username: "tonoy" });
  res.send(users);
});

app.get("/delete", async (req, res) => {
    let users = await userModel.findOneAndDelete({ username: "tonoy" });
    res.send(users);
  });

app.get("/update", async (req, res) => {
  let updateduser = await userModel.findOneUpdate(
    { username: "tonoy1" },
    { name: "tonoy1-255" },
    { new: true }
  );
  res.send(updateduser);
});

app.listen(3000);
