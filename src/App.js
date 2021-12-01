import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [endDate, setEndDate] = useState()
  const [days, setDays] = useState(0)
  const [clicks, setClicks] = useState(0)
  const [spentValue, setSpentValue] = useState(1)
  const [spent, setSpent] = useState(0)
  const [people, setPeople] = useState("0")

  const pauseReport = () =>{
    setDays(0)
    setClicks(0)
    setSpent(0)
    setPeople("0")
  }

  const curr = new Date();
  curr.setDate(curr.getDate());
  const startDate = curr.toISOString().substr(0,10);

  const generateReport = () =>{
    if(endDate){
      const difference= Math.abs(new Date(endDate) - new Date(startDate));
      setDays(difference/(1000 * 3600 * 24))
    }else{
      const difference= Math.abs(new Date(startDate) - new Date(startDate));
      setDays(difference/(1000 * 3600 * 24))
    }
      setClicks(Math.floor((Math.random() * 100)))
      setSpent(spentValue * clicks)
      setPeople(clicks+"M")
  }

  
  return (
    <>
    <main>
      <div className="container">
        <div className="container-details">
          <div className="title">Campaign details</div>
          <div className="details">
            <div className="result"><span>{days}</span><div>Days remaining</div></div>
            <div className="result"><span>{clicks}</span><div>Clicks</div></div>
            <div className="result"><span>{spent}</span><div>Spent</div></div>
            <div className="result"><span>{people}</span><div>People reached</div></div>
          </div>
        </div>

        <div className="container-form">
          <div className="title">Active campaign - Boost my content</div>
          <div className="form">
            <div className="form-content">
              <div className="row">
                <div className="container-input">
                  <div>Campaign name</div>
                  <input className="input" placeholder="Boost my content" />
                </div>
                <div className="container-input">
                  <div>Content link</div>
                  <input placeholder="www.example.domain.com" />
                </div>
              </div>
              <div className="row">
                <div className="container-input">
                  <div>Add Categories</div>
                  <input placeholder="Lifestyle" />
                </div>
                <div className="container-input">
                  <div>Target location</div>
                  <input placeholder="ITALY" />
                </div>
              </div>
            </div>
            <div className="text">RUN DAILY 21 DAYS</div>
            <div className="form-content">
              <div className="container-input">
                <div>Start date of the campaign</div>
                <input type="date" defaultValue={startDate} />
              </div>
              <div className="container-input">
                <div>End date of the campaig</div>
                <input type="date" defaultValue={startDate} onChange={event => setEndDate(event.target.value || startDate)} />
              </div>
              <div className="container-input">
                <div>Daily spending limit</div>
                <div className="custom-input">
                <label>EUR</label><input placeholder="3" type="number" />
                </div>
              </div>
              <div className="container-input">
                <div>Cost per click (CPC)</div>
                <div className="custom-input">
                <label>EUR</label><div className="line" /><input placeholder="1" type="number" onChange={event => setSpentValue(event.target.value)}  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container-buttons">
        <button className="button-primary" onClick={() => generateReport()}>Generate report</button>
        <button className="button-secondary" onClick={() => pauseReport()}>Pause campaign</button>
      </div>
    </main>
    </>
  );
}

export default App;
