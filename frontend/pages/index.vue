<template>
  <div class="container">
    <div>
      <Header />
    </div>
    <div>
      <TopPage />
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subTitle: 'Zenn is good service!!',
      tasks: []
    }
  },
  methods: {
    async getSomething() {
      const response = await this.$axios.$get('http://localhost:5000/api/v1/tasks')
      this.tasks = JSON.parse(response.tasks)
    }
  },
}
</script>