import React from "react";
import Checked from './Checked';

const ListItem = props => {
  return(
      <Checked render= {(checked) => (
        <li>{props.item} {checked?  "X":""}</li>
       
      )
} />

  )};

export default ListItem;
