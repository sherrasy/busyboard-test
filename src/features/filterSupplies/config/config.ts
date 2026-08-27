export interface FilterConfigItem {
  key: string;
  label: string;
  placeholder: string;
  type: 'select' | 'date';
}

export const filterConfig: FilterConfigItem[] = [
  {
    key: 'dateRange',
    label: 'Дата',
    placeholder: 'Выберите период',
    type: 'date',
  },
  {
    key: 'contractor',
    label: 'Контрагент',
    placeholder: 'Выбрать',
    type: 'select',
  },
  {
    key: 'organization',
    label: 'Организация',
    placeholder: 'Выбрать',
    type: 'select',
  },
  { key: 'product', label: 'Товар', placeholder: 'Выбрать', type: 'select' },
  {
    key: 'senderWarehouse',
    label: 'Склад отправителя',
    placeholder: 'Выбрать склад',
    type: 'select',
  },
  {
    key: 'supplyNumber',
    label: '№ поставки',
    placeholder: 'Выбрать',
    type: 'select',
  },
  {
    key: 'deliveryMethod',
    label: 'Способ доставки',
    placeholder: 'Выбрать',
    type: 'select',
  },
  {
    key: 'operationStatus',
    label: 'Статус операции',
    placeholder: 'Выбрать',
    type: 'select',
  },
  {
    key: 'receiverWarehouse',
    label: 'Склад получателя',
    placeholder: 'Выбрать',
    type: 'select',
  },
  {
    key: 'isProcessed',
    label: 'Проведено',
    placeholder: 'Выбрать',
    type: 'select',
  },
];
