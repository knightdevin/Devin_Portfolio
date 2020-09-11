// import { createMemoryHistory, createBrowserHistory } from 'history';

// const history =
//   process.env.NODE_ENV === 'test'
//     ? createMemoryHistory()
//     : createBrowserHistory();

import {createBrowserHistory} from 'history'

const history = createBrowserHistory()

export default history
