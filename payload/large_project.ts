import { ILargeProject } from '../component/large_project/IProject';

const project: ILargeProject.Payload = {
  disable: false,
  list: [
    {
      title: '진접선 차량기지 철도통합무선통신망(LTE-R)',
      startedAt: '2025-04',
      where: '서울시 도시기반시설본부',
      descriptions: [
        { content: '업무망, 제어망, 인터넷 망 등 L1 광케이블 회선 구성 ' },
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
      title: '국가철도공단 일반철도 남부권역 전송설비(IP-MPLS) 구매 설치',
      startedAt: '2025-02',
      where: '국가철도공단',
      descriptions: [
        { content: '수서역, 오송역, 부산역 길안내시스템 네트워크 구축' },
        { content: '평택지제역 기설 네트워크와 신설 CCTV망 연동' },
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
  ],
};

export default project;
