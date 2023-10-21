import { Button } from "./components/button/Button";

const ButtonPage = () => {
  return (
    <div className="flex flex-grow flex-col bg-white ">
      <h5 className="  text-[24px] text-[#4F4F4F]  font-semibold leading-[normal] not-italic font-family: Poppins">
        Buttons
      </h5>
      <div className="py-5 ">
        <p className="mb-4">{ "<Button />"}</p>
        <Button />
      </div>
      <div>
        <p className="mb-4">{" <Button variant='outline' />" }</p>
        <Button variant="outline" />
      </div>
      <div className="py-5">
        <p className="mb-4">{"<Button variant='text' /> " }</p>
        <Button variant="text" />
      </div>
      <div className="py-5">
        <p className="mb-4">{"<Button disabled />" }</p>
        <Button disableShadow />
      </div>
      <div className="py-5 grid grid-cols-2 grid-rows-1 gap-4">
        <div>
        <p className="mb-4">{" <Button disabled />"}</p>
        <Button disabled />
        </div>
       
        <div className="">
        <p className="mb-4">{"<Button disabled variant='text' />"}</p>
          <Button disabled variant='text' />
        </div>
      </div>
      <div className="py-5 grid grid-cols-2 grid-rows-1 gap-4">
        <div>
        <p className="mb-4 overflow-auto">{"<Button  startIcon='local_grocery_store' />"}</p>
        <Button startIcon='local_grocery_store' />
        </div>
       
        <div className="">
          <p className="mb-4">{"<Button  endIcon='local_grocery_store' />"}</p>
          <Button  endIcon='local_grocery_store' />
        </div>
      </div>

      <div className="py-5 grid grid-cols-3 grid-rows-1 gap-12">
        <div>
        <p className="mb-4"></p>
          <Button size="sm"/>
        </div>
        <div>
        <p className="mb-4"></p>
          <Button size="md" />
        </div>
        <div >
        <p className="mb-4"></p>
          <Button size="lg"/>
        </div>
      </div>
    </div>
  );
};

export default ButtonPage;
