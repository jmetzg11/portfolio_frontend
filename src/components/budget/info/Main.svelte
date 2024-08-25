<script>
  const agency_budget_endpoint = '/api/v2/agency/{code}/budgetary_resources/';
  const comparition_endpoint = '/api/v2/agency/{agency_code}/budget_function/';
</script>

<div class="space-y-8 p-6 bg-gray-100 rounded-lg shadow-lg m-5">
  <div>
    <h1 class="text-2xl font-bold text-grapy-800 mb-2">Budget</h1>
    <p class="text-gray-700">
      Displays the budgetary resources and oblications for agencies for the fiscal year of
      2024. Data was pulled from{' '}
      <a
        class="text-blue-600 underline"
        target="_blank"
        rel="noreferrer"
        href="https://api.usaspending.gov/docs/endpoints"
      >
        https://api.usaspending.gov/docs/endpoints
      </a>{' '}
      using the endpoint: <b class="font-semibold">{agency_budget_endpoint}</b>
    </p>
  </div>
  <div>
    <h1 class="text-2xl font-bold text-grapy-800 mb-2">Foreign Aid</h1>
    <p class="text-gray-700">
      Foreign Aid data was downloaded from . It can take up to two years for all spending
      to be reported.
      <a
        class="text-blue-600 underline"
        target="_blank"
        rel="noreferrer"
        href="https://www.foreignassistance.gov/data"
      >
        https://www.foreignassistance.gov/data
      </a>
    </p>
  </div>
  <div>
    <h1 class="text-2xl font-bold text-grapy-800 mb-2">Comparison</h1>
    <p>
      Government spending can be brokend down into different functions. One agency can
      spend in various different functions. 8 functions were choosen to make comparisons
      with. The data was pulled from{' '}
      <a
        class="text-blue-600 underline"
        target="_blank"
        rel="noreferrer"
        href="https://api.usaspending.gov/docs/endpoints"
      >
        https://api.usaspending.gov/docs/endpoints
      </a>{' '}
      using the endpoint: <b>{comparition_endpoint}</b>
    </p>
  </div>
</div>
