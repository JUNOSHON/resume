import { ISkill } from '../component/skill/ISkill';

const vendor: ISkill.Skill = {
  category: 'Vendor',
  items: [
    {
      title: 'C',
      level: 3,
    },
    {
      title: 'Shell Scripting',
      level: 3,
    },
    {
      title: 'Python',
      level: 3,
    },
    {
      title: 'Perl',
      level: 2,
    },
    {
      title: 'Golang',
      level: 2,
    },
    {
      title: 'Rust',
      level: 1,
    },
  ],
};

const protocol: ISkill.Skill = {
  category: 'Protocol',
  items: [
    {
      title: 'Kernel Programming',
      level: 3,
    },
    {
      title: 'GNU Debugger',
      level: 3,
    },
    {
      title: 'Memory Management',
      level: 2,
    },
    {
      title: 'System Call Interface',
      level: 2,
    },
  ],
};

const layer: ISkill.Skill = {
  category: 'Layer',
  items: [
    {
      title: 'Docker',
      level: 3,
    },
    {
      title: 'KVM',
      level: 3,
    },
    {
      title: 'Xen',
      level: 2,
    },
    {
      title: 'VirtualBox',
      level: 2,
    },
    {
      title: 'VMware ESXi',
      level: 1,
    },
  ],
};

const automation: ISkill.Skill = {
  category: 'Automation',
  items: [
    {
      title: 'Ansible',
      level: 3,
    },
    {
      title: 'Puppet',
      level: 3,
    },
    {
      title: 'Chef',
      level: 2,
    },
    {
      title: 'Jenkins',
      level: 2,
    },
    {
      title: 'CI/CD Pipelines',
      level: 1,
    },
    {
      title: 'Infrastructure as Code',
      level: 1,
    },
  ],
};

const aws: ISkill.Skill = {
  category: 'AWS',
  items: [
    {
      title: 'iptables',
      level: 3,
    },
    {
      title: 'OpenSSH',
      level: 3,
    },
    {
      title: 'OpenSSL',
      level: 2,
    },
    {
      title: 'NACLs',
      level: 2,
    },
    {
      title: 'VPN Technologies',
      level: 2,
    },
    {
      title: 'Intrusion Detection',
      level: 1,
    },
  ],
};

const linux: ISkill.Skill = {
  category: 'Linux',
  items: [
    {
      title: 'Coffee Brewing',
    },
    {
      title: "Rubik's Cube Solving",
    },
    {
      title: 'Table Tennis',
    },
    {
      title: 'Guitar Playing',
    },
    {
      title: 'Joke Telling',
    },
    {
      title: 'Duct Tape Crafting',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [vendor, protocol, layer, automation, aws, linux],
  tooltip: '1: 취미 수준\n2: 기초 수준\n3: 실무 적용 가능 수준',
};

export default skill;
