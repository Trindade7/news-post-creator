<script type="ts">
	import instagramImage from '../../../static/templates/hiff180/instagram.png';
	import telegramImage from '../../../static/templates/hiff180/telegram.png';
	import bannerImage from '../../../static/templates/hiff180/banner.png';
	import headlineImage from '../../../static/templates/hiff180/headline.png';

	export let headlines: string[] = [
		'Real-world data comes to NFTs as street artists geotag their work',
		'BTC/USD Eyeing 59955 Ahead of 60000:  Sally Ho\u0027s Technical Analysis 7 April 2021 BTC',
		'$2.52B in bearish Bitcoin options signal pro traders are hedging their bets',
		'These limited edition NFTs of real-life street art are getting listed on Rarible',
		'EOS, NEM, Maker Price Analysis: 06 April',
		'Crypto lobby groups are gaining traction in Washington as the threat of regulatory bottleneck looms L ngton as the threat of regulatory bottleneck looms'
	];
</script>

<div class="post_container" style="width: 1080px; height: 1080px;">
	<div class="flex flex-col w-full h-full p-4 text-white">
		<header class="flex flex-row justify-between relative">
			<div class="flex content-center items-center">
				<img class="logo" src="http://fakeimg.pl/122x122?font=lobster" alt="" />
				<div class="flex items-center">
					<h3 class="border-b-4 border-black font-bold text-5xl">
						What's happening <br />
						with cryptocurrency?
					</h3>
				</div>
			</div>
			<div class="banner absolute -right-4 -top-4">
				<img src={bannerImage} alt="" />
			</div>
		</header>

		<div class="py-16 px-8 headlines flex-auto">
			<ul class="flex flex-col justify-between h-full">
				{#each headlines as headline}
					<li class="flex items-center py-2">
						<div class="leading-icon pr-8 flex-none">
							<img src={headlineImage} alt="" />
						</div>
						<p>{headline}</p>
					</li>
				{/each}
			</ul>
		</div>
		<div class="footer flex">
			<div class="left-item flex content-center">
				<img class="flex-none" src={telegramImage} alt="" />
				<div class="flex-none pl-4 flex items-center">
					<span class="social-handle">Instagram handle</span>
				</div>
			</div>
			<div class="flex-auto" />
			<div class="right-item flex content-center">
				<div class="flex-none pr-4 flex items-center">
					<span class="social-handle">Instagram handle</span>
				</div>
				<img class="flex-none" src={instagramImage} alt="" />
			</div>
		</div>
	</div>
</div>

<style>
	.post_container {
		background-color: black;
	}
	header {
		align-items: center;
		align-content: center;
	}
	header .logo {
		width: 122px;
		height: 122px;
		margin-right: 16px;
		border-radius: 50%;
	}
	header h3 {
		color: #f9b226;
		background-color: transparent;
		font-family: 'SegoeUI-Bold', Helvetica;
		font-size: 48px;
		line-height: 64px;
		font-weight: 700;
		padding-bottom: 16px;
		border-bottom: 5px solid;
	}

	.headlines {
		font-family: Arial-Regular, Helvetica;
		font-size: 33px;
		line-height: 39px;
	}

	.headlines .leading-icon {
		width: 89px;
		height: 30px;
	}

	.footer {
		color: #f9b226;
	}
	.footer .social-handle {
		font-size: 28px;
		font-weight: bold;
	}
</style>
