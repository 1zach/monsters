import { Component } from "react";
import './CardList.css';
import Card from "../Card/Card"

export default function CardList(props) {
  const {monsters} = props;

  return (
    <Card monsters={monsters} />
  )
}


// class CardList extends Component {
//   render() {
//     const {monsters} = this.props;
//     return(
//         <Card monsters={monsters} />
//     )
//   }
// }


