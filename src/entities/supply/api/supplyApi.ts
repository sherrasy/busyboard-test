import { useQuery } from '@tanstack/react-query';
import { Supply } from '../model/types';
import { mockSupplies } from '../model/mockData';

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
