export default class CustomResponse{

    token:string
    user:{id:string,fName:string,lName:string,email:string,phoneNumber:number,nic:string,password:string,avatar:string}


    constructor(token: string, user: {
        id: string;
        fName: string;
        lName: string;
        email: string;
        phoneNumber: number;
        nic: string;
        password:string;
        avatar: string
    }) {
        this.token = token;
        this.user = user;
    }

    toString(){
        return JSON.stringify({token:this.token,data:this.user})
    }

}