export default class Search{
    constructor(userName, password){
        this.userName = userName;
        this.password = password;
        
    }

    /*
        💾 
        create fake database
    */
    validateUser(){
        return true;
    }

    logInfoUser(){
        console.log(`Password: ${this.password} - Username: ${this.userName}`);
    }
    
}