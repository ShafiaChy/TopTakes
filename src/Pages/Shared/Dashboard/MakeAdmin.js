import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    e.preventDefault();
    const user = { email };

    fetch("https://my-photography-server-shafiachy.vercel.app/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("Admin successfully made!");
        }
      });
  };

  return (
    <>
      <Navigation></Navigation>
      <div style={{ height: "100vh" }} className="bg-light pt-5">
        <h1 className="text-center mt-5">Make Admin</h1>
        <form onSubmit={handleAdminSubmit}>
          <div className="row mb-3 ">
            <div className="col-sm-10 mx-auto">
              <input
                type="email"
                onBlur={handleEmailChange}
                placeholder="Enter admin's email address"
                className="form-control mx-auto w-50"
                id="inputEmail3"
                required
              />
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <button
              type="submit"
              style={{ backgroundColor: "black" }}
              className="btn text-white mb-3"
            >
              Make Admin
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MakeAdmin;
