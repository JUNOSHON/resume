import { ICommon } from '../common/ICommon';
import { IRow } from '../common/IRow';

export declare namespace ICertificate {
  /**
   * ### Sample Rendering
   *
   * ![image](https://user-images.githubusercontent.com/8033320/80271217-268d6200-86f9-11ea-822b-438508d2cf09.png)
   *
   * @example https://github.com/uyu423/resume-nextjs/blob/master/payload/certificate.ts
   *
   */
  interface Payload extends ICommon.Payload {
    /** 자격증 리스트 */
    list: Item[];
  }

  interface Item extends IRow.Description {
    /**
     * ### 자격증 취득 시점
     *
     * @format YYYY-MM
     * @example '2020-05'
     */
    at: string;
  }
}
