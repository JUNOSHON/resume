import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '(주)링네트',
      positions: [
        {
          title: 'Network Field Engineer',
          startedAt: '2025-01',
          descriptions: ['L2/L3 스위치 구축 및 유지보수'],
          skillKeywords: ['Cisco C9K', 'Cisco N9K', 'HPE FlexNetwork'],
        },
      ],
    },
  ],
};

export default experience;
