import { useState } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);
    return (
        <div className="wrapper">
            <h1>Wrapper</h1>
        </div>
    );
}

export default App;
