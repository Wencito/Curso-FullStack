import React from 'react';
import './ActionsMenu.css';

function ActionsMenu({ 
    cambiarModal = () => {},
    titulo,
}) { 
    return (  
        <div className="actions-menu"> 
            <h1>{titulo}</h1> 
            <div className="actions-menu-content"> 
            <button 
                type="button" 
                className="btn btn-primary" 
                onClick={cambiarModal}
            > 
    Nueva 
</button>

            </div> 
        </div> 
    ); 
} 

export default ActionsMenu;
