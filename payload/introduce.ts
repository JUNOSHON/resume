import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '현재 Cisco 골드파트너사에서 네트워크 필드 엔지니어로 근무하고 있습니다. Cisco·HPE 사의 장비를 다루며, 주로 공공기관의 사업을 수주하여 네트워크를 구축/유지보수하는 프로젝트에 참여하고 있습니다.',
    '클라우드 환경의 네트워크에 관심이 많고, 계층과 환경을 가리지 않는 엔지니어가 되기 위해 노력하고 있습니다. 전통적인 네트워크 엔지니어의 역할이었던 L2/L3를 벗어나 L4/L7 및 컨테이너 네트워킹 등을 학습해 언제든지 서비스의 네트워크 안정성을 보장하는 엔지니어가 되는 게 목표입니다.',
  ],
  sign: 'Juno',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
