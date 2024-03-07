'use client'

// components/TradingNumbers.tsx
import React, { useState, useEffect } from 'react';

const getRandomNumber = (index: number): number => {
  const isEven = index % 2 === 0;
  const range = isEven ? 329 : 14.88; // Ajustando o range para números positivos ou negativos
  const multiplier = isEven ? 1 : -1; // Adicionado multiplicador para garantir sinais corretos
  const randomNumber = Math.random() * range;
  return isEven ? randomNumber : -randomNumber; // Invertendo sinal para números ímpares (loss)
};

const TradingNumbers: React.FC = () => {
  const [tradingValues, setTradingValues] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newValue = getRandomNumber(tradingValues.length);
      setTradingValues((prevValues: number[]) => [...prevValues, newValue]);
    }, 2000);

    return () => clearInterval(interval);
  }, [tradingValues]);

  return (
    <div className="fixed flex flex-col items-start justify-end left-0 right-0 top-0 bottom-0 pointer-events-none">
      {tradingValues.map((value, index) => (
        <div
          key={index}
          className={`text-xl font-bold fade-up delay-${index} ${
            value > 0 ? 'text-green-500' : 'text-red-500'
          }`}
          style={{
            position: 'absolute',
            left: index % 2 === 0 ? '1rem' : 'auto',
            right: index % 2 !== 0 ? '1rem' : 'auto',
            bottom: `${-index * 10}%`, // Ajuste negativo em porcentagem para ir até o topo
            animation: `fade-up 5s linear ${index * 2}s both`, // Ajuste conforme necessário
            zIndex: 1000 - index,
          }}
        >
          {value > 0 ? `+${value.toFixed(2)}%` : `${value.toFixed(2)}%`}
        </div>
      ))}
      <style jsx global>{`
        @keyframes fade-up {
          from {
            transform: translateY(100%);
            opacity: 0.5;
          }
          to {
            transform: translateY(-10000%);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default TradingNumbers;
