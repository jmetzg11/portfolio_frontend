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
	IXJ: faHospital,
	IXG: faMoneyBillWave,
	IXN: faLaptopCode,
	IXP: faSatelliteDish,
	JXI: faLightbulb,
	KXI: faShoppingCart,
	MXI: faBuilding,
	REET: faCity,
	RXI: faCar
};

export const colorMapper = {
	EXI: '#3B82F6', // blue-500
	IXC: '#EF4444', // red-500
	IXJ: '#10B981', // green-500
	IXG: '#F59E0B', // amber-500
	IXN: '#8B5CF6', // violet-500
	IXP: '#06B6D4', // cyan-500
	JXI: '#D97706', // orange-500
	KXI: '#EC4899', // pink-500
	MXI: '#9333EA', // purple-500
	REET: '#14B8A6', // teal-500
	RXI: '#F43F5E' // rose-500
};

export const getData = async () => {
	const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/etf/`);
	return await response.json();
};
