<template>
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
</template>

<script>
export default {
  props: ['article']
}
</script>