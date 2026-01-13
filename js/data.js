const COMMENTS_PER_CLICK = 5;
const ERROR_TIMEOUT = 5000;

const isEscapeKey = (evt) => evt.key === 'Escape';

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {
  isEscapeKey,
  COMMENTS_PER_CLICK,
  debounce,
  ERROR_TIMEOUT
};
