import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import UserList from '@/components/UserList.vue';
import UserCom from '@/components/UserCom.vue';
import AddUser from '@/components/AddUser.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      alias: '/user-list',
      name: 'userList',
      component: UserList,
      props: true,
      children: [
        {
          path: '/user/:id',
          name: 'user-details',
          component: UserCom,
          props: true,
        },
      ],
    },
    {
      path: '/add',
      name: 'add',
      component: AddUser,
      props: true,
    },
  ],
});

export default router;
