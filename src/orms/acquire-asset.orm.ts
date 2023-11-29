import { Entity, Column } from 'typeorm';
import { AbstractOrm } from './abstract.orm';

@Entity('accquire_asset')
export class AcquireAssetOrm extends AbstractOrm {
  isFixedAsset: boolean;
  @Column({
    name: 'asset_id',
    nullable: false,
  })
  asset_Id: number;
  @Column({
    name: 'acquisition_source_id',
    nullable: false,
  })
  acquisitionSourceId: number;
  @Column({
    name: 'quantity',
    nullable: false,
  })
  quantity: number;
}
