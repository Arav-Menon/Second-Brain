import { Logo } from "../ui/Logo";
import { Buttons } from "../ui/Button";
import { Plus, Share2 } from "lucide-react";
import { LogoutIcon } from "../Icons/Logout";
import { useNavigate } from "react-router-dom";

export const AppBar2 = () => {

  const navigate = useNavigate();

  const openPage = () => {

    navigate('/note/add-content');

  }

  const logOutHandle = () => {

    localStorage.removeItem('token');
    navigate('/');
  }

  return (
    <>
      <section>
        <div className="flex justify-between p-5  ">
          <Logo
            size="md"
            text="Second Brain"
            logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIVVDojWh9GIYre9x6zVpSmN5w4jdD8bz3VTVzfqy9SLjLWr7mkT6hTK3LpOHeKfCDjQg&usqp=CAU"
          />

          <div className="flex gap-4 " >

            <button onClick={logOutHandle} ><LogoutIcon/></button>

            <Buttons
              variants="secondary"
              startIcon={<Share2 />}
              text="Share Brain"
              size="sm"
            />
            <Buttons
                variants="primary"
                startIcon={<Plus />}
                text="Add content"
                size="sm"
                onClick={openPage}
              />
          </div>
        </div>
      </section>
      <hr className="h-px my bg-gray-700 border-1" />
    </>
  );
};
