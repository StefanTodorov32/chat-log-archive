const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

const filePath = path.join(__dirname, "example.txt");

router.get("/", (req, res) => {
  res.render("home");
});
router.post("/submit", (req, res) => {
  const date = new Date();
  if (req.body.button == "submit") {
    const logText = `\n${date.toLocaleTimeString("bg-BG", {
      hour12: false,
    })} User: @user41274 submited: ${req.body.text}`;

    fs.appendFileSync(filePath, logText, (err) => {
      if (err) {
        throw err;
      }
      console.log("File Written!");
    });
    res.render("home");
  } else if (req.body.button == "edit") {
    const logText = `\n${date.toLocaleTimeString("bg-BG", {
      hour12: false,
    })} User: @user41274 edited: ${req.body.text}`;

    fs.appendFileSync(filePath, logText, (err) => {
      if (err) {
        throw err;
      }
      console.log("File Edited!");
    });
    res.render("home");
  } else if (req.body.button == "delete") {
    const logText = `\n${date.toLocaleTimeString("bg-BG", {
      hour12: false,
    })} User: @user41274 deleted: ${req.body.text}`;

    fs.appendFileSync(filePath, logText, (err) => {
      if (err) {
        throw err;
      }
      console.log("File Deleted!");
    });
    res.render("home");
  }else if(req.body.button == 'archive'){
    fs.readFile(filePath, 'utf-8',(err, data)=>{
        res.render('log', {data})
    })
  }
});
module.exports = router;
