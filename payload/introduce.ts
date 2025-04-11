import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'I am currently working as a network field engineer at a Cisco Gold Partner company. I handle equipment from Cisco and HPE, and mainly participate in projects that involve winning contracts for public institutions to build and maintain networks.',
    'I am very interested in cloud network environments and strive to become an engineer who is not limited by layers or environments. My goal is to become an engineer who can ensure network stability for services at any time by learning beyond the traditional roles of network engineers, such as L2/L3, to include L4/L7 and container networking.',
  ],
  sign: 'Juno', // sign 속성을 추가하여 오류 수정
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
