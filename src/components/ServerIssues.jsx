import React from 'react';
import serverIssuesSvg from '../images/serverDown.svg'

const ServerIssues = () => {
    return (
        <div className="server-issues">
            <h2>Ooops! Looks like there's some propblem on the server.</h2>
            <p>We're really sorry about that :(</p>
            <p>Please try again later.</p>
            <img src={serverIssuesSvg} alt="server problems" style={{display: 'block', maxWidth: '100%'}}/>
        </div>
    )
}

export default ServerIssues;
