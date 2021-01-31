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
    @media screen and (max-width: 500px) {
        width: 100%;
        height: 50px;
        top: 0;
        right: 0;
        margin-left: 0px;
        margin-top: 5px;
        .ant-card-meta-title{
            color: ${({ theme }) => theme.colors.contrastText};
            margin-top: 0px;
            font-size: 1.1em;
        }
    }
`

const AvatarUser = styled(Avatar)`
    width: 50px;
    height: 50px;
    @media screen and (max-width: 500px) {
        width: 28px;
        height: 28px;
    }
`
const User = ({ name, avatar_url }) => {
    return (
        <CardUser >
            <Meta
                avatar={<AvatarUser src={avatar_url} />}
                title={name}
                description={false}
            />
        </CardUser>
    )
}
export default User