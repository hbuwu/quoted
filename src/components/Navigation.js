import React from 'react';
import { Link } from "react-router-dom";
import { IoIosArrowForward } from 'react-icons/io'

export default function Navigation() {
    return (

        <nav>
            <ul>
                <li>
                    <IoIosArrowForward />
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <IoIosArrowForward />
                    <Link to='/formquotes'>Form Quotes</Link>
                </li>
                <li>
                    <IoIosArrowForward />
                    <Link to='/quotes'>Quotes</Link>
                </li>
                <li>
                    <IoIosArrowForward />
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>

    );
}