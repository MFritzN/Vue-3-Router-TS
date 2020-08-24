<template>
  <div v-if='currentExample' class='edit-form'>
    <h4>Example</h4>
    <form>
      <div class='form-group'>
        <label for='username'>User</label>
        <input
          type='text'
          class='form-control'
          id='title'
          v-model='currentExample.title'
        />
      </div>
      <div class='form-group'>
        <label for='description'>Description</label>
        <input
          type='text'
          class='form-control'
          id='description'
          v-model='currentExample.description'
        />
      </div>

    <button class='badge badge-danger mr-2' @click='deleteExample'>
      Delete
    </button>

    <button type='submit' class='badge badge-success' @click='updateExample'>
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Example...</p>
  </div>
</template>

<script lang='ts'>
import { User } from '@/model/user';
import { defineComponent, PropType, computed, Prop } from 'vue';
import UserList from './UserList.vue';

export default defineComponent ({
  name: 'UserCom',
  computed: {
    user(): (User|null) {
      return this.users[this.id];
    },
  },
  props: {
    users: {
      type: Array as PropType<Array<User>>,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    removeUser: {
      type: Function as PropType<(id: number) => void>,
      required: true,
    },
  },
});
</script>

<style scoped>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
