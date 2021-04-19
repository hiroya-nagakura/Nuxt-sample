<template>
  <div>
    <b-form @submit.prevent='updateArticle'>
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
  </div>
</template>

<script>
export default {
  data() {
    return{
      form: {
        id: "",
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
  mounted() {
    this.fetchArticle();
  },
  methods: {
    async fetchArticle() {
      const response = await this.$axios.$get(`/api/v1/articles/${this.$route.query.id}`)
      this.form = response.article
    },
    async updateArticle() {
      try {
        const response = await this.$axios.$put(`/api/v1/articles/${this.form.id}`,
                                                  { article: this.form})
        window.location.href = `/articles/${this.form.id}`
      } catch(e) {
        alert(e.response.data);
      }
    }
  }
}
</script>