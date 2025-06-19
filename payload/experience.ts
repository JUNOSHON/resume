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
          descriptions: [
            'L2/L3 네트워크 신규 구축 및 유지보수',
            '대규모 네트워크 구축 프로젝트 경험 및 고객사 유지보수 지원',
          ],
          skillKeywords: [
            'Cisco Catalyst 9000 Series',
            'Cisco Nexus 9000 Series',
            'HPE Comware',
            'AP',
          ],
        },
      ],
    },
  ],
};

export default experience;
