import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponentA from "./gender";
//import ComponentA from "./components/gender";
import ComponentB from "./age";
import ComponentC from "./radio";


const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ComponentA/>}/>
                <Route path="/age" element={<ComponentB/>}/>
                <Route path="/radio" element={<ComponentC/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Routers