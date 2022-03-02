const handleSubmitLogin = async (event) => {
  //dont do refresh
  event.preventDefault();
  try {
    const token = await postData("http://localhost:3000/api/auth/login", {
      email: document.getElementById("exampleInputEmail1").value,
      password: document.getElementById("exampleInputPassword1").value,
    });
    console.log("token", token);
    localStorage.setItem("token", token.token);
    window.location.href = "http://localhost:3000/movies";
  } catch (err) {}
};
