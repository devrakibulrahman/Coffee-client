import { createContext, useEffect, useState } from "react";

const CardContext = createContext(null);

const CardProvider = ({children}) => {
    const [card, setCard] = useState([]);

    useEffect(() => {
        fetch('/public/api/api.json')
        .then(res => res.json())
        .then(data => setCard(data))
        .catch(err => console.log(err))
    }, []);

    const cardInfo = {
        card,
    };

    return (
        <CardContext.Provider value={cardInfo}>
            {children}
        </CardContext.Provider>
    );
}

export {CardContext, CardProvider};