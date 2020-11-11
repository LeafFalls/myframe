import React from 'react';
import '../style/app.less';

interface propt {
  name: string;
}

const App: React.FC<propt> = (properties: propt) => <h1>{`Hello, ${properties.name}`}</h1>;

export default App;
