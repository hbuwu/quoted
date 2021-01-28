import React from 'react';
import { BsFillChatSquareQuoteFill } from "react-icons/bs";
import styled from "styled-components";

const AuthorP = styled.li`
    padding-top: 2rem;
    border-top: 1px solid white;
    width: 90%;
    text-align: center;
    margin: 2rem auto;
`;


export default function Quote({quote, author}) {
    return (
        <AuthorP><BsFillChatSquareQuoteFill />"{quote}"
        <p>by {author}</p></AuthorP>
    );
}