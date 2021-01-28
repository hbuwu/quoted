import React from 'react';
import Quote from '../components/Quote.js'
import quotes from '../data/quotes.json'

export default function Quotes() {
    return (
        <div>
            <h2>
                All Quotes
            </h2>

            <h3>
                List of all currently available quotes
            </h3>

            <ul>
                {quotes.map((props, i) => (
                    <Quote key={i} {...props} />
                ))}
            </ul>

        </div>
    );
}

