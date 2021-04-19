<template>
  <b-container>
    <b-form @submit.prevent='createArticle'>
      <b-form-group
        label='Title:'
      >
        <b-form-input
          placeholder="Enter title"
          v-model='form.title'
          required
        >
        </b-form-input>
      </b-form-group>

      <b-form-group
        label="Target site:"
      >
        <b-form-select
          v-model="form.target_site"
          :options="options"
        >
        </b-form-select>
      </b-form-group>

      <b-form-group
        label='Content:'
      >
        <b-form-textarea
          placeholder="Enter content"
          v-model="form.content"
          rows=6
          max-rows=10
          required
        >
        </b-form-textarea>

        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form-group>
    </b-form>
  </b-container>
</template>

<script>
export default {
  data() {
    return{
      form: {
        title: "",
        target_site: null,
        content: "",
      },
      options: [
        { value: null, text: 'Please select target site' },
        { value: 1, text: 'Chest' },
        { value: 2, text: 'Arms' },
        { value: 3, text: 'Back' },
        { value: 4, text: 'Abs' },
        { value: 5, text: 'Shoulder' },
        { value: 6, text: 'Legs' },
      ]
    }
  },
  methods: {
    async createArticle() {
      try {
        const response = await this.$axios.$post('/api/v1/articles',
                                                  { article: this.form})
        window.location.href = '/articles'
      } catch(e) {
        alert(e.response.data);
      }
    }
  }
}
</script>