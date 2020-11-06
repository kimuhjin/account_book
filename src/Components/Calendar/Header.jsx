import React, { Component } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
export default class Header extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="RCA-header-container">
        <h2 className="RCA-header-calendarYM RCA-header-middle">
          {this.props.calendarYM}
        </h2>
        <ul className="RCA-header-buttons RCA-header-middle">
          <li>
            <i
              className="move-button left-img icon"
              onClick={() => {
                this.props.moveMonth(-1);
              }}
            >
              <AiOutlineArrowLeft />
            </i>
          </li>
          <li>
            <i
              className="move-button right-img icon"
              onClick={() => {
                this.props.moveMonth(1);
              }}
            >
              <AiOutlineArrowRight />
            </i>
          </li>
        </ul>
      </div>
    );
  }
}
