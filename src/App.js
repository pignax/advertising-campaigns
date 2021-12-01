import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <>
    <main>
      <div className="container">
        <div className="container-details">
          <div className="title">Campaign details</div>
          <div className="details">
            <div className="result"><span>5</span><div>Days remaining</div></div>
            <div className="result"><span>300</span><div>Clicks</div></div>
            <div className="result"><span>240</span><div>Spent</div></div>
            <div className="result"><span>5M</span><div>People reached</div></div>
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
            <div className="form-content">
              <div className="container-input">
                <div>Start date of the campaign</div>
                <input type="date" />
              </div>
              <div className="container-input">
                <div>End date of the campaig</div>
                <input type="date" />
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
                <label>EUR</label><div className="line" /><input placeholder="0,35" type="number" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container-buttons">
        <button className="button-primary">Generate report</button>
        <button className="button-secondary">Pause campaign</button>
      </div>
    </main>
    </>
  );
}

export default App;
