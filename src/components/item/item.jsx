import React from 'react';
import './item.scss';

const Item = ({item: { title, complete, checked }, onToggle, toggleCheckItem }) => (
    <div className={`item ${complete ? 'complete' : ''}`}>
        <div className = "itemContainer">
            <div className = "checkbox" onClick={toggleCheckItem}>              
             {checked && (
                <span className="stick">&#x2714;</span>
             )}
            </div>
            <h1>{title}</h1>
        </div>
        <button onClick={onToggle} className="button">Toggle complete</button>
    </div>
)

export default Item;

      
