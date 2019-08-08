import React from 'react';
import * as dateFns from 'date-fns';

const Header = (props) => {
  const {
    prevMonth, nextMonth, openModal, currentMonth
  } = props;
  const dateFormat = 'MMMM yyyy';

  return (
    <div className="header row flex-middle">
      <div className="col col-start">
        <h3>Reminder</h3>
      </div>
      <div className="col col-center">
        <div className="icon" onClick={prevMonth}>chevron_left</div>
      </div>
      <div className="col col-center">
        <span>{dateFns.format(currentMonth, dateFormat)}</span>
      </div>
      <div className="col col-center">
        <div className="icon" onClick={nextMonth}>chevron_right</div>
      </div>
      <div className="col col-end">
        <div className="icon" onClick={() => openModal(true, {}, false)}>
          add
        </div>
      </div>
    </div>
  );
};

export default Header;
