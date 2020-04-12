import React, { Component } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  isSameMonth,
  isSameDay,
  toDate,
} from "date-fns";
import { sv } from "date-fns/esm/locale";
import { getTimeReport } from "../services/timeReportService";

class Calendar extends Component {
  state = {
    currentMonth: new Date(),
  };

  renderHeader() {
    const dateFormat = "MMMM yyyy";

    return (
      <div className="header row flex-middle">
        <div className="col col-start" onClick={this.prevMonth}>
          <div className="icon">chevron_left</div>
        </div>
        <div className="col col-center">
          <span>
            {format(this.state.currentMonth, dateFormat, { locale: sv })}
          </span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  }

  renderDays() {
    const dateFormat = "EEEE";
    const days = [];
    let startDate = startOfWeek(this.state.currentMonth, { weekStartsOn: 1 });
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {format(addDays(startDate, i), dateFormat, { locale: sv })}
        </div>
      );
    }
    return <div className="days row">{days}</div>;
  }

  renderCells() {
    const { selectedDate, timeReports } = this.props;
    const { currentMonth } = this.state;
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
    const endDate = endOfWeek(monthEnd);
    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        let cssClass = "col cell";
        const cloneDay = day;
        const foundDate = timeReports.find(
          (timeReport) => timeReport.date === format(day, "yyyy-MM-dd")
        );
        if (foundDate) {
          cssClass += " populated";
        }
        days.push(
          <div
            className={`${cssClass} ${
              !isSameMonth(day, monthStart)
                ? "disabled"
                : isSameDay(day, selectedDate)
                ? "selected"
                : ""
            }`}
            key={day}
            onClick={() => this.onDateClick(toDate(cloneDay))}
          >
            <span className="number ">{formattedDate}</span>
          </div>
        );

        day = addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  }

  onDateClick = async (day) => {
    const formatedDate = format(day, "yyyy-MM-dd");
    try {
      const { data: timeReport } = await getTimeReport(formatedDate);
      this.props.onTimeReportSelect(timeReport);
      this.props.onDateSelect(formatedDate);
    } catch {
      this.props.onDateSelect(formatedDate);
    }

    this.props.onClick();
  };

  nextMonth = () => {
    this.setState({
      currentMonth: addMonths(this.state.currentMonth, 1),
    });
  };
  prevMonth = () => {
    this.setState({
      currentMonth: subMonths(this.state.currentMonth, 1),
    });
  };

  render() {
    return (
      <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
      </div>
    );
  }
}

export default Calendar;
