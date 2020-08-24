import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      alias: '/user-list',
      name: 'userList',
      component: () => import('../components/UsersList.vue'),
      children: [
        {
          path: 'user/:id',
          name: 'user-details',
          component: () => import('../components/User.vue'),
          props: true,
        },
      ],
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('../components/AddUser.vue'),
      props: true,
    },
  ],
});

export default router;
