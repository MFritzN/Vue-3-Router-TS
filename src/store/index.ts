import { createStore } from 'vuex';
import User from '@/model/user';

export default createStore({
  state: {
    users: [] as Array<User>,
    currentIndex: -1.
  },
  mutations: {
    addUser(state, user: User): void {
      user.id = state.users.length; // eslint-disable-line no-param-reassign
      state.users.push(user);
    },
    removeUser(state, index: number): void {
      if (index > -1) {
        state.users.splice(index, 1);
      }
      /* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */

      for (index = 0; index < state.users.length; index++) { // eslint-disable-line no-param-reassign, max-len
        state.users[index].id = index; // eslint-disable-line no-param-reassign
      }
    },
    removeAllUsers(state): void {
      state.currentIndex = -1;
      state.users = [] as Array<User>;
    },
  },
  actions: {
  },
  modules: {
  },
});
