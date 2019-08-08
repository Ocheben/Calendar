/* eslint-disable import/prefer-default-export */
import REMINDERS from './constants';

const { STORE_REMINDERS } = REMINDERS;

export const storeReminders = reminders => ({
  type: STORE_REMINDERS,
  payload: reminders
});
