import React from 'react';
import './items.scss';

const Item = ({item: { title, complete }, onToggle }) => (
    <div className={`item ${complete ? 'complete' : ''}`}>
        <div className = "itemContainer">
            <div className = "checkbox" onClick={onToggle}>              
             {complete && (
                <span>&#x2714;</span>
             )}
            </div>
            <h1>{title}</h1>
        </div>
        <button onClick={onToggle} className="button">Toggle complete</button>
    </div>
)

export default Item;

      
