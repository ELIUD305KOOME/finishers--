import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
// import "./MechanicSignup.css";

function AdminRegister() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [profilePicture, setProfilePicture] = useState(null);

  useEffect(() => {
    return () => setMessage("");
  }, []);

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      phone_number: "",
      expertise: "",
      bio: "",
      password: "",
      password2: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("First name is required"),
      last_name: Yup.string().required("Last name is required"),
      username: Yup.string().required("Username is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone_number: Yup.string().required("Phone number is required"),
      expertise: Yup.string().required("Expertise is required"),
      bio: Yup.string().required("Bio is required"),
      password: Yup.string().required("Password is required"),
      password2: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      const formData = new FormData();
      Object.keys(values).forEach((key) => {
        formData.append(key, values[key]);
      });
      if (profilePicture) {
        formData.append("profile_picture", profilePicture);
      }

      try {
        const response = await fetch(
          "http://127.0.0.1:5000/mechanic_auth/register",
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await response.json();
        setMessage(data.msg);

        if (response.ok) {
          resetForm();
          setProfilePicture(null);
          navigate("/mechanic_login");
        } else {
          console.error("Error:", data);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    },
  });

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-xl">
  <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Signup</h1>
  <form onSubmit={formik.handleSubmit} className="space-y-4">
    <input
      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      name="first_name"
      type="text"
      placeholder="Enter your first name"
      {...formik.getFieldProps("first_name")}
    />
    {formik.touched.first_name && formik.errors.first_name && (
      <div className="text-red-500 text-sm">{formik.errors.first_name}</div>
    )}

    <input
      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      name="last_name"
      type="text"
      placeholder="Enter your last name"
      {...formik.getFieldProps("last_name")}
    />
    {formik.touched.last_name && formik.errors.last_name && (
      <div className="text-red-500 text-sm">{formik.errors.last_name}</div>
    )}

    <input
      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      name="username"
      type="text"
      placeholder="Enter a Username"
      autoComplete="username"
      {...formik.getFieldProps("username")}
    />
    {formik.touched.username && formik.errors.username && (
      <div className="text-red-500 text-sm">{formik.errors.username}</div>
    )}

    <input
      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      name="email"
      type="email"
      placeholder="Enter your Email"
      autoComplete="email"
      {...formik.getFieldProps("email")}
    />
    {formik.touched.email && formik.errors.email && (
      <div className="text-red-500 text-sm">{formik.errors.email}</div>
    )}

    <input
      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      name="phone_number"
      type="text"
      placeholder="Enter your Phone Number"
      {...formik.getFieldProps("phone_number")}
    />
    {formik.touched.phone_number && formik.errors.phone_number && (
      <div className="text-red-500 text-sm">{formik.errors.phone_number}</div>
    )}

    <label className="block font-medium text-gray-700">Profile Picture</label>
    <input
      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      type="file"
      name="profile_picture"
      onChange={(e) => setProfilePicture(e.currentTarget.files[0])}
    />

    <input
      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      name="expertise"
      type="text"
      placeholder="Enter your field of Expertise"
      {...formik.getFieldProps("expertise")}
    />
    {formik.touched.expertise && formik.errors.expertise && (
      <div className="text-red-500 text-sm">{formik.errors.expertise}</div>
    )}

    <textarea
      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      name="bio"
      placeholder="Write a bio about yourself"
      {...formik.getFieldProps("bio")}
    />
    {formik.touched.bio && formik.errors.bio && (
      <div className="text-red-500 text-sm">{formik.errors.bio}</div>
    )}

    <input
      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      name="password"
      type="password"
      placeholder="Enter a strong Password"
      autoComplete="new-password"
      {...formik.getFieldProps("password")}
    />
    {formik.touched.password && formik.errors.password && (
      <div className="text-red-500 text-sm">{formik.errors.password}</div>
    )}

    <input
      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      name="password2"
      type="password"
      placeholder="Confirm the Password"
      autoComplete="new-password"
      {...formik.getFieldProps("password2")}
    />
    {formik.touched.password2 && formik.errors.password2 && (
      <div className="text-red-500 text-sm">{formik.errors.password2}</div>
    )}

    <button
      type="submit"
      disabled={!formik.isValid}
      className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200 disabled:opacity-50"
    >
      Sign Up
    </button>
  </form>

  {message && (
    <p className="mt-4 text-center text-green-600 font-medium">{message}</p>
  )}

  <div className="mt-4 text-center">
    <Link to="/mechanic_login" className="text-blue-600 hover:underline">
      Already have an account? Login here
    </Link>
  </div>
</div>

  );
}

export default AdminRegister;