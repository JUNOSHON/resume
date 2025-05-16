import { PropsWithChildren } from 'react';
import { DateTime } from 'luxon';
import { PreProcessingComponent } from '../common/PreProcessingComponent';
import { ICertificate } from './ICertificate';
import { EmptyRowCol } from '../common';
import { CommonSection } from '../common/CommonSection';
import { CommonRows } from '../common/CommonRow';
import { IRow } from '../common/IRow';
import Util from '../common/Util';

type Payload = ICertificate.Payload;

export const Certificate = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <CommonSection title="CERTIFICATE">
      <CertificateRow payload={payload} />
    </CommonSection>
  );
}

function CertificateRow({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <EmptyRowCol>
      {payload.list.map((item, index) => {
        return <CommonRows key={index.toString()} payload={serialize(item)} index={index} />;
      })}
    </EmptyRowCol>
  );
}

function serialize(item: ICertificate.Item): IRow.Payload {
  return {
    left: {
      title: DateTime.fromFormat(item.at, Util.LUXON_DATE_FORMAT.YYYY_LL).toFormat(
        Util.LUXON_DATE_FORMAT.YYYY_DOT_LL,
      ),
    },
    right: {
      descriptions: [
        {
          content: item.content,
          href: item.href,
        },
      ],
    },
  };
}
