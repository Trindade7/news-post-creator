<script type="ts">
	import NewsList from '../components/NewsList.svelte';
	import Hiff18 from '../components/templates/Hiff18.svelte';
	import NewsBase from '../components/templates/NewsBase.svelte';
</script>

<div class="home__container flex flex-col sm:flex-row justify-center">
	<div class="content__preview  w-full ">
		<div class="post-preview" style="transform-origin: 0 0;
    transform: scale(.45);">
			<NewsBase />
		</div>
	</div>
	<!-- <div class="content__news px-4 py-5 sm:px-6">
		<NewsList />
	</div> -->
</div>

<style>
	.post-preview {
		transform: scale(e);
	}
</style>
