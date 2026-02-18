import { useQuery } from '@tanstack/react-query';

const API_BASE = 'https://vehicle-number-info.snipy-owner.workers.dev/';

async function fetchVehicleInfo(registration: string) {
  if (!registration) {
    return null;
  }

  const url = `${API_BASE}?reg=${encodeURIComponent(registration)}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }

  return response.json();
}

export function useVehicleInfoQuery(registration: string) {
  return useQuery({
    queryKey: ['vehicleInfo', registration],
    queryFn: () => fetchVehicleInfo(registration),
    enabled: !!registration,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1,
  });
}
