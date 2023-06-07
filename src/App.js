import Time from "./components/Time";
import Weather from "./components/Weather";
import Date from "./components/Date";
import { Quote } from "./components/Quote";


function App() {
  return (
    <div className="App w-full h-screen  bg-no-repeat bg-cover bg-center text-white" style={{backgroundImage:`url(https://source.unsplash.com/featured/?nature)`}}>
     <div className=" flex justify-between">
     <Weather></Weather>
      
      <Date></Date>
     </div>
     
      <Time></Time>
      <Quote></Quote>
      
    
    </div>
  );
}

export default App;
