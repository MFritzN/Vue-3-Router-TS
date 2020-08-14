<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div>
        <router-link to="/" class="navbar-brand">vue 3.x</router-link>
      </div>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <div>
            <router-link to="/user-list" class="nav-link">UserList</router-link>
          </div>
        </li>
        <li class="nav-item">
          <div>
            <router-link to="/add" class="nav-link">Add User</router-link>
          </div>
        </li>
      </div>
    </nav>
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  data() {
    return {
      store: useStore(),
    };
  },
  method: {
    importantMethod (any: any) {
      console.log(any);
    }
  }
});
</script>
