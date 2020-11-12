import { keyframes } from '@emotion/core'
import React from 'react'
import styled from '../Theme/styled'

const skeletonAnimation = keyframes`
    from {
        transform : translateX(0%);
        opacity : 0.5;
    }
    to {
        transform : translateX(500px);
        opacity : 0.1;
    }

`


const Main = styled.main`
    width : 500px;
    height : 300px;
    display : flex;
    flex-direction : column;
    padding-top : 12px;
    padding-left : 12px;

    .user-wrapper {
        display : flex;
        width : 100%;
        border : 2px soldi red;
    
        .user-photo {
            width : 32px;
            height : 32px;
            border-radius : 50%;
            border : 2px solid gray;
            position : relative;
            background-color : rgba(90, 90, 90, 0.5);
            overflow : hidden;
            box-shadow : 2px 2px 4px ${props => props.theme.boxShadow};

            &::before {
                top : 0;
                left : 0;
                content : '';
                position : absolute;
                width : 20px;
                height : 100%;
                background: linear-gradient(to right, rgba(30, 30, 30, 0.3), rgba(2, 2, 2, 0.4), rgba(40, 40, 40, 0.5));
                animation : ${skeletonAnimation} 2s infinite linear;
            }
        }        

        .user-name {
            width : 120px;
            height : 32px;
            border : 2px solid gray;
            border-radius : 15px;
            margin-left : 10px;
            background-color : rgba(90, 90, 90, 0.5);
            overflow : hidden;
            position: relative;
            box-shadow : 2px 2px 4px ${props => props.theme.boxShadow};

            &::before {
                top : 0;
                left : 0;
                content : '';
                position : absolute;
                width : 20px;
                height : 100%;
                background: linear-gradient(to right, rgba(30, 30, 30, 0.3), rgba(2, 2, 2, 0.4), rgba(40, 40, 40, 0.5));
                animation : ${skeletonAnimation} 3s infinite linear;
            }
        }
    }

    .title-wrapper {
        width : 50%;
        height : 24px;
        border : 2px solid gray;
        margin-top : 10px;
        border-radius : 15px;
        background-color : rgba(90, 90, 90, 0.5);
        overflow : hidden;
        position: relative;
        box-shadow : 2px 2px 4px ${props => props.theme.boxShadow};

            &::before {
                top : 0;
                left : 0;
                content : '';
                position : absolute;
                width : 20px;
                height : 100%;
                background: linear-gradient(to right, rgba(30, 30, 30, 0.3), rgba(2, 2, 2, 0.4), rgba(40, 40, 40, 0.5));
                animation : ${skeletonAnimation} 2s infinite linear;
            }
    }

    .description-wrapper {
        width : 80%;
        height : 24px;
        border : 2px solid gray;
        margin-top : 5px;
        border-radius : 15px;
        background-color : rgba(90, 90, 90, 0.5);
        overflow : hidden;
        position: relative;
        box-shadow : 2px 2px 4px ${props => props.theme.boxShadow};

        &::before {
            top : 0;
            left : 0;
            content : '';
            position : absolute;
            width : 20px;
            height : 100%;
            background: linear-gradient(to right, rgba(30, 30, 30, 0.3), rgba(2, 2, 2, 0.4), rgba(40, 40, 40, 0.5));
            animation : ${skeletonAnimation} 2s infinite linear;
        }
    }
    
`

const PostSkeleton = () => {

    return (
        <Main>
            <div className="skeleton">
                <div className="user-wrapper">
                    <div className="user-photo"></div>
                    <div className="user-name"></div>
                </div>
                <div className="title-wrapper">
                    <div className="title"></div>
                </div>
                <div className="description-wrapper">
                    <div className="description"></div>
                </div>
            </div>
        </Main>
    )
}

export default PostSkeleton
