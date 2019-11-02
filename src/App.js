import React from "react";

import Item from "./components/items/items";
import BottomMenu from "./components/bottom-menu/bottom-menu";
import "./App.scss";

class App extends React.PureComponent {
  state = {
    items: new Array(35)
      .fill(null)
      .map((_, i) => ({ title: `To-do: ${i}`, complete: false })),

    incomplete: false
  };

  toggleItem = index => {
    this.setState(({ items }) => ({
      items: items.map((item, i) =>
        index === i ? { ...item, complete: !item.complete } : item
      )
    }));
  };

  // mark as all complete or all incomplete
  toggleAllComplete = () => {
    const coppyArray = [...this.state.items];
    const completeItem = coppyArray.map(item => item.complete);
    coppyArray.map(item => {
      if (item.complete === true && this.state.incomplete === false) {
        item.complete = true;
      } else if (
        completeItem.includes(false) &&
        this.state.incomplete === true
      ) {
        item.complete = false;
      } else {
        item.complete = !item.complete;
      }
      return item.complete;
    });

    this.setState(prevState => ({
      items: coppyArray,
      incomplete: !prevState.incomplete
    }));
  };

  render() {
    const { items } = this.state;
    const completion = items.map(item => item.complete);
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
            <Item key={i} onToggle={() => this.toggleItem(i)} item={item} />
          ))}
        </div>

        {completion.includes(true) ? (
          <div className="menu">
            <BottomMenu toggleAllComplete={this.toggleAllComplete} />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
