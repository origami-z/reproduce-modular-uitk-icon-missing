import * as React from 'react';
import { Button, ToolkitProvider } from '@jpmorganchase/uitk-core';
import { SearchIcon } from '@jpmorganchase/uitk-icons';

import './App.css';
// import './Icon.css'; // <------ Add this for a workaround

const App = (): JSX.Element => {
  const [selectedTheme, setSelectedTheme] = React.useState<'light' | 'dark'>(
    'light',
  );

  const [count, setCount] = React.useState(0);
  return (
    <ToolkitProvider theme={selectedTheme}>
      <div className="App">
        <Button>
          {'No icon here ->'}
          <SearchIcon size={12} />
        </Button>
      </div>
    </ToolkitProvider>
  );
};

export default App;
