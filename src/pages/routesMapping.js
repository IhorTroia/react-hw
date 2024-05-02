import HomePage from './HomePage';
import PageNotFound from './PageNotFound';
import SingleTodoPage from './SingleTodoPage';
import AllTodoPage from "./AllTodosPage";

export default [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: 'todos',
        component: AllTodoPage,
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