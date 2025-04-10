import { IOpenSource } from '../component/openSource/IOpenSource';

const openSource: IOpenSource.Payload = {
  disable: false,
  list: [
    {
      title: 'Netmiko',
      descriptions: [
        {
          content: 'Python automation',
          href: 'https://github.com/ktbyers/netmiko',
        },
      ],
    },
  ],
};

export default openSource;
