import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '22년 육군, 24년 공군 노후 LAN 교체사업',
      startedAt: '2025-05',
      where: '이전에 수행한 사업의 미비사항 및 후속 조치',
      descriptions: [
        { content: '여주 육군 부대 생활관 LAN 교체' },
        { content: '청주 공군사관학교 AP 2대 설치 및 컨트롤러 연동' },
        { content: '군자 공군기지 LAN 교체' },
      ],
    },
    {
      title: '하나로유통',
      startedAt: '2025-05',
      where: '농협 하나로마트 지소점 노후 POS 스위치 교체 및 정기점검',
      descriptions: [
        { content: '하나로마트 신촌, 서대문, 청라, 목포, 무안 지점 노후 스위치 교체' },
      ],
    },
  ],
};

export default project;
