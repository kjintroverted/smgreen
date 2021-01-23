import { Button } from '@material-ui/core';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import content from './content/sarah.json'
import './App.css';
import { AppContainer, Banner, Card, HeaderBar, Headline, Row, Section, Spacer, THEME, Title } from './components';

function App() {

  let [atTop, setTop] = useState(true);

  function onScroll() {
    setTop(window.scrollY === 0)
  }

  window.addEventListener('scroll', onScroll)

  return (
    <AppContainer>
      <Helmet>
        <title>{ content.name }</title>
      </Helmet>
      <HeaderBar color={ THEME.light } background={ THEME.primary } float={ !atTop }>
        <h2>{ content.name }</h2>
        <Spacer />
        <Button color="inherit" href={ content.resume }>
          <i className="material-icons">note</i> Resumé
        </Button>
      </HeaderBar>

      {/* BANNER */ }
      <Banner justify="flex-end">
        <img src={ content.banner } alt="Banner" />
        <Headline>{ content.headline }</Headline>
      </Banner>

      {/* BIO */ }
      <Section background={ THEME.light } align="center" justify="center">
        <div className="content">
          <h1>About Me.</h1>
          <h4>{ content.bio }</h4>
        </div>
      </Section>

      {/* EDUCATION */ }
      <Section direction="row">
        <Title color={ THEME.primary } background={ THEME.light }>
          Education.
        </Title>
        <Row wrap="wrap" justify="center">
          {
            content.edu.map((item) => (
              <Card>
                <img src={ item.img } alt="" />
                <h3>{ item.title }</h3>
                <div className="desc">
                  <p>{ item.desc }</p>
                </div>
              </Card>
            ))
          }
        </Row>
      </Section>

      {/* EXPERIENCE */ }
      <Section background={ THEME.light } direction="row">
        <Title color={ THEME.light } background={ THEME.primary }>
          Experience.
        </Title>
        <Row wrap="wrap" justify="center">
          {
            content.xp.map((item) => (
              <Card>
                <img src={ item.img } alt="" />
                <h3>{ item.title }</h3>
                <div className="desc">
                  <p>{ item.desc }</p>
                </div>
              </Card>
            ))
          }
        </Row>
      </Section>

      {/* FOOTER */ }
      <Section color={ THEME.light } align="center">
        <Title color={ THEME.primary } background={ THEME.light }>
          Contact.
        </Title>
        { content.contact.map((item) => <p><b>{ item }</b></p>) }
        <Spacer />
        <p>Site by <a href='http://wkgreen.dev'>W.K. Green</a></p>
      </Section>
    </AppContainer>
  );
}

export default App;
