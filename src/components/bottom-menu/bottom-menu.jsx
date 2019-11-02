import React from 'react';
import './bottom-menu.scss';

const BottomMenu = ({toggleAllComplete}) => (
<div className= "bottom-menu">
    <button className="bottom-menu_item" onClick={toggleAllComplete}>Mark all as complete</button>
</div>
)

export default BottomMenu;