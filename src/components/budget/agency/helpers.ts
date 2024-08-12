export interface AgencyEntry {
  label: string;
  value: number;
  tooltip: string;
  background_color: string;
}

export interface AgencyData {
  main_data: AgencyEntry[] | null;
  other_data: AgencyEntry[] | null;
  table_data: [string, number][] | null;
}

export const getAgencyData = async (): Promise<AgencyData | 'error'> => {
  const url = `${import.meta.env.VITE_API}/agency`;
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    });
    const data: AgencyData = await response.json();
    return data;
  } catch (err) {
    console.error('Failed to get agency data', err);
    return 'error';
  }
};
