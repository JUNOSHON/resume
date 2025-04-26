import { IPresentation } from '../component/presentation/IPresentation';

const presentation: IPresentation.Payload = {
  disable: false,

  list: [
    {
      title: '다양한 계층의 Load Balancer 종류 소개',
      subTitle: '개발자 글쓰기 모임 Monday 9pm',
      at: '2025-04',
      descriptions: [
        {
          content: '로드밸런싱의 개념과 로드밸런서 사례 소개 - Meduim 기고 글',
          href:
            'https://medium.com/monday-9-pm/%EB%8B%A4%EC%96%91%ED%95%9C-load-balancing-%EC%9D%84-%EC%86%8C%EA%B0%9C%ED%95%A9%EB%8B%88%EB%8B%A4-c958142afa1f',
        },
      ],
    },
  ],
};

export default presentation;
