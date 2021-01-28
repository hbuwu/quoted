import React from 'react';
import UserCard from '../components/UserCard';
import styled from "styled-components";

const StyledH3 = styled.h3`
    margin-bottom: 5rem;
`;

export default function Contact() {

    return(
        <div>
            <StyledH3>
                Contact me through GitHub!
            </StyledH3>
            <UserCard username = 'hbuwu' />
        </div>
    );
}