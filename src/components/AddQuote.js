import React from 'react';
import { useForm } from 'react-hook-form';
import styled from "styled-components";

const ErrorMessage = styled.p`
    color: red;
`;

export default function AddQuote({ children }) {
    const { register, errors, handleSubmit } = useForm();
    const onSubmit = data => {
        alert('Quote: ' + data.formQuote + ' - Author: ' + data.formAuthor);
    };

    return (
        <form onSubmit = { handleSubmit(onSubmit) }>
            <h3>Add a quote:</h3>
            <div>
                <label htmlFor="quote">Quote:</label>
                <textarea name="formQuote" placeholder="A very interesting quote" ref={register({ required: true, maxLength: 200})} />
            </div>

            <div>
                <label htmlFor="author">Author:</label>
                <input name="formAuthor" placeholder="Your Name" ref={register({ required: true, maxLength: 60})} />
            </div>

            <div>
                <ErrorMessage>{errors.formQuote && 'A quote shorter than 200 characters is required'}</ErrorMessage>
                <ErrorMessage>{errors.formAuthor && `An author's name shorter than 60 characters is required`}</ErrorMessage>
            </div>

            <button type="submit">Show Quote</button>
        </form>
        

    );
}