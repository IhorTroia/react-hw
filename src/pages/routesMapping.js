import HomePage from './HomePage';
import PageNotFound from './PageNotFound';
import AllTodos from "./AllTodos";
import SingleTodoItemPage from "./SingleTodoItemPage";
export default [
    {
        path: '/',
        component: HomePage
    },
    {
        path: 'todos',
        component: AllTodos
    },
    {
        path: 'todos/:id',
        component: SingleTodoItemPage
    },
    {
        path: '*',
        component: PageNotFound
    },
]
