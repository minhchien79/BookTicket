import { combineReducers } from "redux";

import BookingTicketReducer from "./BookTicketReducer"

const rootReducer = combineReducers({
  // key: value
  BookingTicketReducer,
});

export default rootReducer;