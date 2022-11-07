import React from "react";
import {useSelector} from 'react-router-dom'

const Hashtag = ({ name }) => {
    const getStore = (hashtag) => {
    const {name} = useSelector((store)=>store.twitter);
    console.log(name)

    }
    
  return (
    <div>
      <h2>{name}</h2>


    </div>
  );
};

export default Hashtag;
