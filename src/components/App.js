import React from 'react';
import MoodRatio from './MoodRatio';
import '../App.css';

function App() {
  return (
    <div className="ui one column stackable center aligned page grid">
     <div className="column twelve wide">
        <MoodRatio messageId="asd"/>
        </div>
    </div>
  );
}

export default App;
