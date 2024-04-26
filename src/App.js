import { Provider } from "react-redux";
import Body from "./component/Body";
import appStore from "./Redux/appStore";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </>
  );
}

export default App;
