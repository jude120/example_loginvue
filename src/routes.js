import Index from "./components/Index";
import home from "./components/home";
import HelloWorld from "./components/HelloWorld";

export default [
    {
        path: '/',
        name:'principal',
        component: Index,
        meta: { requiresAuth: false},
    },
    {
        path: '/home',
        name:'home',
        component: home,
        meta: { requiresAuth: true},
    },
    {
        path: '/hello',
        name:'hello',
        component: HelloWorld,
        meta: { requiresAuth: false},
    },

]