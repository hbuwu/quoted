import React, { useState, useEffect } from 'react';
import quotes from '../data/quotes.json'
import randomIntFromInterval from '../functions/randomNumber.js'
import styled from "styled-components";

const QuoteP = styled.p`
    font-weight: bold;
    margin-bottom: 1rem;
`;

export default function Footer() {

    const [quote, setQuote] = useState(quotes[0]);

    useEffect(() => {
        document.title = `Current quote: ${quote.quote}`;
        return () => {
          console.log(`Previous quote: ${quote.quote}`);
        };
      });

    return (
        <footer>
            <h3>Random Quote Database</h3>
            <QuoteP>Quote:</QuoteP>
            <p>"{quote.quote}"</p>
            <p>By: {quote.author} </p>
            <button onClick={function () {
                setQuote(quotes[randomIntFromInterval(0, quotes.length - 1)]);
            }}>
                Click for other quote
            </button>
        </footer>
    );
}