import "./App.css";
import SideBar from "./SideBar";
import ButtonPage from "./ButtonPage";

function App() {
  return (
    <>
      <div className="flex  flex-row">
        <SideBar />
        <main className="ml-20 w-full flex flex-grow flex-col p-4">
          <ButtonPage />
          </main>
        
      </div>
      
    </>
  );
}

export default App;
