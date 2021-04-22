<script type="ts">
	import { onMount } from 'svelte';

	import NewsList from '../components/NewsList.svelte';
	import NewsBase from '../components/templates/NewsBase.svelte';

	let previewScale = 0.3;

	function resizePreview() {
		const scale = (window?.innerWidth * 40) / 100000;
		return Math.max(0.25, Math.min(0.5, scale));
	}

	onMount(() => {
		previewScale = resizePreview();
		window.addEventListener('resize', () => (previewScale = resizePreview()));
	});
</script>

<div class="create-post__container  w-full flex flex-col sm:flex-row justify-center px-4 sm:px-6">
	<div class="content__preview relative overflow-hidden">
		<div class="post-preview w-full" style="transform: scale({previewScale})">
			<NewsBase />
		</div>
	</div>
	<div class="content__news max-w-md pl-4 py-5">
		<NewsList />
	</div>
</div>

<style>
	.post-preview {
		transform-origin: 0 0;
	}
</style>
