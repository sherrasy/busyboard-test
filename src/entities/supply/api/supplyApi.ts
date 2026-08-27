import { useQuery } from '@tanstack/react-query';
import { mockSupplies } from '../model/mockData';
import { Supply } from '../model/types';

const SUPPLY_QUERY_KEY = 'supplies';

const fetchSupplies = async (): Promise<Supply[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockSupplies;
};

export const useSupplies = () => {
  return useQuery<Supply[]>({
    queryKey: [SUPPLY_QUERY_KEY],
    queryFn: fetchSupplies,
  });
};
