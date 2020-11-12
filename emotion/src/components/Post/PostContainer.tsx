import { useTheme } from 'emotion-theming'
import React, { useMemo } from 'react'
import styled, { themeType } from '../Theme/styled'
import PostSkeleton from './PostSkeleton'

const Div = styled.div`
    width : 100%;
    height : 100%;
    background-color : ${props => props.theme.background};
    color : ${props => props.theme.textColor};

    .posts-wrapper {
        width : ${props => props.theme.child.width};
        height : ${props => props.theme.child.height};
        display : flex;
        flex-direction : column;
        align-items : center;
    }
    
`


interface PostContainerType {
    width ?: string | number;
    height ?: string | number;
}

const PostContainer = ({ width = '100%', height ='100%' } : PostContainerType) => {
    const theme = useTheme() as themeType;

    const propsTheme = useMemo(() => ({
        child : {
            width : width,
            height : height,
        }
    }),[width, height])

    return (
        <Div theme={{...theme, ...propsTheme}}>
            <div className="posts-wrapper">
                <PostSkeleton />
            </div>
        </Div>
    )
}

export default PostContainer
