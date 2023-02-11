// libraries
import React from "react";
import "./SignUp.css";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
// assests
import { FcGoogle } from 'react-icons/fc';
import image from "../assets/image(1).png";

const SignUp = () => {
  const validationSchema = yup.object({
    email: yup.string().email("Invalid email address").required("Email is required"),
    password: yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100vh"}}>
      <div>
        <img src={image} style={{ width: "628px", height: "468px"}}></img>
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", zIndex: "1000" }}>
        <div style={{ backgroundColor: "white", padding: "30px", borderRadius: "10px" }}>
          <h1 style={{ textAlign: "center", marginBottom: "43px", color: "#00A87E", fontSize: "32px", fontWeight: "800" }}>SIGN UP</h1>
          <Formik
            initialValues={{
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              // add code to handle form submission here
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div style={{ marginBottom: "15px" }}>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    style={{ width: "423px", padding: "10px", borderRadius: "10px", background: "rgba(217, 217, 217, 0.35)" }}
                  />
                  {errors.email && touched.email ? (
                    <div style={{ color: "red" }}>{errors.email}</div>
                  ) : null}
                </div>

                <div style={{ marginBottom: "15px" }}>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    style={{ width: "423px", padding: "10px", borderRadius: "10px", background: "rgba(217, 217, 217, 0.35)" }}
                  />
                  {errors.password && touched.password ? (
                    <div style={{ color: "red" }}>{errors.password}</div>
                  ) : null}
                </div>

                <div style={{ marginBottom: "15px" }}>
                  <Field
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    style={{ width: "423px", padding: "10px", borderRadius: "10px", background: "rgba(217, 217, 217, 0.35)" }}
                  />
                  {errors.confirmPassword && touched.confirmPassword ? (
                    <div style={{ color: "red" }}>{errors.confirmPassword}</div>
                  ) : null}
                </div>

                <button type="submit" style={{ width: "423px", marginTop: "30px", padding: "10px", background: "#00A87E", borderRadius: "10px", cursor: "pointer" }}>
                  Sign Up
                </button>
              </Form>
            )}
          </Formik>
          <div style={{ display: "flex", justifyContent: "center"}}>
            {/* <h1 style={{ textAlign: "center", marginTop: "35px", color: "#A5A5A5", fontSize: "16px", fontWeight: "400" }}>Or continue with</h1> */}
            <h1 style={{ textAlign: "center", marginTop: "35px", color: "#A5A5A5", fontSize: "16px", fontWeight: "400" }}>Or continue with</h1>
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "10px"}}>
            <FcGoogle style={{ width: "35px", height: "35px"}}/>
            <FcGoogle style={{ width: "35px", height: "35px"}}/>
            <FcGoogle style={{ width: "35px", height: "35px"}}/>
          </div>
        </div>
      </div>
    </div> );
      
};
export default SignUp;