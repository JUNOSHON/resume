import { ILargeProject } from '../component/large_project/IProject';

const project: ILargeProject.Payload = {
  disable: false,
  list: [
    {
      title: '진접선 차량기지 철도통합무선통신망(LTE-R)',
      startedAt: '2025-04',
      where: '서울시 도시기반시설본부',
      descriptions: [
        { content: '4호선 차량기지의 업무망, 인터넷망, 교환설비망 구축' },
        {
          content: '메인 통신기계실 외 16개 건물에 약 100대의 L2/L3 네트워크 구축',
        },
        {
          content: '관제 센터와의 통신을 위한 19개 역사에 L1 광케이블 선번 구성',
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
        {
          content:
            '주식회사 SR의 수서역, 오송역, 부산역 위치 측위 기반 길안내서비스의 네트워크 구축',
        },
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
      ],
    },
  ],
};

export default project;
