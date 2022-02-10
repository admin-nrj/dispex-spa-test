import './App.css';
import AddressSelector from "./components/AddressSelector/AddressSelector";
import {Provider} from "react-redux";
import {store} from "./store/store";
import ClientsList from "./components/clientsList/clientsList";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <AddressSelector/>
                <ClientsList/>
            </Provider>
        </div>
    );
}

export default App;
