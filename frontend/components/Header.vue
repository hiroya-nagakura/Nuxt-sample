<template>
	<b-navbar toggleable="lg" type="dark" variant="dark">
    <NuxtLink to='/'>
      <b-navbar-brand>
        <img src="~/assets/images/logo.png" alt="logo" class='header-logo'>
      </b-navbar-brand>
    </NuxtLink>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav v-for='link in links' :key='link.id' >
        <b-nav-item :to='link.path'>
            {{ link.title }}
        </b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown right >
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item v-for='link in links2' :key='link.id' :href="link.href">{{ link.title }}</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
	data() {
		return{
			links: [
				{title: 'メニュー一覧', path: '/articles'},
				{title: 'メニュー投稿', path: '/articles/new'},
				{title: 'トレーニング記録', path: '#'},
				{title: '体重記録', path: '#'},
			],
			links2: [
				{title: 'プロフィール' , href: '#'},
				{title: 'ログアウト' , href: '#'}
			]
		}
	}
}
</script>

<style scoped>
.header-logo{
  width: 150px;
}
</style>