// Import React
import React from 'react';

// Define the Sidebar component
function Sidebar({ title }) {
  return (
   // Display the title and a list of links
   <div className="sidebar">
     
      <h2>{title}</h2>
      <ul>
        <li>Genres</li>
        <li>Artists</li>
        <li>Tracks</li>
      </ul>
    </div>
  );
}

// Export the Sidebar component
export default Sidebar;

