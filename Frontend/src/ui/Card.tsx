import { ReactElement } from "react";

interface CardProps {
  variants: "primary";
  size: "lg";
  headerText: string;
  text: string;
  listText: string[];
  startIcons?: ReactElement;
  endIcons?: ReactElement[];
  date?: Date | string;
}

const variantsStyles = {
  primary: "bg-white rounded-[2%] border border-2 [box-shadow:rgba(0,_0,_0,_0.24)_0px_3px_8px] max-w-[350px]",
};

const sizeStyles = {
  lg: "px-3 py-4",
};

const textSize = {
  headStyle: "font-semibold text-2xl flex ",
  iconSizes : "w-5 h-5 text-gray-500 ml-1 cursor-pointer "
};

export const Card = (props: CardProps) => {
  return (
    <>
      <div
        className={`${variantsStyles[props.variants]} ${
          sizeStyles[props.size]
        } `}
      >
        <div>
          <h1 className={`${textSize.headStyle} flex gap-2 items-center `}>
            {props.startIcons} {props.headerText} {props.endIcons?.map((item, index) => (
                <span key={index} className={textSize.iconSizes} >{item}</span>
            ))}
          </h1>
          <hr className="h-px my-3 bg-gray-500 border-0" />
        </div>

        <div>
          <h2 className="font-medium m-5 text-xl ">{props.text}</h2>

          <div className="flex flex-row">
            <ul className="list-disc pl-6 ">
                {props.listText.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
