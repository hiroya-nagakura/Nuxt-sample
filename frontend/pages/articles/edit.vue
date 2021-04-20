<template>
  <div>
    <ArticleForm :form='form' :action='updateArticle' />
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