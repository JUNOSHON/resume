import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: 'Ringnet Co., Ltd.',
      positions: [
        {
          title: 'Network Field Engineer',
          startedAt: '2025-01',
          descriptions: ['L2/L3 switch installation and maintenance'],
          skillKeywords: ['Cisco C9K', 'Cisco N9K', 'HPE FlexNetwork'],
        },
      ],
    },
  ],
};

export default experience;
