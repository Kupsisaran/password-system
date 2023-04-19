import React from "react";

function Password2({ Password2, setPassword2, validateNext }) {
  // This component will be used to ask the user for his favorite color

  return (
    <div className="border border-3 p-32 rounded-lg">
      <h1 className="text-2xl font-bold">Step Two</h1>
      <p className="text-gray-500">Enter your favorite color</p>
      <div className="mt-4 ">
        <label className="label">Color</label>
        <input
          type="text"
          name="color"
          id="color"
          className="input-primary input input-bordered"
          value={Password2.color}
          onChange={(e) =>
            setPassword2({ ...Password2, color: e.target.value })
          }
        />
      </div>
      <div className="mt-4 flex w-full items-center justify-center">
                <button className="btn btn-primary" onClick={validateNext}>
Next</button>
      </div>
    </div>
  );
}

export default Password2;
