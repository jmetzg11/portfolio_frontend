<script>
	import { faCog, faBolt, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

	// Example for representing ETFs
	const icons = {
		EXI: faCog,
		IXC: faBolt,
		IXG: faMoneyBillWave
	};
</script>

<ul>
	<li><FontAwesomeIcon icon={icons.EXI} /> Industrials (EXI)</li>
	<li><FontAwesomeIcon icon={icons.IXC} /> Energy (IXC)</li>
	<li><FontAwesomeIcon icon={icons.IXG} /> Financials (IXG)</li>
</ul>
