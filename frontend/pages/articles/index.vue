<template>
  <div>
    <b-row>
      <b-col cols=4
        v-for='article in articles' :key = 'article.id'
      >
        <ArticleCard :article='article' />
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: []
    }
  },
  mounted() {
    this.fetchArticles();
  },
  methods: {
    async fetchArticles() {
      const response = await this.$axios.$get('/api/v1/articles')
      this.articles = response.articles
    }
  }
}
</script>