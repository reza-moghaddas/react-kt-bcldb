import React, { useState } from "react";
import UserList from "./UserList";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
function AddUser() {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [userObj1, setUserObj] = useState([]); // State to hold user data

    function handleFormSubmit(userObj) {
        console.log('handling Submit');
    setUserObj([...userObj1, userObj]); // Update user data in state
    console.log(userObj1);
  }
  return (
    <div>
      <h1 className="heading text-center display-5">User Registration Form</h1>
      <form
        className="w-50 mx-auto mt-1"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <div className="container">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              {...register("name", {
                required: true,
                minLength: 4,
                maxLength: 8,
              })}
            />
          </div>
          {errors.name?.type === "required" && (
            <p className="form-error">Name is mandatory</p>
          )}
          {errors.name?.type === "minLength" && (
            <p className="form-error">
              Name should be at least 4 characters
            </p>
          )}
          {errors.name?.type === "maxLength" && (
            <p className="form-error">
              Name should be at most 8 characters
            </p>
          )}
          <div className="mb-3">
            <label htmlFor="credentials" className="form-label">
              Credentials
            </label>
            <input
              type="text"
              id="credentials"
              className="form-control"
              {...register("credentials", { required: false })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <textarea
              id='title'
              className="form-control"
              rows={4}
              cols={40}
              {...register("title", { required: true })}
            />
            {/* <input
              type="text"
              id="title"
              className="form-control"
              {...register("title", { required: true })}
            /> */}
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              className="form-control"
              {...register("phone", { required: true })}
            />
          </div>
          {errors.phone?.type === "required" && (
            <p className="form-error">phone is mandatory</p>
          )}
          {errors.phone?.type === "length" && (
            <p className="form-error">
              Phone should be 10 numbers
            </p>
          )}
          <div className="mb-3">
            <label htmlFor="fax" className="form-label">
              Fax
            </label>
            <input
              type="text"
              id="fax"
              className="form-control"
              {...register("fax", { required: false })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cell" className="form-label">
              Cell
            </label>
            <input
              type="text"
              id="cell"
              className="form-control"
              {...register("cell", { required: false })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="form-control"
              {...register("email", { required: true })}
            />
          </div>
          {errors.email?.type === "required" && (
            <p className="form-error">phone is mandatory</p>
          )}
        </div>
        <button htmlFor="submit" className="btn btn-success">
          Add User
        </button>
      </form>

      <UserList users={userObj1} />
    </div>
  );
}

export default AddUser;
