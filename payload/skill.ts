import { ISkill } from '../component/skill/ISkill';

const vendor: ISkill.Skill = {
  category: 'Vendor',
  items: [
    {
      title: 'Cisco',
      level: 3,
    },
    {
      title: 'HPE',
      level: 3,
    },
    {
      title: 'Fortinet',
      level: 1,
    },
  ],
};

const protocol: ISkill.Skill = {
  category: 'Protocol',
  items: [
    {
      title: 'OSPF',
      level: 3,
    },
    {
      title: 'BGP',
      level: 2,
    },
    {
      title: 'TCP',
      level: 2,
    },
  ],
};

const layer: ISkill.Skill = {
  category: 'Layer',
  items: [
    {
      title: 'L2',
      level: 3,
    },
    {
      title: 'L3',
      level: 3,
    },
    {
      title: 'L4',
      level: 2,
    },
    {
      title: 'L7',
      level: 2,
    },
  ],
};

const automation: ISkill.Skill = {
  category: 'Automation',
  items: [
    {
      title: 'Ansible',
      level: 1,
    },
    {
      title: 'Shell Script',
      level: 1,
    },
    {
      title: 'Python',
      level: 2,
    },
    {
      title: 'Terraform',
      level: 1,
    },
  ],
};

const aws: ISkill.Skill = {
  category: 'AWS',
  items: [
    {
      title: 'VPC',
      level: 2,
    },
    {
      title: 'CloudFront',
      level: 2,
    },
    {
      title: 'ELB',
      level: 2,
    },
    {
      title: 'Route53',
      level: 2,
    },
  ],
};

const linux: ISkill.Skill = {
  category: 'Linux',
  items: [
    {
      title: 'Redhat',
    },
    {
      title: 'Ubuntu',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [vendor, protocol, layer, automation, aws, linux],
  tooltip: '1: 취미 수준\n2: 기초 수준\n3: 실무 적용 가능 수준',
};

export default skill;
