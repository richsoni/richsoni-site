import React from 'react';
import Media from 'react-media';
import OverlayMenu from '../OverlayMenu/';
import FixedMenu from '../FixedMenu/';

export default () => {
  return (
    <div>
      <Media query={{ maxWidth: 960 }}>
        <OverlayMenu/>
      </Media>
      <Media query={{ minWidth: 960 }}>
        <FixedMenu/>
      </Media>
    </div>
  )
}
