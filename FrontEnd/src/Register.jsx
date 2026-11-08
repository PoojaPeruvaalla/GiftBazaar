// import React from 'react'

import { Link } from "react-router"

const Register = () => {
    const color = "pink-700";
  return (
    <>
     <div className="min-h-screen flex justify-center items-center bg-pink-100">

      <fieldset className="w-98 border border-gray-400 rounded-lg p-6 bg-pink-50 shadow-lg">

        <form>
          <h2 className={` text-${color} text-2xl font-bold text-center mb-5 `}>
            Register
          </h2>

          <label htmlFor="emailID" className="block mb-2">
            Email
          </label>

          <input
            type="email"
            id="emailID"
            className="w-98 border border-gray-300 rounded p-2 mb"
          />

          <label htmlFor="pswd" className="block mb-2">
            Create Password
          </label>

          <input
            type="password"
            id="pswd"
            className="w-full border border-gray-300 rounded p-2 mb-4"
          />
            <label htmlFor="pswd" className="block mb-2">
            Confirm Password
          </label>

          <input
            type="password"
            id="pswd"
            className="w-full border border-gray-300 rounded p-2 mb-4"
          />

          <div className="flex gap-3">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Register
            </button>

            <button
              type="reset"
              className="bg-gray-400 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>

          <p className="mt-4 text-center">
            Already have an account? <Link to="/login">Login Now</Link>
          </p>

        </form>
      </fieldset>

    </div>
    </>
  )
}

export default Register