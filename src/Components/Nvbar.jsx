import React from 'react';

function NavBar (props) {
    return (
      <div>
        <button onClick={props.onPrecClick}>Précédent</button>
        <button onClick={props.onSuivClick}>Suivant</button>
      </div>
    );
  }
 

export default NavBar;  