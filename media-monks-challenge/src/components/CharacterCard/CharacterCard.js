import React from "react";

export const CharacterCard = ({character}) => {
    return (
        <div>
            <h2>Name: </h2>
            <p>{character.name}</p>
            <h2>Description: </h2>
            <p>{character.description}</p>
            <h2>Piture: </h2>
            <img src={character.thumbnail.path + "." + character.thumbnail.extension} width="200" height="200" />
        </div>
    )
}