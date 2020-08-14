<template>
  <div v-if="$route.params.id" class="edit-form">
    <h4>User</h4>
    <form>
      <div class="form-group">
        <label for="username">User</label>
        <input type="text" class="form-control" id="title" v-model="$store.state.users[$route.params.id].name" />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description" v-model="$store.state.users[$route.params.id].description" />
      </div>
    </form>
    <button class="badge badge-danger mr-2" @click="$store.commit('removeUser', $store.state.currentIndex); $store.state.currentIndex = -1; $router.push('/user-list');">Delete</button>
    <div>
      <router-link to='/user-list'>
        <button class="badge badge-success"> return </button>
      </router-link>
    </div>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Example...</p>
  </div>
</template>

<script lang='ts'>
import User from "@/model/user";
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserCom",
});
</script>

<style scoped>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
