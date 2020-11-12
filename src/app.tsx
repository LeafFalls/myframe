import React from 'react';
import '../style/app.less';

interface propt {
  name: string;
}

const App: React.FC<propt> = (properties: propt) => {
  return (
    <div>
      <h1>{`Hello, ${properties.name}`}</h1>
      <div id="ss" />
    </div>
  );
};

export default App;
