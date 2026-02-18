import { useQuery } from '@tanstack/react-query';

const API_BASE = 'https://usesirosint.vercel.app/api/numinfo';
const API_KEY = 'salaarz';

async function fetchNumberInfo(number: string) {
  if (!number) {
    return null;
  }

  const url = `${API_BASE}?key=${API_KEY}&num=${encodeURIComponent(number)}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }

  return response.json();
}

export function useNumberInfoQuery(number: string) {
  return useQuery({
    queryKey: ['numberInfo', number],
    queryFn: () => fetchNumberInfo(number),
    enabled: !!number,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1,
  });
}
