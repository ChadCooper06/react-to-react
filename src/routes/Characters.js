import React, {useEffect, useState} from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";
import { getData1 } from "../utils/data";

export default function Characters() {
    const CHARACTERS = 'Characters';
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        let data = getLocalStorage(CHARACTERS);
        if (data.length > 0) {
            setCharacters(data);
        } else {
            getData1(CHARACTERS)
            .then((data) => {
                setCharacters(data);
                setLocalStorage(CHARACTERS, data);
            })
        }
    }, []);

    return (
        <main style={{ padding: "1rem 0" }} className="container">
      <div className="row text-center justify-content-center gap-2">
        <h2>Characters</h2>
        {characters.map((character) => <Character key={character} character={character} />)}
      </div>
    </main>
    ) 
}

const Character = ({ character }) => {
    return (
        <div className="char-card col-3">
        <div className="char-card-body">
            {character.name} && <h2 className="char-card-title">{character.name}</h2>
            <div><strong>House:</strong>{character.house}</div>
            <div><strong>Ancestry:</strong>{character.ancestry}</div>
            <div><strong>Eye Color:</strong>{character.eyeColor}</div>
            <div><strong>Wand:</strong>{character.wand}</div>
            <div><strong>Patronus:</strong>{character.patronus}</div>
        </div>
    </div>
    )
  }