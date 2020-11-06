import React, { Fragment, Component } from "react";
import Header from "../Components/Calendar/Header";
import Calendar from "../Components/Calendar/Calendar";
import moment from "moment";
import WallPaper from "../IPhoneFrame/WallPaper.png";
import AppIconImage from "../IPhoneFrame/AppIcon.png";
import styled from "styled-components";

export default class Calendarpage extends Component {
  state = {
    calendarYM: moment(),
    today: moment(),
    selected: moment().format("YYYY-MM-DD"),
  };
  static defaultProps = {
    clickFn: () => {},
  };

  moveMonth = (month) => {
    this.setState({
      calendarYM: this.state.calendarYM.add(month, "M"),
    });
  };

  changeSelected = (clickedDate) => {
    if (moment(clickedDate).isSame(this.state.selected, "day")) {
      this.props.clickFn(clickedDate);
      return;
    }
    this.setState({
      selected: clickedDate,
    });
    this.props.clickFn(clickedDate);

    if (moment(clickedDate).isBefore(this.state.calendarYM, "month")) {
      this.moveMonth(-1);
    } else if (moment(clickedDate).isAfter(this.state.calendarYM, "month")) {
      this.moveMonth(1);
    }
  };

  render() {
    return (
      <Fragment>
        <div className="test-layout">
          <div className="RCA-app-container">
            <Header
              calendarYM={this.state.calendarYM.format("YYYY년 MM월")}
              today={this.state.today.format("현재 YYYY - MM - DD")}
              moveMonth={this.moveMonth}
            />
            <Calendar
              YM={this.state.calendarYM.format("YYYY-MM-DD")}
              selected={this.state.selected}
              changeSelected={this.changeSelected}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}
