import { createGlobalStyle } from "styled-components";
import reset from "reset-css";

export default createGlobalStyle`

${reset}

:root {
    font-size: 62.5%;
  }

html {
box-sizing: border-box;
}
  
*,
*:before,
*:after {
box-sizing: inherit;
}

body {
    background-color: rgb(18, 4, 31);
    color: white;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.6rem;
    line-height: normal;
}

header, main {
    margin: 5rem 10vw;
    padding-bottom: 5rem;
    border-bottom: 1px solid white;
}

footer {
    margin: 5rem 10vw;
}

form {
    margin: 5rem 0;
    padding-bottom: 5rem;
    border-bottom: 1px solid white;
}

h1 {
    font-size: 5rem;
    font-weight: bold;
    margin-bottom: 3rem;
}

h2 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 2rem;
}

h3 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
}

a {
    text-decoration: none;
    color: rgb(196, 140, 248);
    margin: 0;
    transition-duration: 0.5s;
}

a:hover {
    text-decoration: none;
    color: rgb(255, 255, 255);
    margin: 0 1rem;
    transition-duration: 0.5s;
}

p, li {
    line-height: 2.3rem;
}

li {
    text-align: left;
    margin-top: 2rem;
}

svg {
    margin: 0 1rem 0 0;
}

label {
    display: block;
    font-weight: bold;
    margin-bottom: 1rem;
}

textarea {
    width: 100%;
    height: 10rem;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.4rem;
    line-height: normal;
    text-align: center;
    border-radius: 1rem;
    margin-bottom: 2rem;
    padding-top: 0.5rem;
}

input {
    width: 50%;
    height: 4rem;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.4rem;
    line-height: normal;
    text-align: center;
    border-radius: 1rem;
    margin-bottom: 2rem;
}

button {
    background: linear-gradient(to bottom, #e08920 5%, #bd942c 100%);
	background-color: #e08920;
	border-radius: 3rem;
	border: 1px solid #ab7a19;
	display: inline-block;
	cursor: pointer;
	color: #ffffff;
	font-size: 1.6rem;
	padding: 1rem 3rem;
    text-decoration: none;
    margin: 2rem;
    font-weight: bold;
    transition-duration: 0.5s;
}

button:hover {
    transform: scale(1.05);
    transition-duration: 0.5s;
}

nav ul {

    text-align: left;

}

nav ul li {

    font-size: 2rem;
    margin: 2rem 0 0;

}

.userCardContainer {
    border: 1px solid white;
    background-color:  rgb(196, 140, 248);
    color: black;
    text-align: left;
    font-size: 1.5rem;
}

.userCardContainer div{
    padding: 1rem;
}

#profilePicture img {
    width: 100%;
}

#profilePicture:hover {
    margin: 0;
}

#userCardFollowers {
    text-align: center;
    margin: 1rem 0;
    font-weight: bold;
}

@media (min-width: 905px) {
    header, main, footer {
        margin: 5rem 10vw;
    }

    li {
        text-align: center;
    }

    textarea {
        width: 100%;
        height: 10rem;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.4rem;
        line-height: normal;
        text-align: center;
        border-radius: 1rem;
        margin-bottom: 2rem;
        padding-top: 1rem;
    }
    
    input {
        width: 30%;
    }

    nav a {
        text-decoration: none;
        color: rgb(196, 140, 248);
        margin: 0 0.75rem;
        transition-duration: 0.5s;
    }
    
    nav a:hover {
        text-decoration: none;
        color: rgb(255, 255, 255);
        margin: 0 0.25rem;
        transition-duration: 0.5s;
    }
    
    nav ul {
        display: flex;
        margin: auto;
        justify-content: center
    }

    nav ul li {
        margin: 0 3rem;
    }

    nav ul li svg{
        padding-top: 0.6rem;
        margin: 0;
    }

    .userCardContainer {
        display: grid;
        grid-template-columns: repeat(2,1fr);
    }

    #userCardFollowers {
        text-align: center;
        margin: 0;
        font-weight: bold;
        background-color: rgb(18, 4, 31);
        grid-column: 1/3;
        color: white;
    }
}

@media (min-width: 1050px) {
    header, main, footer {
        margin: 5rem 15vw;
    }
}

@media (min-width: 1280px) {
    header, main, footer {
        margin: 5rem 20vw;
    }
}

@media (min-width: 1600px) {
    header, main, footer {
        margin: 5rem 25vw;
    }
}

`;