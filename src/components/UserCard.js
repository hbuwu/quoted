import React, {useState, useEffect} from 'react';
import { CgNametag } from "react-icons/cg";
import { VscAccount, VscRepo, VscBroadcast, VscComment } from "react-icons/vsc";

export default function UserCard({username}) {

    const [githubData, setGithubData] = useState();

    useEffect(() => {
        if (!username) return;
        fetch(`https://api.github.com/users/${username}`).then(response => response.json()).then(setGithubData).catch(console.error);
    }, [username]);

    if (githubData) return (
        <>
        <section className='userCardContainer'>
        <a href={githubData.html_url} id='profilePicture'><img src={githubData.avatar_url} alt='Profile'></img></a>
            <div>
                <p><VscAccount />Username: {githubData.login}</p>
                <p><CgNametag />Name: {githubData.name}</p>
                <p><VscBroadcast />Location: {githubData.location}</p>
                <p><VscComment />Bio: {githubData.bio}</p>          
                <p><VscRepo />Public Repositories: {githubData.public_repos}</p>
            </div>
            <div id='userCardFollowers'>
                <p>Followers: {githubData.followers}</p>
            </div>
            
        </section>
        </>
    );

    return null;

}