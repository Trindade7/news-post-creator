<script type="ts">
	let headlines: { title: string; date?: any; url: string }[];
	headlines = [
		'Real-world data comes to NFTs as street artists geotag their work',
		'Balancer to Appear Outside Ethereum, Could Become Algorand\u0027s Uniswap',
		'Grayscale adds Chainlink to its large-cap digital asset fund',
		'Bitcoin and Crypto Market Roundup For Last Week',
		'Men\u0027s College Basketball Player of the Year Luka Garza Selling NFT',
		'How Chainlink’s (LINK) 22% rally could be just the start',
		'Paxos applies for clearing license with SEC following successful pilot tests',
		'Privacy Chat App Signal Rolls Out Cryptocurrency Payments',
		'2109 Remains Technically Significant for ETH/USD:  Sally Hos Technical Analysis 7 April 2021 ETH',
		'CoinMarketCap removes South Korea crypto exchanges from Bitcoin price tracker',
		'Peter Brandt Turns Bullish on XRP After Spotting Extremely Rare Pattern',
		'4 Reasons Altcoin Season 2021 Has Officially Started',
		'Auction house Sotheby’s is hosting its first NFT sale next week',
		'CoinShares Launches Litecoin-backed Exchange Traded Product (ETP)',
		'BTC/USD Eyeing 59955 Ahead of 60000:  Sally Ho\u0027s Technical Analysis 7 April 2021 BTC',
		'$2.52B in bearish Bitcoin options signal pro traders are hedging their bets',
		'These limited edition NFTs of real-life street art are getting listed on Rarible',
		'EOS, NEM, Maker Price Analysis: 06 April',
		'Crypto lobby groups are gaining traction in Washington as the threat of regulatory bottleneck looms',
		'Luxury Nashville Hotel Takes Bookings in Bitcoin—or Dogecoin'
	].map((title) => {
		return { title, date: new Date().getMilliseconds(), url: '/#' };
	});
</script>

<div class="rounded-t">
	<div class="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
		<ul class="divide-y divide-gray-200 overflow-y-auto h-full">
			{#each headlines as headline}
				<li class="block hover:bg-gray-50 dark:hover:bg-gray-900">
					<div class="px-4 py-4 sm:px-6">
						<div class="flex items-center justify-between">
							<a
								href={headline.url}
								class="text-md text-gray-700 hover:text-indigo-600 dark:text-white md:truncate"
							>
								{headline.title}
							</a>
							<div class="ml-2 flex-shrink-0 flex">
								<button
									class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full border border-indigo-600 hover:bg-indigo-600 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-green-800 hover:text-white transition ease-induration-200 text-center  focus:outline-none focus:ring-2 focus:ring-offset-2"
								>
									add
								</button>
							</div>
						</div>
						<div class="mt-2 sm:flex sm:justify-between">
							<div class="sm:flex">
								<p class="flex items-center text-md font-light text-gray-500 dark:text-gray-300">
									January 7, 2020
								</p>
							</div>
						</div>
					</div>
				</li>
			{/each}
		</ul>
		<div class="p-4 w-full md:w-1/2 mx-auto">
			<button
				type="button"
				class="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
			>
				Load more
			</button>
		</div>
	</div>
</div>
