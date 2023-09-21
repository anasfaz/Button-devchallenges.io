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
        <Button disableShadow />
      </div>
      <div className="py-5 grid grid-cols-2 grid-rows-1 gap-4">
        <div>
        <p className="mb-4"></p>
        <Button disabled />
        </div>
       
        <div className="">
          <p className="mb-4"></p>
          <Button disabled variant='text' />
        </div>
      </div>
      <div className="py-5 grid grid-cols-2 grid-rows-1 gap-4">
        <div>
        <p className="mb-4"></p>
        <Button startIcon='local_grocery_store' />
        </div>
       
        <div className="">
          <p className="mb-4"></p>
          <Button  />
        </div>
      </div>

      <div className="py-5 grid grid-cols-3 grid-rows-1 gap-12">
        <div>
        <p className="mb-4"></p>
          <Button />
        </div>
        <div>
        <p className="mb-4"></p>
          <Button />
        </div>
        <div >
        <p className="mb-4"></p>
          <Button startIcon='local_grocery_store'/>
        </div>
      </div>
    </div>
  );
};

export default ButtonPage;
