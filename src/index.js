import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewType: 'list',
      image: {
        title: 'Cute Bunny',
        description: 'Isn\'t it fuzzy-wuzzy cutest thing you\'ve ever seen?',
        url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
      },
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(whatView) {
    this.setState({ viewType: whatView });
  }

  render() {
    return (
        <div>
          <Selector clickHandler={this.clickHandler} />
          <ImageViewer type={this.state.viewType} image={this.state.image}/>
        </div>
    );
  }
}

function List(props) {
  return (
    <ul>
      <li>{props.image.title}</li>
    </ul>
  );
}

function Thumbnail(props) {
  return (
    <img src={props.image.url} alt='image is here' />
  );
}

function ImageViewer(props) {
  if (props.type === 'list') return <List image={props.image}/>;
  else if (props.type === 'thumbnail') return <Thumbnail image={props.image}/>;
}

function Selector(props) {
  return (
    <div>
      <button onClick={() => {
        props.clickHandler('list');
      }}
      >
        List
      </button>
      <button onClick={() => {
        props.clickHandler('thumbnail');
      }}
      >
        Thumbnail
      </button>
    </div>
  );
}


ReactDOM.render(
  <Wrapper />,
  document.getElementById('root')
);
