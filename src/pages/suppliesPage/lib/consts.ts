import { ColumnDef } from '@/shared/ui/tableParts/headerCell';

export const columns: ColumnDef[] = [
  { id: 'number', label: '№', width: 56 },
  { id: 'date', label: 'Дата', width: 120 },
  { id: 'organization', label: 'Организация', minWidth: 200 },
  { id: 'contractor', label: 'Контрагент', minWidth: 180 },
  { id: 'supplyNumber', label: '№ поставки', width: 140 },
  { id: 'quantity', label: 'Кол-во', width: 70, align: 'center' },
  { id: 'status', label: 'Статус', width: 160 },
  { id: 'receptionDate', label: 'Дата приёмки', width: 150 },
  { id: 'amount', label: 'Сумма', width: 120 },
  { id: 'comment', label: 'Комментарий', minWidth: 160 },
];
