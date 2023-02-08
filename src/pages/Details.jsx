import React from 'react'

import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import {useState, UseEffect} from 'react';
import {IoArrowBack} from 'react-icons/io5'

const Details = () => {
    let { name } = useParams();
    const navigate = useNavigate();
    const [country, setCountry] = useState(null);

  return (
    <div>
      <button onClick={() => navigate(-1)}>
      <IoArrowBack /> Back
    </button>
      Details {name}
    </div>
  )
}

export default Details