import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBlogger, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/sample_juno.png';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '네트워크 엔지니어 손준호 이력서',
    // small: '(JUNO)',
  },
  contact: [
    {
      title: 'sanolx30@gmail.com',
      link: 'mailto:sanolx30@gmail.com',
      icon: faEnvelope,
    },
    {
      title: 'Tech Blog',
      link: 'https://se-juno.tistory.com/',
      icon: faBlogger,
    },
    {
      title: 'Linkedin',
      link: 'https://www.linkedin.com/in/%EC%A4%80%ED%98%B8-%EC%86%90-6992432b3/',
      icon: faLinkedin,
    },
  ],
  notice: {
    title: '연락은 이메일로 부탁드립니다.',
    icon: faBell,
  },
};

export default profile;
