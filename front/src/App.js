import { routes } from "./routes";
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Provider } from "react-redux";
import store from "./store";
import Middleware from "./middleware";
import Dashboard from "./modules/admin/dashboard/containers/Dashboard";
import HeaderAdmin from "./common/containers/HeaderAdmin";
import HeaderUser from "./common/containers/HeaderUser";
import Home from "./modules/store/home/containers/Home";

function App() {
  window.navigate = useNavigate()
  return (
    <Provider store={store}>
      <Routes>
        {routes.map((a, ai) => <Route path={a.path} key={ai} element={<Middleware forceAuth={a.forceAuth} header={null}><a.container /></Middleware>} />)}
        <Route path="/admin/*" index element={<Middleware forceAuth={true} header={<HeaderAdmin />}><Dashboard /></Middleware>} />
        <Route path="/*" index element={<Middleware forceAuth={true} header={<HeaderUser />}><Home /></Middleware>} />
      </Routes>
    </Provider>
  );
}

export default App