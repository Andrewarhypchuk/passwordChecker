import { Middleware, MiddlewareAPI, Dispatch, AnyAction } from 'redux';

const localStorageMiddleware: Middleware = (store: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action: AnyAction) => {
  const result = next(action);

  const state = store.getState();
  localStorage.setItem('appState', JSON.stringify(state));

  return result;
};

export default localStorageMiddleware;