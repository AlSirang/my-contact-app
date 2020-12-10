import React from "react";
import Card from "./Card";
import Heading from "./Heading";
import contacts from "../contacts";
import Avatar from "./Avatar";

export default function App() {
    return (
        <div>
            <Heading />

            <Avatar imgURL="https://avatars3.githubusercontent.com/u/53249936?s=460&u=852decead0de2fb38913af69d8180157d62814fe&v=4" />
            <Card
                name={contacts[0].name}
                imgURL={contacts[0].imgURL}
                phone={contacts[0].phone}
                email={contacts[0].email}
            />
            <Card
                name={contacts[1].name}
                imgURL={contacts[1].imgURL}
                phone={contacts[1].phone}
                email={contacts[1].email}
            />
            <Card
                name={contacts[2].name}
                imgURL={contacts[2].imgURL}
                phone={contacts[2].phone}
                email={contacts[2].email}
            />
        </div>
    );
}
