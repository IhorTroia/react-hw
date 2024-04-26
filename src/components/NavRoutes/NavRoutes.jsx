import {
    Routes,
    Route,
} from "react-router-dom"

import Home from "../../routes/Home";
import About from "../../routes/About";
import Contacts from "../../routes/Contacts";
import Back from "../../routes/Back";

function NavRoutes() {
    return <Routes>
        <Route path={'/'} element={<Home />}/>
        <Route path={'about'} element={<About />}/>
        <Route path={'contacts'} element={<Contacts />}/>
        <Route path={'back'} element={<Back />} />
        <Route path={'*'} element={
            <div>
                <h1>
                    No page found
                </h1>
            </div>
        }
        />
    </Routes>
}

export default NavRoutes;