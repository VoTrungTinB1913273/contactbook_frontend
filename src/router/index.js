import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";

const routes = [
    {
        path: "/",
        name: "ContactBook",
        component: ContactBook,
    },
    // {
    //     path: '/',
    //     name : "EditContact",
    //     component: EditContact,
    // }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;