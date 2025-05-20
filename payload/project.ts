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
        {
          content:
            'N9K-9508 백본 스위치 4식, 집선 L3 N9K-93180-FX2 6대, L2 스위치 114대 설치 및 관리',
        },
        // {
        //   content:
        //     'Achieved significant improvements in system performance and resource management.',
        //   weight: 'MEDIUM',
        //   descriptions: [{ content: '30% improvement in system resource efficiency' }],
        // },
      ],
    },
    {
      title: '국군 제 1068부대 노후 LAN 교체사업',
      startedAt: '2025-02',
      endedAt: '2025-04',
      where: '국군 제 1068 부대',
      descriptions: [
        { content: '인트라넷 망, 인터넷망 등 L1 광케이블 회선 구성 및 라벨링' },
        { content: '노후 샷시급 백본 스위치 철거 및 집선 L3 스위치 교체' },
        // {
        //   content:
        //     'Achieved significant improvements in system performance and resource management.',
        //   weight: 'MEDIUM',
        //   descriptions: [{ content: '30% improvement in system resource efficiency' }],
        // },
      ],
    },
    {
      title: '하나로유통 POS 스위치 교체',
      startedAt: '2025-05',
      endedAt: '2025-05',
      where: '농협 하나로마트 지소점 노후 POS 스위치 교체',
      descriptions: [
        { content: '하나로마트 신촌, 서대문, 청라, 목포, 무안 지점 노후 스위치 교체' },
      ],
    },
  ],
};

export default project;
