/* eslint-disable no-loop-func */
/* eslint-disable no-plusplus */
import React from 'react';
import * as dateFns from 'date-fns';

const Cells = (props) => {
  const {
    currentMonth, reminders, openModal
  } = props;
  const monthStart = dateFns.startOfMonth(currentMonth);
  const monthEnd = dateFns.endOfMonth(monthStart);
  const startDate = dateFns.startOfWeek(monthStart);
  const endDate = dateFns.endOfWeek(monthEnd);

  const dateFormat = 'd';
  const rows = [];

  let days = [];
  let day = startDate;
  let formattedDate = '';

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = dateFns.format(day, dateFormat);
      const cloneDay = day;
      days.push(
        <div
          className={`col cell ${
            !dateFns.isSameMonth(day, monthStart)
              ? 'disabled'
              : dateFns.isSameDay(day, new Date()) && 'selected'
          }`}
          key={day}
        >
          <span className="number">{formattedDate}</span>
          {reminders.map((item) => {
            if (dateFns.isSameDay(new Date(item.time), cloneDay)) {
              return (
                <div className="reminder" onClick={() => openModal(true, item, true)} style={{ background: item.tag }} key={item.time}><span>{item.title}</span></div>
              );
            }
            return null;
          })}
          <span className="bg">{formattedDate}</span>
        </div>
      );
      day = dateFns.addDays(day, 1);
    }
    rows.push(
      <div className="row" key={day}>
        {days}
      </div>
    );
    days = [];
  }
  return <div className="body">{rows}</div>;
};

export default Cells;
