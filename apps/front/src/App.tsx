import React, {useEffect} from 'react';

import './App.css';

function App() {
  useEffect(() => {
    fetch("http::/localhost:3000").then(res => console.log(res)) // Todo: replace to axios
    
  }, [])
  return (
    <div className="app app_container">
      101
    </div>
  );
}

export default App;
