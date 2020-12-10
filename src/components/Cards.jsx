import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createCard(contact) {
    return (
        <Card
            key={contact.id}
            name={contact.name}
            imgURL={contact.imgURL}
            phone={contact.phone}
            email={contact.email}
        />
    );
}

export default function Cards() {
    return contacts.map(createCard);
}
