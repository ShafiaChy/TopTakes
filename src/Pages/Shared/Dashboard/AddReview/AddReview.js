import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Navigation from "../../Navigation/Navigation";
import "./AddReview.css";
import useAuth from "../../../../Hooks/useAuth";
const AddReview = () => {
  //react hook form used to get the data from add your review form
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    data.image = data.image[0];
    axios
      .post("https://my-photography-server-shafiachy.vercel.app/reviews", data)
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          alert("successfully added");
          reset();
        }
      });
  };
  return (
    <>
      <Navigation></Navigation>
      <div style={{ height: "100vh" }} className="bg-light py-5 bg-pic">
        <div style={{ backgroundColor: "rgba(0, 0, 0, 0.781)" }}>
          {" "}
          <h2 className="mt-5" id="fh2">
            WE APPRECIATE YOUR REVIEW!
          </h2>
          <h6 id="fh6">
            Your review will help us to improve our web hosting quality and
            customer services.
          </h6>
        </div>

        <form id="feedback" onSubmit={handleSubmit(onSubmit)}>
          <div className="pinfo">Your personal info</div>

          <div className="form-group">
            <div className="col-md-12 inputGroupContainer">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-user"></i>
                </span>
                <input
                  name="name"
                  placeholder="John Doe"
                  className="form-control"
                  type="text"
                  defaultValue={user.displayName}
                  {...register("name", { required: true, maxLength: 20 })}
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <div className="col-md-12 inputGroupContainer">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-envelope"></i>
                </span>
                <input
                  name="email"
                  type="email"
                  className="form-control text-dark"
                  defaultValue={user.email}
                  {...register("email", { required: true })}
                />
              </div>
            </div>
          </div>

          <div className="pinfo">Rate our overall services.</div>

          <div className="form-group">
            <div className="col-md-12 inputGroupContainer">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-heart"></i>
                </span>
                <select
                  className="form-control"
                  id="rate"
                  {...register("rate")}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
          </div>

          <div className="pinfo">Write your feedback.</div>

          <div className="form-group">
            <div className="col-md-12 inputGroupContainer">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-pencil"></i>
                </span>
                <textarea
                  className="form-control"
                  id="review"
                  rows="3"
                  {...register("review")}
                />
              </div>
            </div>
          </div>
          <div className="input-group">
            <span className="input-group-addon">
              <i class="fa fa-picture-o" aria-hidden="true"></i>
            </span>
            <input
              accept="image/*"
              type="file"
              className="form-control text-dark"
              {...register("image")}
            />
            {/* <input
                    accept="image/*"
                    type="file"
                    // onChange={e => setImage(e.target.files[0])}
                /> */}
          </div>

          <button type="submit" className="btn btn-dark mt-3">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddReview;
