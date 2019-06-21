import React, { Component } from "react"
import "./App.css"

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      team1: "placeholder1",
      team2: "placeholder2",
      team3: "placeholder3",
      t1comp1:  "",
      t2comp1:  "",
      t3comp1:  "",
      t1comp2:  "",
      t2comp2:  "",
      t3comp2:  "",
      t1comp3:  "",
      t2comp3:  "",
      t3comp3:  "",
      t1comp4:  "",
      t2comp4:  "",
      t3comp4:  "",
      t1comp5:  "",
      t2comp5:  "",
      t3comp5:  "",
      t1res:  "",
      t2res:  "",
      t3res:  ''
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='row' style={{ textAlign: "center" }}>
          <h1 className='header'>snAppsen Open 2019</h1>
        </div>
        <div className='row team'>
          <div className='col-6'>
            <h2>Lagnamn:</h2>
          </div>
          <div className='col-2'>
            <h3>{this.state.team1}</h3>
          </div>
          <div className='col-2'>
            <h3>{this.state.team2}</h3>
          </div>
          <div className='col-2'>
            <h3>{this.state.team3}</h3>
          </div>
        </div>
        <div className='comp fruit'>
          <div className='row'>
            <div className='col-6'>
              <h2>Fruit Ninja</h2>
            </div>
            <div className='col-2'>
              <h3>{this.state.t1comp1}</h3>
            </div>
            <div className='col-2'>
              <h3>{this.state.t2comp1}</h3>
            </div>
            <div className='col-2'>
              <h3>{this.state.t3comp1}</h3>
            </div>
          </div>
        </div>
        <div className='comp voi'>
          <div className='row'>
            <div className='col-6'>
              <h2>Voi</h2>
            </div>
            <div className='col-2'>
              <h3>{this.state.t1comp2}</h3>
            </div>
            <div className='col-2'>
              <h3>{this.state.t2comp2}</h3>
            </div>
            <div className='col-2'>
              <h3>{this.state.t3comp2}</h3>
            </div>
          </div>
        </div>
        <div className='comp netflix'>
          <div className='row'>
            <div className='col-6'>
              <h2>Netflix</h2>
            </div>
            <div className='col-2'>
              <h3>{this.state.t1comp3}</h3>
            </div>
            <div className='col-2'>
              <h3>{this.state.t2comp3}</h3>
            </div>
            <div className='col-2'>
              <h3>{this.state.t3comp3}</h3>
            </div>
          </div>
        </div>
        <div className='comp angry'>
          <div className='row'>
            <div className='col-6'>
              <h2>Angry Birds</h2>
            </div>
            <div className='col-2'>
              <h3>{this.state.t1comp4}</h3>
            </div>
            <div className='col-2'>
              <h3>{this.state.t2comp4}</h3>
            </div>
            <div className='col-2'>
              <h3>{this.state.t3comp4}</h3>
            </div>
          </div>
        </div>
        <div className='comp slide'>
          <div className='row'>
            <div className='col-6'>
              <h2>Dragon, Fly!</h2>
            </div>
            <div className='col-2'>
              <h3>{this.state.t1comp5}</h3>
            </div>
            <div className='col-2'>
              <h3>{this.state.t2comp5}</h3>
            </div>
            <div className='col-2'>
              <h3>{this.state.t3comp5}</h3>
            </div>
          </div>
        </div>
        <div className='comp result'>
          <div className='row'>
            <div className='col-6'>
              <h2>Resultat:</h2>
            </div>
            <div className='col-2'>
              <h3>
                {this.state.t1comp1 +
                  this.state.t1comp2 +
                  this.state.t1comp3 +
                  this.state.t1comp4 +
                  this.state.t1comp5}
              </h3>
            </div>
            <div className='col-2'>
              <h3>
                {this.state.t2comp1 +
                  this.state.t2comp2 +
                  this.state.t2comp3 +
                  this.state.t2comp4 +
                  this.state.t2comp5}
              </h3>
            </div>
            <div className='col-2'>
              <h3>
                {this.state.t3comp1 +
                  this.state.t3comp2 +
                  this.state.t3comp3 +
                  this.state.t3comp4 +
                  this.state.t3comp5}
              </h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
