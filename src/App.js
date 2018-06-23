import React, { Component } from 'react';
import { load } from './redux.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    const {dispatch} = props;
    this.load = bindActionCreators({load}, dispatch)

  }
  componentDidMount(){
    const {dispatch} = this.props;
    let action = load(dispatch)
    dispatch(action)
  }
  static renderImages(array){
    return array.map(item => {
      console.log(item)
      return (
        <img key={item.filename} src={`https://picsum.photos/458/354?image=${item.id}`} className="img-fluid" />
      )
    })
  }
  render() {
    const images = this.props.data !== undefined ? this.props.data : [];
    return (
      <div className="container-fluid">
          <div className="d-flex align-content-stretch flex-wrap">
            {App.renderImages(images)}   
          </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return state
}

export default connect(mapStateToProps)(App);
