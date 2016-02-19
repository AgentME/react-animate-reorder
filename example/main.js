import shuffle from 'lodash/collection/shuffle';
import random from 'lodash/number/random';
import React from 'react';
import ReactDOM from 'react-dom';
import * as Components from './components.jsx';

const onReady = new Promise(function(resolve, reject) {
  if (document.readyState === "complete") {
    resolve();
  } else {
    document.addEventListener("DOMContentLoaded", resolve, false);
    window.addEventListener("load", resolve, false);
  }
});

onReady.then(main).catch(function(e) {
  console.error(e, e.stack);
});

function main() {
  const mainDiv = document.getElementById('main');
  let items = [
    {text:'a', key:'a'},
    {text:'b', key:'b', height: '3em'},
    {text:'c', key:'c'},
    {text:'d', key:'d'},
    {text:'e', key:'e'},
    {text:'f', key:'f'}
  ];
  function render() {
    ReactDOM.render(
      React.createElement(Components.List, {items, shuffle: shuffleList, add, remove}),
      mainDiv
    );
  }
  function shuffleList() {
    items = shuffle(items);
    render();
  }
  function add() {
    const val = ''+Math.random();
    const newItem = {text:val, key:val};
    items.splice(random(0, items.length), 0, newItem);
    render();
  }
  function remove() {
    items.splice(random(0, items.length-1), 1);
    render();
  }
  render();
}
