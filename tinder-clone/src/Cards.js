import React, { useState, useEffect } from 'react';
import './Cards.css';
import TinderCard from 'react-tinder-card';
import axios from './axios';

function Cards() {
    const [people, setpeople] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/tinder/cards');

            setpeople(req.data);
        }
        fetchData();
    }, [])

    const swiped = (direction, nameToDelete) => {
        console.log('removing : ' + nameToDelete)
    };

    const outOfFrame = (name) => {
        console.log(name + ' left the screen')
    };

    return (
        <div className="TinderCards">
            <div className="TinderCards__card">
                {people.map((person) => (
                    <TinderCard
                        className="swiped"
                        key={person.name}
                        preventSwipe={['right', 'left']}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => { outOfFrame(person.name) }}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.imgUrl})` }}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))};
            </div>
        </div>
    )
};

export default Cards
