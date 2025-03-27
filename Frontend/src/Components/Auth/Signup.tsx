import { useState } from "react";
import { Buttons } from "../../ui/Button";
import { Logo } from "../../ui/Logo";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "./AuthApi";

export const Signup = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
  });


  const onHandleSubmit = async () => {
    const response = await signup(user);

    if(response && response.token) {
      localStorage.setItem('token', response.token);
      navigate('/Note')
    }

  };

  return (
    <>
      <div className="p-7">
        <Logo
          size="md"
          text="Second Brain"
          logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIVVDojWh9GIYre9x6zVpSmN5w4jdD8bz3VTVzfqy9SLjLWr7mkT6hTK3LpOHeKfCDjQg&usqp=CAU"
        />

        <section className="flex">
          <div id="left" className="w-[50%] h-full">
            <div className="flex justify-center flex-col h-screen p-10 ">
              <h1 className="text-8xl font-bold mb-16 ">Welcome!</h1>

              <p className="mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nam
                ad tempore consectetur illum sit reprehenderit nesciunt placeat
                nihil, facere, culpa porro adipisci accusantium neque? Excepturi
                voluptas dolore incidunt eaque.
              </p>

              <Buttons variants="primary" size="sm" text="Learn more" />
            </div>
          </div>
          <div id="right" className="w-[50%] h-full   ">
            <div className="">
              <div className="bg-[#e0e7fe] [box-shadow:rgba(0,_0,_0,_0.24)_0px_3px_8px] p-5 max-w-[350px] flex flex-col">
                <h1 className="font-bold text-2xl text-center mb-3 ">Signup</h1>
                <p className="text-center mb-2">
                  Already have an account{" "}
                  <Link to="/signin" className="underline hover:font-bold">
                    Signin
                  </Link>
                </p>
                <div className="flex flex-col gap-4 justify-center ">
                  <input
                    type="text"
                    placeholder="Username"
                    className="border-2 border-black p-2 rounded-md"
                    onChange={(e) =>
                      setUser({ ...user, userName: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    className="border-2 border-black p-2 rounded-md"
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Password"
                    className="border-2 border-black p-2 rounded-md"
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                  />

                  <div className="ml-24">
                    <Buttons variants="primary" text="Signup" size="md" onClick={onHandleSubmit} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
