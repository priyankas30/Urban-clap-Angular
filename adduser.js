const Promise = require("bluebird");
const mysql=require("mysql");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const dbconfig={
    user:"root",
    host:"127.0.0.1",
    password:"12345",
    database:"user",
};

let adduser= async(input)=>{
    const connection=mysql.createConnection(dbconfig);
    await connection.connectAsync();
    console.log("connection ok")
    let sql = "insert into client (username,password,email,mobile) values (?, ?, ?, ?)";
   await connection.queryAsync(sql, [
        input.username,
        input.password,
        input.email,
        input.mobile,
    ]);
    
   await connection.endAsync();
};
let authenticateuser = async(input) => {
    const connection=mysql.createConnection(dbconfig);
    await connection.connectAsync();
     let sql = "select * from client where username = ? and password = ?";
     const result = await connection.queryAsync(sql,[
         input.username,
         input.password,
     ]);
     await connection.endAsync();
     if(result.length==0){

        throw new Error("Invalid credential");
     }

};


module.exports = { adduser , authenticateuser};

