import React from 'react';
import './bottom-menu.scss';

const BottomMenu = ({markAsComplete, markAsInComplete, items}) => {
    const checkedAndCompleteItem = items.find(item => item.complete === false && item.checked === true)
    const checkedAndIncompleteItem = items.find(item => item.complete === true && item.checked === true)
    return (
        <div className= "bottom-menu">
            {
                checkedAndCompleteItem ? <button className="bottom-menu_item" onClick={markAsComplete}>Mark as complete</button> 
                : null 
            }
            {
                checkedAndIncompleteItem ? <button className="bottom-menu_item" onClick={markAsInComplete}>Mark as incomplete</button>  
                :null
            }              
        </div>
    )
}



export default BottomMenu;