import React from 'react'
import { Button } from '../Button';


import {
    Container,
    Row,
    Menu,
    MenuRight,
    Wrapper,
    UserPicture,
    FolowUs,
} from './styles';

const Header = () => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <UserPicture src='https://s3-alpha-sig.figma.com/img/18d5/26ed/5db5a686ab5836685483a67fb94c59d4?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iMviV~tPlzzg9vq76Fw~L955KES7K4JBC1oJEECTiMr1PjpEYTzq1nvA6My6Mznnlefa7j5oA2nvkzM5sCQHaPHX8NKWkPrYOkgPkd8WOEQZcFhA10-XFdjMQlpiuREIzfRchTsEGqJ-ZmFnYNibOX0ltFUjlhI42NqjF-CLYJ3qdN7QXpnlchEkwMldqgajlk2oxjCLveAIi50JecvND5H~T8FIlclgasQ7CwjVGiOllgrGq-rDDp~31d6Vum3sKtXMhmKFTzC0CjX~8OkexuGRU96qipZcP66XWRuss66Nw6JLZFWzF8e4z~5oZM-Z1UXAba79IkSERXoVsvby8Q__' alt="Logo da NA" />
                    <Menu href="#">Jeito Nato</Menu>
                    <Menu href="#">Fale Conosco</Menu>
                    <Menu href="#">Nato teachers</Menu>
                </Row>
                <Row>
                    <FolowUs>Segue a gente:</FolowUs>
                    <MenuRight href="https://www.instagram.com/nato.academy/"><img src='src\assets\inst.png' alt="Logo do Instagram"/></MenuRight>
                    <MenuRight href="#"></MenuRight>
                    <MenuRight href="#"></MenuRight>
                </Row>
            </Container>

        </Wrapper>
    )
}

export { Header } 

