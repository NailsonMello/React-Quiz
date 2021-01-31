import React from 'react'
import { Card, Avatar } from "antd";
import styled from 'styled-components';

const { Meta } = Card;

const CardUser = styled(Card)`
    width: 250px;
    height: 70px;
    margin-left: 16px;
    margin-top: 16px;
    border-radius: 8px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 10px;
    right: 120px;
    background-color: #17464d;
    border-color: #176db3;
    padding: 0px;
`
const User = ({ name, avatar_url }) => {
    return (
        <CardUser >
            <Meta
                avatar={<Avatar src={avatar_url} style={{width: 50, height: 50}} />}
                title={name}
                description={false}
            />
        </CardUser>
    )
}
export default User