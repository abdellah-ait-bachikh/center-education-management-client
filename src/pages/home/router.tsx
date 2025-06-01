import { Route } from "react-router-dom";
import Layout from "../../Layout";


export const homeRouter = (
    <Route path="/" element={<Layout />} >
        <Route index element={<h1>Home</h1>} /></Route>

) 