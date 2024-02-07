import {
    CreationOptional,
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    Sequelize
} from "sequelize";

const sequelize = new Sequelize('candidate_dilshan_shivantha', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
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
            unique:true
        },
        phoneNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique:true
        },
        nic: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true
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
