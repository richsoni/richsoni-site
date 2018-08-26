import React from 'react';
import Media from 'react-media';
import OverlayMenu from '../OverlayMenu/';
import FixedMenu from '../FixedMenu/';
import MenuToggle from '../MenuToggle/';

export default class ResponsiveMenu extends React.Component {
  constructor(attrs){
    super()
    this.state = {
      toggleState: false
    }
  }

  render() {
    const {
      toggleState,
    } = this.state;

    return (
      <div>
        <Media query={{ maxWidth: 960 }}>
          <OverlayMenu display={toggleState} />
        </Media>
        <Media query={{ minWidth: 960 }}>
          <FixedMenu showNavMenu={toggleState} />
        </Media>
        <MenuToggle toggleState={toggleState} onToggle={this.onToggle.bind(this)} />
      </div>
    );
  }

  onToggle(){
    this.setState({
      toggleState: !this.state.toggleState,
    })
  }
}
