<template>
  <div>
    <b-form @submit="registerUser">
      <b-form-text>
        <h2>新規登録</h2>
      </b-form-text>

      <b-form-group id="input-group-1" label="Username:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="user.name"
          placeholder="Username"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Email address:"
        label-for="input-2"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-2"
          v-model="user.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Password:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="user.password"
          placeholder="Password"
          type='password'
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Password_confirmation:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="user.password_confirmation"
          placeholder="password_confirmation"
          type='password'
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Sign up</b-button>
    </b-form>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        user: {
          name: '',
          email: '',
          password: '',
          password_confirmation: '',
        }
      }
    },
    methods: {
      registerUser() {
        this.$axios.post('http://localhost:5000/api/v1/auth', this.user).then((response) => {
          window.location.href = '/users/comfirmation'
        })
      },
    },
  }
</script>