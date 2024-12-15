<script>
	// const proportions = [
	// 	(0, 0),
	// 	(-0.25, 5),
	// 	(-0.5, 10),
	// 	(-0.75, 15),
	// 	(-1, 20),
	// 	(-1.25, 25),
	// 	(-1.5, 30),
	// 	(-1.75, 35),
	// 	(-2, 40),
	// 	(-2.25, 45),
	// 	(-2.5, 50),
	// 	(-2.75, 55),
	// 	(-3, 60),
	// 	(-3.25, 65),
	// 	(-3.5, 70),
	// 	(-3.75, 75),
	// 	(-4, 80),
	// 	(-4.25, 85),
	// 	(-4.5, 90),
	// 	(-4.75, 95),
	// 	(-5, 100)
	// ];

	const proportions = [
		[-0, 0],
		[-0.25, 5],
		[-0.5, 10],
		[-0.75, 15],
		[-1, 20],
		[-1.25, 25],
		[-1.5, 30],
		[-1.75, 35],
		[-2, 40],
		[-2.25, 45],
		[-2.5, 50],
		[-2.75, 55],
		[-3, 60],
		[-3.25, 65],
		[-3.5, 70],
		[-3.75, 75],
		[-4, 80],
		[-4.25, 85],
		[-4.5, 90],
		[-4.75, 95],
		[-5, 100]
	];
</script>

<div class="max-4-4xl mx-auto p-5 space-y-6">
	<div class="text-center font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-5">
		Strategy
	</div>
	<div class="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
		<div class="flex-1 space-y-4">
			<p class="text-gray-700">
				This investment strategy is a conservative approach to buying the dip in 11 ETFs, each
				representing a major sector of the economy.
			</p>
			<div class="space-y-2">
				<h3 class="font-bold text-lg">Step 1</h3>
				<p class="text-gray-700">
					Every day that the markets are open, a portion of cash is allocated to the <b
						>ETF Reserves</b
					>. This amount is the lesser of $55 or 0.05% of the available cash in the account.
				</p>
			</div>
			<div class="space-y-2">
				<h3 class="font-bold text-lg">Step 2</h3>
				<p class="text-gray-700">
					Each ETF's price is compared to its closing price from the previous day. If the price has
					increased, no action is taken. If the price has decreased, a proportion of the <b
						>ETF Reserve</b
					> is used to invest in that ETF.
				</p>
			</div>
		</div>

		<div class="sm:w-1/4 sm:flex-none">
			<div class="overflow-x-auto">
				<table class="w-full table-auto border-collapse border border-gray-300 text-left">
					<thead class="bg-gray-100">
						<tr>
							<th class="border border-gray-300 px-4">Price Change</th>
							<th class="border border-gray-300 px-4">Proportion of ETF</th>
						</tr>
					</thead>
					<tbody>
						{#each proportions as [priceChange, proportion]}
							<tr>
								<td class="border border-gray-300 px-4 py-1 text-sm text-gray-700"
									>{priceChange}%</td
								>
								<td class="border border-gray-300 px-4 py-1 text-sm text-gray-700">{proportion}%</td
								>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
