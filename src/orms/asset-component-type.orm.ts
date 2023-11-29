import { Entity, Column } from 'typeorm';
import { AbstractOrm } from './abstract.orm';

@Entity('asset_component_type')
export class AssetComponentTypeOrm extends AbstractOrm {
  @Column({
    name: 'name',
    nullable: false,
  })
  name: string;

  @Column({
    name: 'description',
    nullable: true,
  })
  description: string | null;
}
