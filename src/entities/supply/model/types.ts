export type SupplyStatus = 'accepted' | 'not_reserved';

export interface Supply {
  id: string;
  number: string;
  date: string;
  organization: string;
  contractor: string;
  supplyNumber: string;
  quantity: number;
  status: SupplyStatus;
  statusText: string;
  receptionDate: string;
  deliveryTime: string;
  amount: number;
  comment: string;
}
