import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { login } from "../middlewares/auth.middleware";
import { resetAllMessages } from "../store/slices/auth.slice";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { LoginSuccess } = useSelector((state) => state.auth);

  useEffect(() => {
    if (LoginSuccess) {
      
      dispatch(resetAllMessages());
      navigate("/");
    }
  }, [LoginSuccess]);

  const handleSubmit = (values) => {
    dispatch(login(values));
  };

  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    onSubmit: handleSubmit,
    //   validationSchema: adminSchema.LoginSchema(),
  });

  return (
    <main className="h-[100vh] flex flex-col gap-3 justify-center items-center bg-img">
      <div className="login-wrapper">
      <h2 className="">Sign In</h2>
      <div className="flex flex-col gap-3 l-inner-wrap">
        <div className="flex flex-col justify-evenly gap-2">
          <div className=" ">
            <input type="email" name="email" placeholder="Email" value={formik.values.email} onChange={formik.handleChange} className="p-2 outline-none rounded-md" />
          </div>
          {formik.errors.email && <p className="text-red-600 inline-block">{formik.errors.email}</p>}
        </div>
        <div className="flex flex-col justify-evenly gap-2">
          <div className="">
            <input type={"password"} name="password" value={formik.values.password} onChange={formik.handleChange} placeholder="Password" className="p-2 outline-none rounded-md" />
          </div>
          {formik.errors.password && <p className="text-red-600 inline-block">{formik.errors.password}</p>}
        </div>
        <div className="flex justify-center gap-2 ">
          <input type="checkbox" name="remember" placeholder="" />
          <p>Remember me</p>
        </div>

        <button type="submit" className="py-2 px-3 rounded-md btn-primary" onClick={formik.handleSubmit}>
          Submit
        </button>
      </div>
      </div>
    </main>
  );
}
