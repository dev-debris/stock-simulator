import {css, Global} from '@emotion/react';
import Container from './components/Container';
import Resume from './components/Resume';

function App() {
  return (
    <Container>
      <Global
        styles={css`
          html,
          body {
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;
          }
          #root {
            height: 100%;
          }
          * {
            box-sizing: border-box;
          }
        `}
      />
      <Resume />
    </Container>
  );
}

export default App;
