import { IPresentation } from '../component/presentation/IPresentation';

const presentation: IPresentation.Payload = {
  disable: false,

  list: [
    {
      title: '"Presentation Topic"',
      subTitle: '~~~Where',
      at: '2025-04',
      descriptions: [
        {
          content: '~~~Presentation',
        },
        {
          content: 'Slideshare:',
          postHref: 'https://www.slideshare.net/',
        },
      ],
    },
  ],
};

export default presentation;
