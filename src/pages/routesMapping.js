import HomePage from './HomePage';
import PageNotFound from './PageNotFound';
import TodosPage from './TodosPage';

export default [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: 'todos',
        component: TodosPage,
    },
    {
        path: '*',
        component: PageNotFound,
    },
]