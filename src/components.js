import styled from 'styled-components';

// [S] Bright: https://poolors.com/ffffff-0bb7da-16c8b4
export const THEME = {
  light: '#ffffff',
  dark: '#242629',
  primary: '#0bb7da',
  secondary: '#16c8b4'
}

// [W] Blues: https://poolors.com/0b0438-f8f8f8-1077ad
// export const THEME = {
//   light: '#f8f8f8',
//   dark: '#242629',
//   primary: '#0b0438',
//   secondary: '#1077ad'
// }

// Muted: https://poolors.com/f9f9f9-3c5e76-c06049
// Blue/Pink: https://poolors.com/ffffff-ee2a51-140047


export const Spacer = styled.span`
  flex: 1;
`

export const Row = styled.div`
  display: flex;
  align-items: ${ p => p.align };
  justify-content: ${ p => p.justify };
  flex-wrap: ${ p => p.wrap };
  flex: 1;
`

export const AppContainer = styled.div`
  width: 100vw;
  background-image: linear-gradient(115deg, ${ THEME.primary } 45%, ${ THEME.secondary });
  color: ${ THEME.dark };
  & a {
    color: inherit;
  }
`

export const Banner = styled.div`
  width: 100%;
  min-height: 600px;
  display: flex;
  flex-direction: ${ p => p.direction || "column" };
  justify-content: ${ p => p.justify };
  align-items: ${ p => p.align };
  color: ${ p => p.color };
  & img {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: .6;
    object-fit: cover;
    object-position: 50% 20%;
  }
`

export const Headline = styled.h1`
  color: ${ THEME.light };
  z-index: 1;
  font-size: 3em;
  margin: 0px;
  line-height: .7em;
`

export const Section = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: ${ p => p.direction || "column" };
  justify-content: ${ p => p.justify };
  align-items: ${ p => p.align };
  flex-wrap: wrap;
  background: ${ p => p.background };
  color: ${ p => p.color };
  & div.content {
    width: 80%;
    min-width: 300px;
    max-width: 600px;
    margin: 40px 0px;
    border: ${ THEME.secondary } solid 5px;
    border-radius: .5em;
    padding: 1em;
    & h1 {
      color: ${ THEME.secondary };
      position: absolute;
      margin: 0px;
      margin-top: -50px;
    }
  }
`

export const HeaderBar = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 4em;
  display: flex;
  align-items: center;
  background: ${ p => p.background };
  color: ${ p => p.color || "inherit" };
  margin-bottom: 1em;
  box-shadow: ${ p => p.float ? 'rgba(0,0,0,.2) 5px 5px 10px' : '' };
  transition: box-shadow .2s ease-in-out;
  & * {
    margin: 0px 10px;
  }
`

export const Title = styled.h1`
  min-width: 205px;
  color: ${ p => p.color };
  background: ${ p => p.background };
  padding: 15px;
`

export const Card = styled.div`
  width: 25%;
  min-width: 300px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: ${ THEME.light };
  color: ${ THEME.dark };
  border-radius: .5em;
  box-shadow: rgba(0,0,0,.2) 3px 3px 7px;
  margin: 1em;
  overflow: hidden;
  & img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: .6;
  }
  & h3 {
    z-index: 1;
    font-size: 1.3em;
    margin: 1em .5em;
  }
  & div.desc {
    z-index: 10;
    position: absolute;
    opacity: .95;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px;
    background-image: linear-gradient(135deg, ${ THEME.secondary }, ${ THEME.primary });
    color: ${ THEME.light };
    margin-top: -200%;
    transition: margin-top .3s ease-out;
    & * {
      font-weight: bold;
      text-align: justify;
      width: 90%;
      font-size: .9em;
    }
  }
  &:hover div {
    margin-top: 0px;
  }
`