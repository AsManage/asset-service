import { Entity, Column } from 'typeorm';
import { AbstractOrm } from './abstract.orm';

@Entity('acquire_asset_component')
export class AcquireAssetComponentOrm extends AbstractOrm {
  isFixedAsset: boolean;
  @Column({
    name: 'asset_component_id',
    nullable: false,
  })
  assetComponentId: number;
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
