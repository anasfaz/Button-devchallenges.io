import PropTypes from "prop-types";
import CartIcon from "../icon/CartIcon";
export const Button = ({ variant, disableShadow ,disabled,startIcon}) => {
 
  const ButtonType = {
    outline:
      "w-[88px] h-9 rounded-md border-[1px] border-solid border-[#3D5AFE] hover:bg-blue-600 hover:bg-opacity-10 text-center text-blue-600 text-sm font-medium font-['Noto Sans JP']",
    default:
      "bg-[#E0E0E0] hover:bg-[#AEAEAE] w-[88px] h-9 shrink-0 text-[#3F3F3F] not-italic text-center text-sm leading-10 font-medium shadow-sm  rounded-md",

    text: " w-[88px] h-9 rounded-md border-[1px] border-solid border-white !bg-white hover:!bg-blue-600 hover:!bg-opacity-10  text-center text-blue-600 text-sm font-medium font-['Noto Sans JP']",
    local_grocery_store:"w-[105px] h-9 rounded-md  bg-blue-600 px-5 py-2.5 text-center inline-flex items-center mr-4  text-white text-sm font-medium font-['Noto Sans JP']",
  };

  let className =
    ButtonType[variant] ||  ButtonType[startIcon] || ButtonType.default;
  if (disableShadow) {
    className =
      "w-[88px] h-9 rounded-md bg-blue-600 text-center text-white text-sm font-medium font-['Noto Sans JP']";
  }
  if (disabled) {
       className=className+ "w-[88px] h-9 rounded-md !text-[#9E9E9E] bg-[#E0E0E0] text-center not-italic leading-[normal] font-semibold"
  }
  return <button className={className}>{startIcon&&<CartIcon/>} {disabled ? "Disabled" : "Default"}
  </button>;
};
Button.propTypes = {
  variant: PropTypes.oneOf(["outline", "default","text"]), // Define the expected values for the variant prop
  disableShadow: PropTypes?.bool,
  disabled: PropTypes?.bool,
  startIcon: PropTypes?.string,
};
