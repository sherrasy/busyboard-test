import { makeAutoObservable } from 'mobx';

export type SupplyStatus = 'accepted' | 'not_reserved';

export interface FilterState {
  dateRange: [string, string] | null;
  contractor: string | null;
  organization: string | null;
  product: string | null;
  senderWarehouse: string | null;
  supplyNumber: string | null;
  deliveryMethod: string | null;
  operationStatus: SupplyStatus | null;
  receiverWarehouse: string | null;
  isProcessed: string | null;
}

const initialFilters: FilterState = {
  dateRange: ['2025-01-01', '2025-01-31'],
  contractor: null,
  organization: null,
  product: null,
  senderWarehouse: null,
  supplyNumber: null,
  deliveryMethod: null,
  operationStatus: null,
  receiverWarehouse: null,
  isProcessed: null,
};

class FilterStore {
  filters: FilterState = { ...initialFilters };

  constructor() {
    makeAutoObservable(this);
  }

  setFilter<K extends keyof FilterState>(key: K, value: FilterState[K]) {
    this.filters[key] = value;
  }

  setOperationStatus(status: SupplyStatus | null) {
    this.filters.operationStatus = status;
  }

  resetFilters() {
    this.filters = {
      dateRange: null,
      contractor: null,
      organization: null,
      product: null,
      senderWarehouse: null,
      supplyNumber: null,
      deliveryMethod: null,
      operationStatus: null,
      receiverWarehouse: null,
      isProcessed: null,
    };
  }

  get isEmpty(): boolean {
    return Object.values(this.filters).every((v) => v === null);
  }

  get activeCount(): number {
    return Object.values(this.filters).filter((v) => v !== null).length;
  }
}

export const filterStore = new FilterStore();
