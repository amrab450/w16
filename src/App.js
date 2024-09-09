// Import React and the necessary components
import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import SongTracker from './components/SongTracker';

// Define the App component
function App() {
  return (
    <div className="App">
      
      <Sidebar title="My Sidebar" />
      <SongTracker />
    </div>
  );
}

// Export the App component
export default App;