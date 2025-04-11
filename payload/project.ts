import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'Line 4 Jinjeop Depot Relocation Project Network Construction',
      startedAt: '2025-04',
      where: 'Seoul Urban Infrastructure Headquarters',
      descriptions: [
        {
          content:
            'Configuration of L1 optical cable circuits for business, control, and internet networks',
        },
        {
          content:
            'Installation of 4 chassis-level backbone switches and approximately 130 fixed switches',
        },
        {
          content:
            'Achieved significant improvements in system performance and resource management.',
          weight: 'MEDIUM',
          descriptions: [{ content: '30% improvement in system resource efficiency' }],
        },
      ],
    },
  ],
};

export default project;
