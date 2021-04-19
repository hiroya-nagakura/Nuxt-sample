<template>
  <div class='top'>
    <div class='top-contents'>
      <TopPageSearch />
    </div>
  </div>
</template>

<style scoped>
.top{
  background-image: url(~/assets/images/Top.jpg);
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2em;
  margin-top: -100px;
}
.top-contents{
  background-color: rgba(0,0,0,0.5);
  width: 90%;
  padding: 1em 1em;
  border-radius: 2em;
}
</style>