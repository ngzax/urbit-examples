import React, { Component } from 'react';
import classnames from 'classnames';
import _ from 'lodash';


export default class helloTile extends Component {
  constructor(props) {
    super(props);
    let ship = window.ship;
    let api = window.api;
  }

  pokeShip() {
    api.action('hello', 'json', {JSONkey: "JSONvalue"});
  }

  render() {
    return (
      <div className="w-100 h-100 relative" style={{ background: '#1a1a1a' }}>
          <p className="gray label-regular b absolute" style={{ left: 8, top: 4 }}>Hello</p>
          <a className="white absolute label-regular pointer" style={{top: 25, left: 8}} onClick={() => this.pokeShip()}>Say hello.</a>
      </div>
    );
  }

}

window.helloTile = helloTile;
