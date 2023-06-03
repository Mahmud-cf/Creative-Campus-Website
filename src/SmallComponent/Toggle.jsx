import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

function Toggle(props) {
  const [toggle, setToggle] = useState(false);
  const clickHandler = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <div className="section-one-single-part">
        <div className="upper-part d-flex" onClick={clickHandler}>
          <div className="d-flex">
            <h1>{props.number}</h1>
            <h1 className="service-title">{props.department}</h1>
          </div>
          <div>
            <h1>{toggle ? <AiOutlineMinus /> : <AiOutlinePlus />}</h1>
          </div>
        </div>
        <div className={toggle ? "lower-part-true" : "lower-part-false"}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ab
            officiis corporis consectetur nisi ipsum rerum doloribus cupiditate,
            facilis, ratione voluptates et quisquam esse cumque illo tempore
            soluta placeat quia!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Toggle;
