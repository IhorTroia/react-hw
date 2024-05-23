import HomePage from './HomePage';
import SingleTodoPage from './SingleTodoPage';
import AllTodosPage from "./AllTodosPage";
import PageNotFound from './PageNotFound';

export default [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: 'todos',
        component: AllTodosPage,
    },
    {
        path: 'todos/:id',
        component: SingleTodoPage,
    },
    {
        path: '*',
        component: PageNotFound,
    },
]