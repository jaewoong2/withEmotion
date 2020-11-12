import styled, { CreateStyled } from '@emotion/styled'

export type themeType = {
    color : string;
    background : string;
    textColor : string;   
    boxShadow : string;
    darkMode : boolean;
    child ?: any;
}

export default styled as CreateStyled<themeType>
