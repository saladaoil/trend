import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponentA from "./component/ComponentA";
import ComponentB from "./component/ComponentB";

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ComponentA/>}/>
                <Route path="/componentb" element={<ComponentB/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Routers