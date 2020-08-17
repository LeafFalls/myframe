import React from 'react';
import '../style/app.less'

interface propt {
    name: string,
    age: number
}

function App(iprop: propt) {
    return <div>{`Hello ${iprop.name},age: ${iprop.age}`}</div>
}

export default App;