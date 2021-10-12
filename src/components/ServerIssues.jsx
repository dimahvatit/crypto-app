import React from 'react';
import {Typography} from 'antd';
import serverIssuesSvg from '../images/serverDown.svg'

const { Title, Text } = Typography;

const ServerIssues = () => {
    return (
        <div className="server-issues">
            <Title level={2}>Ooops! Looks like there's some propblem on the server.</Title>
            <p>We're really sorry about that :(</p>
            <p>Please try again later.</p>
            <img src={serverIssuesSvg} alt="server problems" style={{display: 'block', maxWidth: '100%'}}/>
        </div>
    )
}

export default ServerIssues;
