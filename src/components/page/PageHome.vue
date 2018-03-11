<template>
  <div :class="$options.name">
    <header data-qa="header">
      <p v-if="user" data-qa="username">{{ user.username }}</p>
    </header>
    <main>
      <h1 data-qa="main headline">Home</h1>
    </main>
  </div>
</template>

<script>
import axios from 'axios';

// This would usually come from a cookie or the local storage.
const currentUserId = 1;

export default {
  name: `PageHome`,
  data() {
    return {
      user: null,
    };
  },
  created() {
    this.fetchUser(currentUserId);
  },
  methods: {
    async fetchUser(id) {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

      this.user = response.data;
    },
  },
};
</script>
