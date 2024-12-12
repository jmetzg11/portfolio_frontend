import {
	faCog, // EXI: Industrials
	faBolt, // IXC: Energy
	faMoneyBillWave, // IXG: Financials
	faHospital, // IXJ: Health Care
	faLaptopCode, // IXN: Technology
	faSatelliteDish, // IXP: Telecommunications
	faLightbulb, // JXI: Utilities
	faShoppingCart, // KXI: Consumer Staples
	faBuilding, // MXI: Materials
	faCity, // REET: Real Estate
	faCar // RXI: Consumer Discretionary
} from '@fortawesome/free-solid-svg-icons';

export const icons = {
	EXI: faCog,
	IXC: faBolt,
	IXG: faMoneyBillWave,
	IXJ: faHospital,
	IXN: faLaptopCode,
	IXP: faSatelliteDish,
	JXI: faLightbulb,
	KXI: faShoppingCart,
	MXI: faBuilding,
	REET: faCity,
	RXI: faCar
};

export const getData = async () => {
	const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/etf/`);
	return await response.json();
};
