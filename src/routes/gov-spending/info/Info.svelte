<div class="p-2">
	<h1>Agency Budget for Current Year</h1>
	<div>
		<p>
			All data comes from this endpoint:
			<a href="https://api.usaspending.gov/docs/endpoints" target="_blank">
				https://api.usaspending.gov/api/v2/agency/&#123;code&#125;/budgetary_resources/
			</a>
		</p>
		<p>
			This endpoint shows the total budget allocated to an agency for a specific fiscal year. Data
			is sourced from the U.S. Department of the Treasury.
		</p>
	</div>

	<h1>Foreign Aid</h1>
	<div>
		<p>
			Data comes from:
			<a href="https://www.foreignassistance.gov/data" target="_blank">
				https://www.foreignassistance.gov/data
			</a>
		</p>
		<p>
			This site tracks U.S. government spending on foreign assistance programs. It provides details
			on economic, humanitarian, and other non-military aid worldwide.
		</p>
	</div>

	<h1>Comparison</h1>
	<div>
		<p>
			All data comes from this endpoint:
			<a href="https://api.usaspending.gov/docs/endpoints" target="_blank">
				https://api.usaspending.gov/api/v2/agency/&#123;agency_code&#125;/budget_function/
			</a>
		</p>
		<p>
			This endpoint categorizes agency spending into broad federal activities, such as education,
			healthcare, and defense.
		</p>
	</div>
	<h1>Last Update</h1>
	<div>The database is manually</div>
</div>

<style>
	h1 {
		font-size: 1.5rem;
		margin-bottom: 0.5rem;
	}

	div {
		margin-bottom: 1.5rem;
		line-height: 1.6;
	}

	a {
		color: #007bff;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	@media (max-width: 600px) {
		h1 {
			font-size: 1.2rem;
		}

		div {
			font-size: 0.9rem;
		}
	}
</style>
