<template>
  <div class="submit-form">
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" class="form-control" id="name" required v-model="name" name="name" />
    </div>

    <div class="form-group">
      <label for="description">Description</label>
      <input
        class="form-control"
        id="description"
        required
        v-model="description"
        name="description"
      />
    </div>
    <button @click="$store.commit('addUser', newUser(), 0); $router.push('/')" class="btn btn-success">Submit</button>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import User from '@/model/user';

export default defineComponent({
  name: 'AddUser',
  data() {
    return {
      name: '',
      description: '',
    };
  },
  methods: {
    newUser() {
      return new User (this.name, this.description);
    }
  }
});
</script>

<style scoped>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
