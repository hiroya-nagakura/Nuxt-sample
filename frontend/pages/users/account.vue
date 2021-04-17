<template>
  <b-row class='justify-content-center'>
    <b-card title='logout' class='m-5'>
      <b-col sm="8" class="p-2">
        <p>{{ $auth.loggedIn }}</p>
        <p>{{ $auth.user }}</p>
        <b-button @click="userLogout">
          logout
        </b-button>
      </b-col>
    </b-card>
  </b-row>
</template>

<script>
export default {
  methods: {
    userLogout() {
      this.$auth.logout()
    }
  },
  computed: {
    user() {
      return this.$auth.user;
    }
  },
}
</script>