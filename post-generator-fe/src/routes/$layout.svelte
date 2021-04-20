<script>
	import "../app.postcss";
  import AppNav from '../components/AppNav.svelte';
  import AppFooter from '../components/AppFooter.svelte';
</script>

<div class="app__container bg-white  dark:bg-gray-800
 flex flex-col max-w-screen-xl mx-auto h-screen px-4">
	<AppNav></AppNav>

	<slot />

  <div class="flex-auto"></div>

  <AppFooter></AppFooter>
</div>