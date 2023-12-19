import { Entity, Column } from 'typeorm';
import { AbstractOrm } from './abstract.orm';

@Entity('asset_type')
export class AssetTypeOrm extends AbstractOrm {
  @Column({
    name: 'name',
    nullable: false,
  })
  name: string;

  @Column({
    name: 'code',
    nullable: false,
  })
  code: string;

  @Column({
    name: 'is_manage_by_id',
    nullable: false,
  })
  isManageById: boolean;

  @Column({
    name: 'is_manage_by_quantity',
    nullable: false,
  })
  isManageByQuantity: boolean;

  @Column({
    name: 'category_id',
    nullable: false,
  })
  categoryId: number;
}
