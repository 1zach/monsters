import { Component } from "react";
import './SearchBox.css'


export default function SearchBox(props) {
  return (
    <input className={`monster-search-box ${props.className}`} 
            type="search" 
            placeholder={props.placeholder} 
            onChange={props.onChangeHandler}
    />
  )
}


// class SearchBox extends Component {
//   render() {
//     return (
//       <input className={`monster-search-box ${this.props.className}`} 
//               type="search" 
//               placeholder={this.props.placeholder} 
//               onChange={this.props.onChangeHandler}
//       />
//     )
//   }
// }

