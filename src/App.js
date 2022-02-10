import './App.css';
import DropDownSearch from "./components/dropDownSearch/DropDownSearch";

const list=[
  {id:1, label:"1"},
  {id:2, label:"2"},
  {id:3, label:"3"},
  {id:4, label:"4"},
  {id:5, label:"5"},
  {id:6, label:"6"},
]

function App() {
  return (
    <div className="App">
      start
        <DropDownSearch placeholder={'Улица'} width={200} list={list}/>
        <DropDownSearch placeholder={'Дом'} width={100}/>
        <DropDownSearch placeholder={'Кв'} width={100}/>
    </div>
  );
}

export default App;
