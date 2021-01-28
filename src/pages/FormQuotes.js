import React from 'react';
import AddQuote from '../components/AddQuote';
import styled from 'styled-components'

const StyledH3 = styled.h3`
    margin-bottom: 0;
`;

export default function FormQuotes() {

    return(
        <div>
            <h2>
                Form Quotes
            </h2>

            <AddQuote />

            <StyledH3>
                Made quotes will be visible as pop-up afterwards.
                (Additional feature for added quotes to be displayed will be added in the future)
            </StyledH3>

        </div>
    );
}