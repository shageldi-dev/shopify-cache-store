import { Provider } from "react-redux";
import { store } from "./store/store";
import Router from "./components/common/Router";
import { ConfigProvider } from "antd";
import { lightTheme } from "./theme/theme";

function App() {
  return (
    <Provider store={store}>
      <ConfigProvider theme={lightTheme}>
        <Router />
      </ConfigProvider>
    </Provider>
  );
}

export default App;
