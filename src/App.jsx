import {css, Global} from '@emotion/react';

import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
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
      <DndProvider backend={HTML5Backend}>
        <Resume />
      </DndProvider>
    </Container>
  );
}

export default App;
