import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import * as dateFns from 'date-fns';
import apiCall from '../../_services/requests';
import { storeReminders } from '../../_store/actions';
import Cells from '../Cells/Cells';
import Header from '../Header/Header';
import Days from '../Days/Days';
import Modal from '../Modal/Modal';

const Calendar = (props) => {
  const { reminders, dispatch } = props;
  const [state, setState] = useState({
    currentMonth: new Date(),
    selectedDate: new Date(),
    modalOpen: false,
    formInputs: {
      time: new Date()
    },
    isEdit: false
  });

  const refreshReminders = async () => {
    const response = await apiCall('GET', 'http://localhost:3001/reminders');
    if (response.constructor === Array) {
      dispatch(storeReminders(response));
    }
  };

  useEffect(() => {
    const getReminders = async () => {
      const response = await apiCall('GET', 'http://localhost:3001/reminders');
      if (response.constructor === Array) {
        dispatch(storeReminders(response));
      }
    };
    getReminders();
  }, [dispatch]);

  const nextMonth = () => {
    setState({
      ...state,
      currentMonth: dateFns.addMonths(state.currentMonth, 1)
    });
  };

  const prevMonth = () => {
    setState({
      ...state,
      currentMonth: dateFns.subMonths(state.currentMonth, 1)
    });
  };

  const openModal = (modalState, formInputs, isEdit) => {
    setState({
      ...state,
      modalOpen: modalState,
      formInputs,
      isEdit
    });
  };

  const handleDateChange = (date) => {
    setState({
      ...state,
      formInputs: {
        ...state.formInputs,
        time: date
      }
    });
  };
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      formInputs: {
        ...state.formInputs,
        [name]: value
      }
    });
  };

  const handleSubmit = async () => {
    await apiCall('POST', 'http://localhost:3001/reminders', state.formInputs);
    refreshReminders();
    openModal(false, {}, false);
  };

  const handleEdit = async () => {
    await apiCall('PUT', `http://localhost:3001/reminders/${state.formInputs.id}`, state.formInputs);
    refreshReminders();
    openModal(false, {}, false);
  };

  const handleDelete = async () => {
    await apiCall('DELETE', `http://localhost:3001/reminders/${state.formInputs.id}`);
    refreshReminders();
    openModal(false, {}, false);
  };

  const { formInputs } = state;
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className="root">
        <div className="calendar">
          <Header
            prevMonth={prevMonth}
            nextMonth={nextMonth}
            openModal={openModal}
            currentMonth={state.currentMonth}
          />
          <Days currentMonth={state.currentMonth} />
          <Cells
            currentMonth={state.currentMonth}
            selectedDate={state.selectedDate}
            reminders={reminders}
            openModal={openModal}
          />
        </div>
        {
        state.modalOpen
        && (
        <Modal
          formInputs={formInputs}
          isEdit={state.isEdit}
          openModal={openModal}
          handleChange={handleChange}
          handleDateChange={handleDateChange}
          handleSubmit={handleSubmit}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
        )
      }

      </div>
    </MuiPickersUtilsProvider>
  );
};

const mapStateToProps = state => ({
  reminders: state.reminders
});

export default connect(mapStateToProps)(Calendar);
