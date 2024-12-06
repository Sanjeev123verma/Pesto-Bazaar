import React from "react";
import { MdAttachEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const Login = () => {
  return (
    <>
      <section className=" flex items-center justify-center text-center my-10 ">
        <main>
          <div className=" w-full font-abc flex text-4xl font-black text-center items-center justify-center mb-8 border-b-2">
            <h2> Login </h2>
          </div>

          <div className=" flex flex-col items-center w-[400px] shadow-2xl bg-purple-900 text-white rounded-lg font-abc ">
            <form className="p-8 shadow-2xl bg-[#1c085d]">
              <div className=" flex  items-center  justify-center">
                <label htmlFor="email">
                  {" "}
                  <MdAttachEmail className=" size-6 mr-4" />{" "}
                </label>
                <input
                  className=" border w-full text-base px-2 py-1 rounded-md text-black"
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  id="email"
                  required
                  autoComplete="off"
                />
              </div>
              <br />
              <div className=" flex  items-center  justify-center">
                <label htmlFor="Password">
                  {" "}
                  <RiLockPasswordLine className=" size-6 mr-4" />{" "}
                </label>
                <input
                  className=" border w-full text-base px-2 py-1 rounded-md text-black"
                  type="password"
                  name="Password"
                  placeholder="Enter your Password"
                  id="Password"
                  required
                  autoComplete="off"
                />
              </div>
              <br />
              {/* <button className=' items-center bg-blue-500 rounded-md px-2 p-1 mb-2'> Register </button> */}

              <button
                class="cursor-pointer inline-flex items-center rounded-full px-9 py-3 text-xl font-mono font-semibold text-rose-600 hover:text-white border-2 border-rose-600
                transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-75 hover:bg-rose-600 duration-300  focus:bg-transparent"
              >
                Login
              </button>

              <p className="pt-4">
                {" "}
                Don't have account ?{" "}
                <a href="/Signup" className=" font-bold text-blue-500">
                  Sign Up
                </a>{" "}
                here{" "}
              </p>
            </form>
          </div>
        </main>
      </section>
    </>
  );
};

export default Login;
