import express from "express";
import User from "../model/user.model";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import CustomResponse from "../dto/custome.response";
import {where} from "sequelize";

//register user
export async function saveUser(req: express.Request, res: express.Response) {

    const saltRounds = 1;
    const base64Value = await req.file?.buffer.toString('base64');
    const userData = req.body;
    let encodePassword;

    //generate password for encode password
    await bcrypt.hash(userData.password, saltRounds).then(function (hash) {
        encodePassword = hash;
    });

    if (base64Value && encodePassword) {

        const user = await User.create({
            fName: userData.fName,
            lName: userData.lName,
            email: userData.email,
            phoneNumber: userData.phoneNumber,
            nic: userData.nic,
            password: encodePassword,
            avatar: base64Value

        });
        user.password = "";
        return  res.status(201).send(user)
    }

    res.status(500).send("can not create account")
}

//get token for user
export async function getToken(req: express.Request, res: express.Response) {

    const {email, password} = req.body;
    // check if user exists with requested email
    // if not send response user can not find with 404
    // if user exists check password equal to the given use password
    // if password is wrong send can not authenticate is wrong 401console.log(email)
    if (email) {
        const user = await User.findOne({where: {email: email}});
        if (user) {
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (passwordMatch) {

                const userData = user;
                userData.password = '';
                userData.avatar = '';
                user.password = "";
                // write jwt authentication for send token to the client
                // can be applied jwt token expiration
                const token = jwt.sign(JSON.stringify(userData), "Dilshan@###@DSDSDSDSEE@", {algorithm: 'HS256'})
                res.status(200).send(new CustomResponse(token, userData))
                return;
            }
            res.status(401).send("password does not match")
            return
        }
        res.status(404).send("user can not find")
    }
}

export async function deleteUser(req: express.Request, res: any) {
    /*
    * validate token using custom middlewear
    * get user id using path attribute
    * find user is available
    * then delete user
    */
    const userId = res.tokendata.id;
    const user = await User.findByPk(userId);
    if (!user){
        return res.send("user not exists").status(500)
    }

    try {
        await User.destroy({where: {id: userId}})
        res.status(200).send('user delete success')
    }catch (e) {
        res.status(500).send('can not delete user')
    }

}

export async function updateUser(req: express.Request, res: any) {
    /*
    * validate token using custom middlewear
    * get user id using path attribute
    * find user is available
    * then delete user
    */
    const userId = res.tokendata.id;
    const {fName,lName,email,phoneNumber,nic,password} = req.body;
    const user = await User.findByPk(userId);
    if (!user){
        return res.send("user not exists").status(500)
    }

    try {
        const affectedCount = await User.update({fName:fName,lName:lName,email:email,phoneNumber:phoneNumber,nic:nic,password:password},{where: {id: userId}})
        if(affectedCount[0] > 0){
            res.status(200).send('user update success ');
            return ;
        }else{
            res.status(500).send('can not update user')
            return ;
        }
    }catch (e) {
        res.status(500).send('Internal system error');
    }


}



