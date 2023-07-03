import React, { useState } from 'react';

const SmileVote = () => {
    const [smiles, setSmiles] = useState([
        { id: 1, name: '😃', count: 0 },
        { id: 2, name: '😊', count: 0 },
        { id: 3, name: '🥳', count: 0 },
    ]);
    const [showResults, setShowResults] = useState(false);
    const [winner, setWinner] = useState(null);

    const handleVote = (id) => {
        setSmiles((prevSmiles) =>
            prevSmiles.map((smile) =>
                smile.id === id ? { ...smile, count: smile.count + 1 } : smile
            )
        );
    };

    const handleShowResults = () => {
        const maxCount = Math.max(...smiles.map((smile) => smile.count));
        const winningSmile = smiles.find((smile) => smile.count === maxCount);
        setWinner(winningSmile);
        setShowResults(true);
    };

    return (
        <div>
            <h1>Голосування за найкращий смайлик</h1>
            <ul>
                {smiles.map((smile) => (
                    <li key={smile.id}>
                        <span>{smile.name}</span>
                        <button onClick={() => handleVote(smile.id)}>Голосувати</button>
                        <span>  Кількість голосів: {smile.count}</span>
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