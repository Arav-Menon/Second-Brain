
interface LogoProps {
  size: "md";
  variants?: "primary";
  text: string;
  logo: string;
  onClick?: () => void;
}

const sizeStyles = {
  md: "h-12",
};

export const Logo = (props: LogoProps) => {
  return (
    <>
      <div onClick={props.onClick} className="cursor-pointer">
        <div className="flex items-center gap-2 ">
          <img src={props.logo} alt="logo" className="w-8 h-8 rounded-lg" onClick={props.onClick} />
          <span className="font-semibold text-xl ">{props.text}</span>
        </div>
      </div>
    </>
  );
};
