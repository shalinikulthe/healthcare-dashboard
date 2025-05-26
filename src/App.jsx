import "./App.css";
import Verticalbar from "./components/sidebar";
import DashboardMainContent from "./pages/dashboared/DashboardMainContent";
import Header_v2 from "./components/Header_v2";

function App() {
  return (
    <div className="h-[100%] overflow-hidden w-full bg-blue-100 p-4">
      <div className="flex flex-col bg-white  rounded-3xl h-full relative">
        <div className="w-full  h-[15%] flex items-center rounded-t-3xl">
          <Header_v2 />
        </div>
        <div className="flex flex-row w-full rounded-b-3xl bg-white h-[85%]">
          <div className="w-[20%]">
            <Verticalbar />
          </div>
          <div className="w-[80%] h-[100%]  rounded-br-3xl">
            <DashboardMainContent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

