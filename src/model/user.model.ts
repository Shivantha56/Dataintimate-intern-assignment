import {
    CreationOptional,
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    Sequelize
} from "sequelize";
// import {sequelize} from "../index";

// const sequelize = new Sequelize('candidate_dilshan_shivantha', 'root', '1234', {
//     host: 'localhost',
//     dialect: 'mysql'
// });

const sequelize = new Sequelize('candidate_dilshan_shivantha', 'avnadmin', 'AVNS_jLKts7gV8QtPBd_vk-u', {
    port:28934,
    host: 'mysql-13f894c-kumarasiriods-37c9.a.aivencloud.com',
    dialect: 'mysql',
    ssl:true
});

// interface IUser{
//     id ?: number
//     fName : string
//     lName : string
//     email : string
//     phoneNumber : number
//     nic : string
//     userImage : string
// }

export default class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare id: CreationOptional<string>
    declare fName: string
    declare lName: string
    declare email: string
    declare phoneNumber: number
    declare nic: string
    declare password: string
    declare avatar: string
}


    User.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        fName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phoneNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        nic: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        },
        avatar: {
            type: DataTypes.TEXT('long'),
            allowNull: false
        }
    }, {sequelize})


export async function createUserTable(){
    await User.sync({alter:true});
    console.log("The table for the User model was just created if not exists!");
}
