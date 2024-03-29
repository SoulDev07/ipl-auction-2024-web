import './style.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SERVERURL = import.meta.env.VITE_SERVERURL;

const AllocateTeam = () => {
  const [teamName, setTeamName] = useState('');
  const [userName, setUserName] = useState('');
  const [slot, setSlot] = useState('');
  const [price, setPrice] = useState('');

  const teamOptions = [
    'CSK', 'DC', 'GT', 'KKR', 'LSG', 'MI', 'PBKS', 'RCB', 'RR', 'SRH'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Submitted:', { teamName, userName, slot, price });
    setPrice('')
    setSlot('')
    setTeamName('')
    setUserName('')
  };

  return (
    <div className="add-player-container" style={{ marginBottom: "2rem" }}>

      <h2 className='h2'>Allocate Team Form</h2>

      <form onSubmit={handleSubmit} className='form'>
        <label className='label'>
          Team Name:
          <select className='select' value={teamName} onChange={(e) => setTeamName(e.target.value)} required>
            <option className='option' value="">Select Team</option>
            {teamOptions.map((team, index) => (
              <option key={index} value={team} className='option'>
                {team}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label className='label'>
          User Name:
          <input className='input' type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
        </label>
        <br />
        <label className='label'>
          Slot:
          <input className='input' type="text" value={slot} onChange={(e) => setSlot(e.target.value)} />
        </label>
        <br />
        <label className='label'>
          Price:
          <input className='input' type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <br />
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default AllocateTeam;
