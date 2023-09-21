import PropTypes from "prop-types";

export const Button = ({ variant, disableShodw ,disabled}) => {
  console.log(disableShodw);
  const ButtonType = {
    outline:
      "w-[88px] h-9 rounded-md border-[1px] border-solid border-[#3D5AFE] hover:bg-blue-600 hover:bg-opacity-10 text-center text-blue-600 text-sm font-medium font-['Noto Sans JP']",
    default:
      "bg-[#E0E0E0] hover:bg-[#AEAEAE] w-[88px] h-9 shrink-0 text-[#3F3F3F] not-italic text-center text-sm leading-10 font-medium shadow-sm  rounded-md",

    text: " w-[88px] h-9 rounded-md border-[1px] border-solid border-white !bg-white hover:!bg-blue-600 hover:!bg-opacity-10  text-center text-blue-600 text-sm font-medium font-['Noto Sans JP']",
  };

  let className =
    ButtonType[variant] || ButtonType[disableShodw] || ButtonType.default;
  if (disableShodw) {
    className =
      "w-[88px] h-9 rounded-md bg-blue-600 text-center text-white text-sm font-medium font-['Noto Sans JP']";
  }
  if (disabled) {
       className=className+ "w-[88px] h-9 rounded-md !text-[#9E9E9E] bg-[#E0E0E0] text-center not-italic leading-[normal] font-semibold"
  }
  return <button className={className}>{disabled? "Disabled":"Default" }</button>;
};
Button.propTypes = {
  variant: PropTypes.oneOf(["outline", "default"]), // Define the expected values for the variant prop
  disableShodw: PropTypes.boolean,
  disabled:PropTypes.boolean
};
