import React from 'react';
import axios from 'axios';
import Card from './Card';

export default class AllMemes extends React.Component {
  constructor(props) { 
    super(props);
    this.state = {
      memes: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/api/memes`)
      .then(res => {
        console.log('res::: ', res);
        const dataMemes = res.data;
        this.setState({ memes: dataMemes });
      })
  }

  render() {
    console.log('STATE: ', this.state)
    return (
      <ul>
        <h1>All Memes</h1>
        { this.state.memes.map(meme =>
        <Card imageUrl={meme.image} />)}
      </ul>
    )
  }
}