import './App.css';
import DropDownSearch from "./components/dropDownSearch/DropDownSearch";

function App() {
  return (
    <div className="App">
      start
        <DropDownSearch placeholder={'Улица'} width={200}/>
        <DropDownSearch placeholder={'Дом'} width={100}/>
    </div>
  );
}

export default App;
