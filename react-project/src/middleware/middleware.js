export const loggerMiddleware = (store) => (next) => (action) => {
  console.log("logger middleware", action);
  next(action);
};
