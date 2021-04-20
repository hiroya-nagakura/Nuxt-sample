<template>
  <div>
    <b-jumbotron :header="article.title" :lead='article.target_site'>
      <p>
        {{ article.content }}
      </p>
      <b-button variant="primary" :to="'/articles/edit?id='+article.id">Edit</b-button>
      <b-button variant="danger" @click='deleteArticle'>Delete</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: [],
    }
  },
  mounted() {
    this.fetchArticle();
  },
  methods: {
    async fetchArticle(){
      const response = await this.$axios.$get(`/api/v1/articles/${this.$route.params['id']}`)
      this.article = response.article
    },
    async deleteArticle(){
      if(confirm('Are you sure you want to delete')){
        await this.$axios.$delete(`/api/v1/articles/${this.$route.params['id']}`)
        window.location.href='/articles'
      }
    },
    jumpPage() {
      this.$router.push({
      path: "/articles/edit",
      query: { id: this.article.id }
    });
    }
  }
}
</script>