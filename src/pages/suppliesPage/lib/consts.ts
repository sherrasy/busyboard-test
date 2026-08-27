import { ColumnDef } from '@/shared/ui/tableParts/headerCell';

export const columns: ColumnDef[] = [
  { id: 'number', label: '№', width: 84 },
  { id: 'date', label: 'Дата', width: 158 },
  { id: 'organization', label: 'Организация', width: 250 },
  { id: 'contractor', label: 'Контрагент', width: 260 },
  { id: 'supplyNumber', label: '№ поставки', width: 160 },
  { id: 'quantity', label: 'Кол-во', width: 110 },
  { id: 'status', label: 'Статус', width: 230 },
  { id: 'receptionDate', label: 'Дата приёмки', width: 210 },
  { id: 'amount', label: 'Сумма', width: 150 },
  { id: 'comment', label: 'Комментарий', minWidth: 200 },
];
