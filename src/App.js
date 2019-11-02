import React from "react";

import Item from "./components/item/item";
import BottomMenu from "./components/bottom-menu/bottom-menu";
import "./App.scss";

class App extends React.PureComponent {
  state = {
    items: new Array(35).fill(null).map((_, i) => ({
      title: `To-do: ${i}`,
      complete: false,
      checked: false
    }))
  };

  toggleItem = index => {
    this.setState(({ items }) => ({
      items: items.map((item, i) =>
        index === i ? { ...item, complete: !item.complete } : item
      )
    }));
  };

  toggleCheckItem = index => {
    this.setState(({ items }) => ({
      items: items.map((item, i) =>
        index === i ? { ...item, checked: !item.checked } : item
      )
    }));
  };

  // Mark as all checked item as complete
  markAsComplete = () => {
    const coppyArray = [...this.state.items];
    coppyArray.map(item => {
      if (item.checked && item.complete === false) {
        item.complete = true;
        item.checked = false;
      } else {
        return item.complete & (item.checked = false);
      }
      return item.complete;
    });

    // set the state to the cloned array to avoid modified the original one
    this.setState(() => ({
      items: coppyArray
    }));
  };

  // Mark as all checked item as incomplete
  markAsInComplete = () => {
    const coppyArray = [...this.state.items];
    coppyArray.map(item => {
      if (item.checked && item.complete === true) {
        item.complete = false;
        item.checked = false;
      } else {
        return item.complete & (item.checked = false);
      }
      return item.complete;
    });

    // set the state to the cloned array to avoid modified the original one
    this.setState(() => ({
      items: coppyArray
    }));
  };

  render() {
    const { items } = this.state;
    const checkedItem = items.map(item => item.checked);
    return (
      <div className="app">
        <header>
          <div className="logo">Sleeping Duck</div>
          <div className="nav">
            <button className="nav-item">user</button>
            <button className="nav-item">I don't do anything</button>
            <button className="nav-item">I also don't do anything</button>
          </div>
        </header>
        <div className="items">
          {items.map((item, i) => (
            <Item
              key={i}
              onToggle={() => this.toggleItem(i)}
              item={item}
              toggleCheckItem={() => this.toggleCheckItem(i)}
            />
          ))}
        </div>

        {checkedItem.includes(true) ? (
          <div className="menu">
            <BottomMenu
              markAsComplete={this.markAsComplete}
              markAsInComplete={this.markAsInComplete}
              items={items}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
