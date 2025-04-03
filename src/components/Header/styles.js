import styled from 'styled-components';
import ThemeColors from "../../../Theme/themeColors";


export const Container = styled.div`
width: 100%;
max-width: 80%;
height: 47px;

display:flex;
justify-content: space-between;
align-items: center;
margin: 0 auto;


`
export const Row = styled.div`
display: flex;
flex-direction: row;
align-items: center;

`

export const Column = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`

export const Wrapper = styled.div`
width: 100%;
height: 47px;
display: flex;
justify-content: center;
align-items: center;

`

export const Menu = styled.a`
font-family: "Open Sans";
font-style: normal;
font-size: 12px;
line-height: 25px;
color: ${ThemeColors.Blue[800]};
margin-right: 12px;
text-decoration: none;

`
export const MenuRight = styled.a`
font-family: "Rubik", sans-serif;
font-style: normal;
font-size: 12px;
line-height: 25px;
color: ${ThemeColors.Blue[800]};
margin-right: 12px;
text-decoration: none;

`

export const UserPicture = styled.img`
width: 50px;
height: 50px;
border-radius: 22px;
border: 2px solid #ffffff;

`

export const FolowUs = styled.p`
Width: 139px;
Height: 24px;
font-size: 12px;
color: ${ThemeColors.Blue[800]};

`
