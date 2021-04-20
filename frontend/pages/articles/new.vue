<template>
  <div>
    <ArticleForm :form='form' :action='createArticle' />
  </div>
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