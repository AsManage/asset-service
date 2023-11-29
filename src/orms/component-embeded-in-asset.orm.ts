import { Entity, Column } from 'typeorm';
import { AbstractOrm } from './abstract.orm';

@Entity('component_embeded_in_asset')
export class ComponentEmbededInAssetOrm extends AbstractOrm {
  @Column({
    name: 'asset_id',
    nullable: false,
  })
  assetId: number;

  @Column({
    name: 'asset_component_id',
    nullable: false,
  })
  assetComponentId: number;

  @Column({
    name: 'quantity',
    nullable: false,
  })
  quantity: number;
}
