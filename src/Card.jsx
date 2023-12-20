import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Card({details}){
  return <>
       <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{details.Name}</h5>
            <h6 className="card-price text-center">${details.pack}<span className="period">/month</span></h6>
            { /*<hr>*/}
            <ul className="fa-ul">
            {details.features.map((detail) => {
                return (
                  <li className={detail.value ? '' : 'text-muted'}>
                    <span className="fa-li">
                      {detail.value ? (
                        <FontAwesomeIcon icon={faCheck} />
                      ) : (
                        <FontAwesomeIcon icon={faXmark} />
                      )}
                    </span>
                    {detail.access}
                  </li>
                );
              })}
               </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
     
            
    
    
      
      </>
}
export default Card;