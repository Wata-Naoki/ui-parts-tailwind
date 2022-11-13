import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { WideCard } from "./components/WideCard";
import { Main } from "./pages/Main";
import { Product } from "./pages/Product";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import TwitterHome from "./pages/TwitterHome";
export default function App() {
  return (
    <div className="">
      <RecoilRoot>
        <Router>
          <Routes>
            {/* <Route path="/sign-up" element={<SignUp />} /> */}
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/" element={<Main />} />
            <Route path="/product" element={<Product />} />
            <Route path="/twitter" element={<TwitterHome />} />
            {/* <Route path="/product" element={<Main />} /> */}
          </Routes>
        </Router>
      </RecoilRoot>
    </div>
  );
}
