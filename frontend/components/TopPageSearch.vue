<template>
  <b-form inline class='top-search'>
    <b-form-input size="lg" class="mr-sm-2 top-search-input" placeholder='メニューや鍛えたい部位で検索'></b-form-input>
    <b-button size="md" class="my-2 my-sm-0" type="submit">Search</b-button>
  </b-form>
</template>

<style scoped>
.top-search{
  width: 90%;
  justify-content: center;
  font-size: 2em;
}
.top-search-input{
  border: none;
  height: 2.0em;
  width: 80%;
  text-align: center;
  padding-right: 3em;
}
</style>