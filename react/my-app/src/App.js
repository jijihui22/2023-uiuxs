import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BoardList from './BoardList';
import Write from './Write';


function App() {
  return (
    <div className="container">
      <BoardList />
      <Write />
    </div>
  );
}

export default App;
