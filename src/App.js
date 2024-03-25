import { Provider } from "react-redux";
import Store from "./utils/appStore";
import Body from "./components/Body";
import DummyTest from "./DummyTest";
function App() {
  return (
    <Provider store={Store}>
      <Body />
    </Provider>
  );
}

export default App;
