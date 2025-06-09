import { PropsWithChildren } from 'react';
import ProjectRow from './row';
import { CommonSection } from '../common/CommonSection';
import { ILargeProject } from './IProject';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = ILargeProject.Payload;

export const LargeProject = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <CommonSection title="Large-Scale Project">
      <ProjectRow payload={payload} />
    </CommonSection>
  );
}
