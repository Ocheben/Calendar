/* eslint-disable no-plusplus */
import React from 'react';
import * as dateFns from 'date-fns';

const Days = (props) => {
  const { currentMonth } = props;
  const dateFormat = 'EEEE';
  const days = [];

  const startDate = dateFns.startOfWeek(currentMonth);

  for (let i = 0; i < 7; i++) {
    days.push(
      <div className="col col-center" key={i}>
        {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
      </div>
    );
  }

  return <div className="days row">{days}</div>;
};

export default Days;
