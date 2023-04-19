import React from "react";
import Password1 from "../components/password1";
import Password2 from "../components/password2";
import Password3 from "../components/password3";

function Auth() {
  const [password1, setPassword1] = React.useState({
    email: "",
    password: "",
  });
  const [password2, setPassword2] = React.useState({
    color: "",
  });
  const [password3, setPassword3] = React.useState({
    image: 0,
  });

  const validateNext = (e) => {
    e.preventDefault();
    // This function will be used to validate the password and move to the next step
    // This function will be passed to the password components
    if (currentStep === 1) {
      // Validate the password1
      // If password is correct then move to the next step
      // If password is wrong then show an error
      if (Object.values(password1).every((x) => x === "")) {
        return alert("Fill All Details");
      }

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: password1,
        }),
      };

      fetch("http://localhost:8080/api/login1", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data.status === "success") {
            sessionStorage.setItem("user", data.data);
            setCurrentStep(currentStep + 1);
          } else {
            alert("Wrong Credentials");
          }
        });
    } else if (currentStep === 2) {
      // Validate the password2
      // If password is correct then move to the next step
      // If password is wrong then show an error
      if (Object.values(password2).every((x) => x === "")) {
        return alert("Fill All Details");
      }

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            ...password2,
            id: sessionStorage.getItem("user"),
          },
        }),
      };

      fetch("http://localhost:8080/api/login2", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data.status === "success") {
            setCurrentStep(currentStep + 1);
          } else {
            alert("Wrong Credentials");
          }
        });
    } else if (currentStep === 3) {
      // Validate the password3
      // If password is correct then move to the next step
      // If password is wrong then show an error
      if (Object.values(password3).every((x) => x === "" || x === 0)) {
        return alert("Fill All Details");
      }

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            ...password3,
            id: sessionStorage.getItem("user"),
          },
        }),
      };

      fetch("http://localhost:8080/api/login3", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data.status === "success") {
            sessionStorage.setItem("success", true);
            alert("Login Successful");
            window.location.href = "/shop";
          } else {
            alert("Wrong Credentials");
          }
        });
    }
  };

  const [currentStep, setCurrentStep] = React.useState(1);
  return (
    <div className="flex items-center justify-center h-full">
      {currentStep === 1 && (
        <Password1
          Password1={password1}
          setPassword1={setPassword1}
          validateNext={validateNext}
        />
      )}
      {currentStep === 2 && (
        <Password2
          Password2={password2}
          setPassword2={setPassword2}
          validateNext={validateNext}
        />
      )}
      {currentStep === 3 && (
        <Password3
          Password3={password3}
          setPassword3={setPassword3}
          validateNext={validateNext}
        />
      )}
    </div>
  );
}

export default Auth;
