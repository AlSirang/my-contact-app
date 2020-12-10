import React from "react";
import Cards from "./Cards";
import Heading from "./Heading";
import Avatar from "./Avatar";

export default function App() {
    return (
        <div>
            <Heading />

            <Avatar imgURL="https://avatars3.githubusercontent.com/u/53249936?s=460&u=852decead0de2fb38913af69d8180157d62814fe&v=4" />
            <Cards />
        </div>
    );
}
