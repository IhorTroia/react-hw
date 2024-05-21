import HomePage from './HomePage';
import PageNotFound from './PageNotFound';
import SingleTodoPage from './SingleTodoPage';

export default [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '*',
        component: PageNotFound,
    },
    {
        path: 'todo',
        component: SingleTodoPage,
    },
]