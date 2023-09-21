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
        <Button variant="outline" />
      </div>
      <div className="py-5">
        <p className="mb-4"></p>
        <Button variant="text" />
      </div>
      <div className="py-5">
        <p className="mb-4"></p>
        <Button disableShodw />
      </div>
      <div className="py-5 flex justify-between">
        <div>
        <p className="mb-4"></p>
        <Button disabled />
        </div>
       
        <div className="">
          <p className="mb-4"></p>
          <Button disabled variant='text' />
        </div>
      </div>
    </div>
  );
};

export default ButtonPage;
