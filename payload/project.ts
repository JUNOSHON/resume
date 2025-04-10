import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '4호선 진접 차량기지 이전 사업 전산망 구축',
      startedAt: '2025-04',
      where: '서울시 도시기반시설본부',
      descriptions: [
        { content: '업무망, 제어망, 인터넷 망 등 L1 광케이블 회선 구성' },
        { content: '샷시급 백본 스위치 4대, 고정형 스위치 약 130대 설치' },
        {
          content:
            'Achieved significant improvements in system performance and resource management.',
          weight: 'MEDIUM',
          descriptions: [{ content: '30% improvement in system resource efficiency' }],
        },
      ],
    },
  ],
};

export default project;
