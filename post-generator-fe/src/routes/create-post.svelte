<script type="ts">
	import NewsList from '../components/NewsList.svelte';
	import NewsBase from '../components/templates/NewsBase.svelte';
</script>

<div class="create-post__container  w-full flex flex-col sm:flex-row justify-center">
	<div class="content__preview relative">
		<div class="post-preview">
			<NewsBase />
		</div>
	</div>
	<div class="content__news max-w-md px-4 py-5 sm:px-6">
		<NewsList />
	</div>
</div>

<style>
	.post-preview {
		transform-origin: 0 0;
		transform: scale(0.25);
	}
</style>
