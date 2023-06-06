import React from 'react'

function Indivitual_team_member(props) {
  return (
    <div className='col-md-3 col-6' >
        <div className="indivitual-team-member-wrapper">
            <div className="member-img">
                <img className='img-fluid' src={props.img} alt={props.name} />
            </div>
            <div className="member-name text-center">
                <h3>{props.name}</h3>
                <p>{props.title}</p>
            </div>
        </div>
    </div>
  )
}

export default Indivitual_team_member