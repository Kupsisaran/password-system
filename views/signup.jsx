import React from "react";
function Signup() {
  const [signup, setSignup] = React.useState({
    email: "",
    password: "",
    color: "",
    image: "",
  });

  const handleChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(signup).every((value) => value === "")) {
      alert("Please fill all the fields");
      return;
    }

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: signup,
      }),
    };

    await fetch("http://localhost:8080/api/signup", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.data) {
          sessionStorage.setItem("user", JSON.stringify(data.id));
          window.location.href = "/";
        }
      });
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="border border-3 p-32 rounded-lg w-1/3 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Sign up</h1>
        <p className="text-gray-500">Enter your Credentials</p>
        <div className="mt-4 flex flex-col w-full">
          <label htmlFor="email" className="text-gray-500">
            Email
          </label>
          <input
            type="eamil"
            name="email"
            id="email"
            className="border border-3 rounded-lg p-2 mt-2"
            onChange={handleChange}
          />
        </div>
        <div className="mt-4 flex flex-col w-full">
          <label htmlFor="password" className="text-gray-500">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="border border-3 rounded-lg p-2 mt-2"
            onChange={handleChange}
            
          />
        </div>
        {/* Step2 */}
        <div className="mt-4 flex flex-col w-full">
          <label htmlFor="color" className="text-gray-500">
            Color
          </label>
          <input
            type="text"
            name="color"
            id="color"
            className="border border-3 rounded-lg p-2 mt-2"
            onChange={handleChange}
          />
        </div>
        {/* Step3 */}
        <div className="mt-4 flex flex-col w-full">
          <label htmlFor="image" className="text-gray-500">
            Image
          </label>
          <input
            type="text"
            name="image"
            id="image"
            className="border border-3 rounded-lg p-2 mt-2"
            onChange={handleChange}
          />
        </div>

        <div className="mt-4 flex w-full items-center justify-center">
          <button className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
