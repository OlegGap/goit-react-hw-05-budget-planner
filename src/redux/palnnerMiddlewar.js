const logger = store => next => action => {
  console.log(action, store.getState());
  next(action);
};
export default logger;
