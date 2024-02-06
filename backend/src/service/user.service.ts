import express from "express";
import User from "../model/user.model";

//register user
export async function saveUser(req:express.Request , res:express.Response){

    const base64Value = await req.file?.buffer.toString('base64');
    const userData = req.body;

    const user = await User.create({
        fName:userData.fName,
        lName:userData.lName,
        email:userData.email,
        phoneNumber:userData.phoneNumber,
        nic:userData.nic,
        avatar:base64Value
    });
    res.status(201).send(user)
}

//get token for user
// function getToken (req:express.Request,res:express.Response){
//
// }