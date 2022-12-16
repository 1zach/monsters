import { Component, useState } from "react";
import './CardList.css';
import Card from "../Card/Card"



export default function CardList(props) {
  const {monsters} = props;

  return (
    <div>
    <Card monsters={monsters}/>
    </div>
  )
}


