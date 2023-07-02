import React, { useState } from 'react';

const SmileVote = () => {
    const [smileys, setSmileys] = useState([
        { id: 1, name: '😃', count: 0 },
        { id: 2, name: '😊', count: 0 },
        { id: 3, name: '🥳', count: 0 },
    ]);
    const [showResults, setShowResults] = useState(false);
    const [winner, setWinner] = useState(null);

    const handleVote = (id) => {
        setSmileys((prevSmileys) =>
            prevSmileys.map((smiley) =>
                smiley.id === id ? { ...smiley, count: smiley.count + 1 } : smiley
            )
        );
    };

    const handleShowResults = () => {
        const maxCount = Math.max(...smileys.map((smiley) => smiley.count));
        const winningSmiley = smileys.find((smiley) => smiley.count === maxCount);
        setWinner(winningSmiley);
        setShowResults(true);
    };

    return (
        <div>
            <h1>Голосування за найкращий смайлик</h1>
            <ul>
                {smileys.map((smiley) => (
                    <li key={smiley.id}>
                        <span>{smiley.name}</span>
                        <button onClick={() => handleVote(smiley.id)}>Голосувати</button>
                        <span>  Кількість голосів: {smiley.count}</span>
                    </li>
                ))}
            </ul>
            <button onClick={handleShowResults}>Показати результати</button>
            {showResults && (
                <div>
                    <h2>Переможець:</h2>
                    <span>{winner.name}</span>
                </div>
            )}
        </div>
    );
};

export default SmileVote;