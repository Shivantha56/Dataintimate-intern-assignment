import express from "express";
import BodyPasser from 'body-parser'

const app = express();
// middlewear for convert request json to json object
app.use(BodyPasser.json)

// middlewear for validate JWT TOKEN
