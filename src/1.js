let registerUser = () => {
const username= document.querySelector("#username").value;
const password = document.querySelector("#password").value;
const email = document.querySelector("#email").value;
const mobile= document.querySelector("#mobile").value;

if (username==""){ 
    document.querySelector("#username").style.borderColor="red";
    return;
}
if (password==""){ 
    document.querySelector("#password").style.borderColor="red";
    return;
}
if (email==""){ 
    document.querySelector("#email").style.borderColor="red";
    return;
}
if (mobile==""){ 
    document.querySelector("#mobile").style.borderColor="red";
    return;
}
let url = `http://localhost:3000/add_data?username=${username}&password=${password}&email=${email}&mobile=${mobile}`;
console.log(url);

let xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.onload=()=>{
    const res= xhr.responseText;
    console.log(res);

    document.querySelector("#username").value = "";
    document.querySelector("#password").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#mobile").value = "";
};
xhr.send();


};


/*

let registerUser = () => {
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    const email = document.querySelector("#email").value;
    const mobile = document.querySelector("#mobile").value;
  
    if (username === "") {
      document.querySelector("#username").style.borderColor = "red";
      return;
    }
  
    // http://localhost:3000/adduser?username=hello&password=1234&email=hello@gmail.com
    /*let url = "http://localhost:3000/adduser?";
    url += "username=" + username + "&";
    url += "password=" + password + "&";
    url += "email=" + email + "&";
    url += "mobile=" + mobile;*/
    /*
  
    let url = `http://localhost:3000/add_data?username=${username}&password=${password}&email=${email}&mobile=${mobile}`;
  
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => {
      const res = xhr.responseText;
      console.log(res);

      document.querySelector("#username").value = "";
      document.querySelector("#password").value = "";
      document.querySelector("#email").value = "";
      document.querySelector("#mobile").value = "";
    };
  
    xhr.send();
  };
*/


let registerUsingPost = async () => {
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  const email = document.querySelector("#email").value;
  const mobile = document.querySelector("#mobile").value;

  const input = {
    username: username,
    password,
    email,
    mobile,
  };
  const url = "http://localhost:3000/add_data";

  // http understands text
  await fetch(url, {
    method: "POST",
    body: JSON.stringify(input),
    headers: {
      "Content-Type": "application/json",
    },
  });

  document.querySelector("#username").value = "";
  document.querySelector("#password").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#mobile").value = "";
};