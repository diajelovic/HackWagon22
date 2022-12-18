import React, {useEffect} from 'react';

import './App.css';

function App() {
  useEffect(() => {
    fetch("http://localhost:3030").then(res => res.text()).then(res => console.log(res)) // Todo: replace to axios
  }, [])
  return (
    <div className="app app_container">
      102
    </div>
  );
}

export default App;
