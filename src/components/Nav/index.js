import React from 'react';
import { Container, ItemContainer, NavContainer, ContentContainer, ItemPanel } from './index.styles.js'

export const NavBar = () => {
    return (
        <Container id='container'>
            <NavContainer id='nav-container'>
                <ItemPanel id='item-panel'>
                    <NavItem text='Add New Investment'/>
                    <NavItem text='View All'/>
                    <NavItem text='Export as CSV'/>
                </ItemPanel>
            </NavContainer>
            <ContentContainer>
            </ContentContainer>
        </Container>
    );
};

export default NavBar;

export const NavItem = ({text}) => {
    return (
            <ItemContainer>
               {text}
            </ItemContainer>
    )     
}

