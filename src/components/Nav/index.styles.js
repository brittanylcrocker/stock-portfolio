import styled from 'styled-components'

const maxWidthMobile = '768px'

export const Container = styled.nav`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 15px;
    justify-content: center;
    align-items: center;
    background: #14213d;
    padding: 10px;
    @media screen and (max-width: ${maxWidthMobile}) {
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr;
    }
    width: 100%;
`

export const ItemContainer = styled.div`
    // display: grid;
    // flex-direction: column;
    background: #e5e5e5;
    padding: 5px;
    border: 1px solid green;
    border-radius: 5px;
    // justify-content: center;
    // align-items: center;
    // height: auto;
    // text-align: center;
    @media screen and (max-width: ${maxWidthMobile}) {
        flex-direction: row;
    }
`

export const ItemPanel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    // align-items: center;
    text-align: center;
    @media screen and (max-width: ${maxWidthMobile}) {
        flex-direction: row;
    }
`



export const ContentContainer = styled.div`
    color: white;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: ${maxWidthMobile}) {
        flex-direction: row;
    }
`
export const NavContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    color: white;
    justify-content: flex-start;
    align-items: flex-start;
    @media screen and (max-width: ${maxWidthMobile}) {
        flex-direction: row;
        // justify-content: center;
        // align-items: center;
    }
`