import { Button } from "./components/button/Button";

const ButtonPage = () => {
  return (
    <div className="flex flex-grow flex-col bg-white ">
      <h5 className="  text-[24px] text-[#4F4F4F]  font-semibold leading-[normal] not-italic font-family: Poppins">
        Buttons
      </h5>
      <div className="py-5 ">
        <p className="mb-4"></p>
        <Button />
      </div>
      <div>
        <p className="mb-4"></p>
        <Button />
      </div>
    </div>
  );
};

export default ButtonPage;
