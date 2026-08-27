import type { Step } from 'react-joyride';

export const suppliesTourSteps: Step[] = [
  {
    target: 'body',
    title: 'Этап 1',
    content:
      'Добро пожаловать в раздел заявки на поставку! Тут вы можете создать заявку на поставку и она появится в вашем кабинете или выгрузить уже созданные чтобы на основе них создать отгрузки',
    placement: 'center',
    spotlightPadding: 0,
  },
  {
    target: '[data-tour="api-supplies-button"]',
    title: 'Этап 2',
    content:
      'Нажмите на эту кнопку чтобы подтянуть актуальные заявки на поставку',
    placement: 'bottom',
  },
  {
    target: '[data-tour="add-supplies-button"]',
    title: 'Этап 3',
    content:
      'Супер, теперь давайте создадим свою собственную заявку на поставку!',
    placement: 'bottom',
  },
  {
    target: '[data-tour="supplies-table"]',
    title: 'Этап 4',
    content:
      'Вы большой молодец! Поздравляем с освоением нового раздела, надеемся он принесет вам много пользы!',
    placement: 'top',
  },
];
