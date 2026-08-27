import { Supply } from './types';

export const mockSupplies: Supply[] = [
  {
    id: '1',
    number: '00001',
    date: '2024-01-01T12:40:00',
    organization: 'ИП Иванов Иван Иванович',
    contractor: 'ООО "Название компании"',
    supplyNumber: '123123123123123',
    quantity: 1,
    status: 'accepted',
    statusText: 'Принят без расхождений',
    receptionDate: '2024-07-27T12:00:00',
    deliveryTime: '4д. 12ч.',
    amount: 100000,
    comment: 'Первый заказ для МП',
  },
  {
    id: '2',
    number: '00002',
    date: '2024-01-01T12:40:00',
    organization: 'ИП Иванов Иван Иванович',
    contractor: 'ООО "Название компании"',
    supplyNumber: '123123123123123',
    quantity: 1,
    status: 'not_reserved',
    statusText: 'Не зарезервирован',
    receptionDate: '',
    deliveryTime: '',
    amount: 100000,
    comment: 'Первый заказ для МП',
  },
];
