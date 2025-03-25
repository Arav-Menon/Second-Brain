import { Logo } from "../ui/Logo";
import { Buttons } from "../ui/Button";
import { Plus, Share2 } from "lucide-react";
import { LogoutIcon } from "../Icons/Logout";

export const AppBar2 = () => {
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

            <LogoutIcon/>

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
              />
          </div>
        </div>
      </section>
      <hr className="h-px my bg-gray-700 border-1" />
    </>
  );
};
