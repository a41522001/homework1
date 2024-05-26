import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Homework from "../views/Homework.vue";
import Service from "../views/Service.vue";
import Blog from "../views/Blog.vue";
import Contact from "../views/Contact.vue";
import All from "../views/blogChildren/All.vue";
import Uiux from "../views/blogChildren/Uiux.vue";
import ProductDesign from "../views/blogChildren/ProductDesign.vue";
import GraphicDesign from "../views/blogChildren/GraphicDesign.vue";
import Frontend from "../views/blogChildren/Frontend.vue";
const routes = [
    {
        path: "/",
        redirect: "home"
    },
    {
        path: "/home",
        name: "home",
        component: Home
    },
    {
        path: "/homework",
        name: "homework",
        component: Homework
    },
    {
        path: "/service",
        name: "service",
        component: Service
    },
    {
        path: "/blog",
        name: "blog",
        component: Blog,
        children: [
            {
                path: "",
                redirect: "/blog/all",
            },
            {
                path: "all",
                name: "all",
                component: All
            },
            {
                path: "uiux",
                name: "uiux",
                component: Uiux
            },
            {
                path: "productDesign",
                name: "productDesign",
                component: ProductDesign
            },
            {
                path: "graphicDesign",
                name: "graphicDesign",
                component: GraphicDesign
            },
            {
                path: "frontend",
                name: "frontend",
                component: Frontend
            },
        ]
    },
    {
        path: "/contact",
        name: "contact",
        component: Contact
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router;