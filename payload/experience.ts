import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '(주)링네트 - 공공사업부 기술 2팀',
      positions: [
        {
          title: 'Network Field Engineer',
          startedAt: '2025-01',
          descriptions: ['L2/L3 스위치 구축 및 유지보수', '포트맵, 구성도 등 산출물 작성'],
          skillKeywords: ['Cisco C9K', 'Cisco N9K', 'HPE Comware', 'OSPF'],
        },
      ],
    },
  ],
};

export default experience;
