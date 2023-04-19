function Password1({ Password1, setPassword1, validateNext }) {
  // A password component which will ask user for username and password
  return (
    <div className="border border-3 p-32 rounded-lg">
      <h1 className="text-2xl font-bold">Step One</h1>
      <p className="text-gray-500">Enter your username and password</p>
      <div className="mt-4 ">
        <label className="label">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          className="input-primary input input-bordered"
          value={Password1.email}
          onChange={(e) =>
            setPassword1({ ...Password1, email: e.target.value })
          }
        />
      </div>
      <div className="mt-4">
        <label className="label">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="input-primary input input-bordered"
          value={Password1.password}
          onChange={(e) =>
            setPassword1({ ...Password1, password: e.target.value })
          }
        />
      </div>
      <div className="mt-4 flex w-full items-center justify-center">
        <button className="btn btn-primary" onClick={validateNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Password1;
