import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponentB from "./ComponentB";
import Gender from "./components/gender";

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Gender/>}/>
                <Route path="/componentb" element={<ComponentB/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Routers