import { Provider } from "react-redux";
import Store from "./utils/appStore";
import Body from "./components/Body";
function App() {
  return (
    <Provider store={Store}>
      <Body />
    </Provider>
  );
}

export default App;
