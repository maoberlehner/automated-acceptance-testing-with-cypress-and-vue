<template>
  <div id="app" @click.capture="resetInactivityTimer">
    <router-view></router-view>
    <p v-if="showLogoutWarning" data-qa="logout warning">You'll be logged out in 30 seconds!</p>
  </div>
</template>

<script>
export default {
  name: `App`,
  data() {
    return {
      userInactivityInMs: 0,
      showLogoutWarning: false,
    };
  },
  created() {
    const warningTimerInMs = 270 * 1000;
    const intervalInMs = 1000;

    setInterval(() => {
      if (this.userInactivityInMs >= warningTimerInMs) {
        this.showLogoutWarning = true;
      } else {
        this.showLogoutWarning = false;
      }

      this.userInactivityInMs += intervalInMs;
    }, intervalInMs);
  },
  methods: {
    resetInactivityTimer() {
      this.userInactivityInMs = 0;
    },
  },
};
</script>
