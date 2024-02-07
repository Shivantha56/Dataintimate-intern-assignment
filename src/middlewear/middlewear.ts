import express from "express";
import BodyPasser from 'body-parser'
import userRoutes from "../routes/user.routes";
import jwt from "jsonwebtoken";

const app = express();

//middlewear for validate JWT token

export function validateToken (req:express.Request,res:any,next:express.NextFunction){

    const token = req.headers.authorization;
    if (!token){
        console.log("tojen")
     return res.status(401).send("Authorized denied")
    }

    try {

        let verify = jwt.verify(token, "Dilshan@###@DSDSDSDSEE@");
        res.tokendata = verify
        next()
    }catch (e){
        res.status(401).send("authorized denied")
    }


}
