import { Buttons } from "../ui/Button";
import { Logo } from "../ui/Logo";
import { useNavigate } from "react-router-dom";

export const AppBar = () => {
  const navigate = useNavigate();

  const onHandleClick = () => {
    navigate("/signup");
  };

  return (
    <>
      <div className="flex justify-between p-5  ">
        <Logo
          size="md"
          text="Second Brain"
          logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIVVDojWh9GIYre9x6zVpSmN5w4jdD8bz3VTVzfqy9SLjLWr7mkT6hTK3LpOHeKfCDjQg&usqp=CAU"
        />

        <Buttons
          text={"Join us"}
          variants="primary"
          size="sm"
          // onClick={onHandleClick}
          onClick={() => onHandleClick()}
        />
      </div>
    </>
  );
};
