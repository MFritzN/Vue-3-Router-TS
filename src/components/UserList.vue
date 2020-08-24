<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>Users List</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(user, index) in users"
          :key="index"
          @click="setActiveUser(user, index)"
        >
          {{ user.title }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllExamples">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentExample">
        <h4>Example</h4>
        <div>
          <label><strong>Title:</strong></label> {{ currentExample.title }}
        </div>
        <div>
          <label><strong>Description:</strong></label>
          {{ currentExample.description }}
        </div>

        <router-view></router-view>
        <a
          class="badge badge-warning"
          :href="'/user/' + currentExample.id"
        >
          Edit
        </a>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Example...</p>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { User } from '@/model/user'

export default defineComponent({
  name: 'UserListCom',
  data () {
    return{
      users: [] as Array<User>,
      currentUser: null,
      currentIndex: -1,
    };
  },
  methods: {
    addUser(user: User): void {
      user.id = this.users.length;
      this.users.push(user);
    },
    setActiveUser(index: number): void {
      this.currentIndex = -1;
    },
    removeUser(index: number): void {
      if (index > -1) {
        this.users.splice(index, 1);
      }
      for (index = 0; index < this.users.length; index++) {
        this.users[index].id = index;
      }
      this.currentIndex = -1;
    },
  },
  computed: {
    currentUser(): (User|null) {
      if (this.currentIndex < 0) {
        return null;
      } else {
        return this.users[this.currentIndex];
      }
    }
  },
});

</script>

<style scoped>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
