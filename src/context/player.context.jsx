import { useState, createContext } from 'react';

const PlayerContext = createContext();

function PlayerWrapper(props) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [radio, setRadio] = useState({
        url: "",
        name: "",
        image: ""
    });

    const play = (name, url, image) => {
        setRadio({
            name: name,
            url: url,
            image: image
        });
        setIsPlaying(true);
    };

    return (
        <PlayerContext.Provider value={{ play, isPlaying, radio }}>
            {props.children}
        </PlayerContext.Provider>
    );
}

export { PlayerContext, PlayerWrapper };