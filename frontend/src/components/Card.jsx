import React from 'react'
import pic from "../assets/images/pic1.jpeg"
import { useNavigate } from 'react-router';

function Card({ image, movieName, year,id }) {
  const navigate = useNavigate();

  const handleNavigation = (id) => {
    navigate(`/edit/${id}`);
  }
  return (
    <div className="card flex flex-col p-5 gap-3" onClick={() => handleNavigation(id)}>
      <img src={image || pic} alt="pic" width={"266px"} className="!h-[400px]  rounded-[12px]" />
      <div className="div-info">
        <h4 className="text-xl text-wrap truncate ">{movieName}</h4>
        <p>{year}</p>
      </div>
    </div>
  );
}

export default Card