<template>
  <b-container>
    <b-row>
      <b-col cols=4
        v-for='article in articles' :key = 'article.id'
      >
        <b-card
          :title='article.title'
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>
            {{ article.content }}
          </b-card-text>

          <b-button :href="'/articles/'+article.id" variant="primary">Go detail</b-button>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
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