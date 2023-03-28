let button1 = document.getElementById("formbutton");

button1.addEventListener("click", function () {
  let email = document.getElementById("email").value;
  let username = document.getElementById("username").value;
  let number = document.getElementById("number").value;
  let password = document.getElementById("password").value;

  let obj = {
    email,
    username,
    password,
    number,
  };
  if (email == "" || username == "" || number == "" || password == "") {
    alert("Fill all The credential");
  } else {
    console.log(obj);
    postData(obj);
    alert("Sigin up Succesfull");
   
  }
});

postData = async (obj) => {
  let post = await fetch(` http://localhost:3000/adminsignin`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "content-type": "application/json",
    },
  });
  let data = await post.json();
  console.log(data);
  window.location.href="./adminloginpage.html"
};
