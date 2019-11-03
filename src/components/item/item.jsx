import React from 'react';
import './item.scss';

const Item = ({item: { title, complete, checked }, onToggle, toggleCheckItem }) => (
    <div className={`item ${complete ? 'item--complete' : ''}`}>
        <div className="item__container">
            <div className="item__checkbox" onClick={toggleCheckItem}>              
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
