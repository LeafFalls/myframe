import React from 'react';
import '../style/app.less'

interface propt {
    name: string,
}

const App:React.FC<propt>= ({name}) => {
    return <h1>{`Hello, ${name}`}</h1>
}


export default App;