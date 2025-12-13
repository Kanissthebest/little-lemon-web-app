import React, { createContext, useReducer } from 'react';
import About from './MainComponents/About';
import HeroSection from './MainComponents/HeroSection';
import Highlights from './MainComponents/Highlights';
import Testimonials from './MainComponents/Testimonials';

/* global globalThis */

const BookingTimesContext = createContext(null);

export function initializeTimes(date) {
  // Try to use the provided fetchAPI from the global script if available.
  // Fallback to the default static slots so tests and environments without
  // the external script still work.
  try {
    let targetDate;
    if (!date) targetDate = new Date();
    else targetDate = (date instanceof Date) ? date : new Date(date);
    if (typeof globalThis !== 'undefined' && typeof globalThis.fetchAPI === 'function') {
      // fetchAPI is expected to receive a Date object
      return globalThis.fetchAPI(targetDate);
    }
  } catch (e) {
    // ignore and fall back
  }
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

export function updateTimes(state, action) {
  switch (action.type) {
    case 'dateChange': {
      try {
        if (typeof globalThis !== 'undefined' && typeof globalThis.fetchAPI === 'function') {
          const dateArg = (action.date instanceof Date) ? action.date : new Date(action.date);
          return globalThis.fetchAPI(dateArg);
        }
      } catch (e) {
        // ignore and fall back to initializeTimes
      }
      return initializeTimes(action.date);
    }
    default:
      return state;
  }
}

export function BookingTimesProvider({ children }) {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], () => initializeTimes(null));
  return (
    <BookingTimesContext.Provider value={{ availableTimes, dispatch }}>
      {children}
    </BookingTimesContext.Provider>
  );
}

function Main() {
  return (
    <main>
        <HeroSection />
        <Highlights />
        <Testimonials />
        <About />
    </main>
  );
}

export { BookingTimesContext };
export default Main;