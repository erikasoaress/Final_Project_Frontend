import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";

function RadioDetails(){
    const [radioDetails, setRadioDetails] = useState([]);

    const {id} = useParams();

    const getRadioDetails = async () => {
      try {
        
        
      } catch (error) {
        console.log(error)
      }
    }}

export default RadioDetails