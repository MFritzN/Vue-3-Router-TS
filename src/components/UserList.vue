<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>Users List</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == $store.state.currentIndex }"
          v-for="(user, index) in $store.state.users"
          :key="index"
          @click="$store.state.currentIndex = index"
        >
          {{ user.name }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="$store.commit('removeAllUsers')">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="$store.state.currentIndex > -1">
        <h4>User</h4>
        <div>
          <label><strong>Name:</strong></label> {{ $store.state.users[$store.state.currentIndex].name }}
        </div>
        <div>
          <label><strong>Description:</strong></label>
          {{ $store.state.users[$store.state.currentIndex].description }}
        </div>

        <button @click="$router.push('/user/' + $store.state.currentIndex)" class="badge badge-warning">
          Edit
        </button>
        <router-view></router-view>

      </div>
      <div v-else>
        <br />
        <p>Click for details...</p>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UserList',
});

</script>

<style scoped>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
