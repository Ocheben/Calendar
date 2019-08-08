import React from 'react';
import { DateTimePicker } from '@material-ui/pickers';

const Modal = (props) => {
  const {
    formInputs, isEdit, openModal, handleChange, handleDateChange, handleEdit, handleDelete,
    handleSubmit
  } = props;
  return (
    <div className="modal">
      <div className="modal-header">
        <h3 className="col-center">Set Reminder</h3>
        <div className="icon col-end" onClick={() => openModal(false)}>
           close
        </div>
      </div>
      <div className="modal-content">
        <div className="group">
          <input type="text" maxLength="30" required name="title" value={formInputs.title} onChange={e => handleChange(e)} />
          <span className="highlight" />
          <span className="bar" />
          <label htmlFor="title">Title</label>
        </div>
        <div className="group select">
          <select id="tag" value={formInputs.tag} name="tag" onChange={e => handleChange(e)}>
            <option value="#999999">Choose Tag</option>
            <option value="#e53935">Urgent</option>
            <option value="#1e88e5">Casual</option>
            <option value="#00897b">Random</option>
          </select>
          <span className="highlight" />
          <span className="bar" />
          <label htmlFor="tag">Tag</label>
        </div>

        <DateTimePicker
          className="group"
          label="Date & Time"
          value={formInputs.time}
          onChange={handleDateChange}
        />
        <div className="actions">
          {
                isEdit
                  ? (
                    <div>
                      <button type="submit" className="edit-btn" onClick={handleEdit}>Edit</button>
                      <button type="submit" className="del-btn" onClick={handleDelete}>Delete</button>
                    </div>
                  )
                  : (
                    <button type="submit" className="add-btn" onClick={handleSubmit}>Add</button>
                  )
              }
        </div>
      </div>
    </div>
  );
};

export default Modal;
