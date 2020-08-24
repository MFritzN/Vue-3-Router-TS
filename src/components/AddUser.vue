<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" required v-model="user.name" name="name" />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="user.description"
          name="description"
        />
      </div>

      <button @click="saveExample" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newExample">Add</button>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue';
import { User } from '@/model/user';
import UserList from './UserList.vue';

export default defineComponent ({
  name: 'AddUser',
  data () {
    return {
      user: new User ('', ''),
    };
  },
  props: {
    addUser: {
      type: Function as PropType<(user: User) => void>,
      required: true,
    },
  },
  methods: {
    saveExample () {
      this.addUser(this.user);
    },
  },
});
</script>

<style scoped>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
