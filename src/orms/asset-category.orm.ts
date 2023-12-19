import { Entity, Column } from 'typeorm';
import { AbstractOrm } from './abstract.orm';

@Entity('asset_category')
export class AssetCategoryOrm extends AbstractOrm {
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
    name: 'description',
    nullable: true,
  })
  description: string | null;

  @Column({
    name: 'useful_life_min_year',
    nullable: true,
  })
  usefulLifeMinYear: number | null;

  @Column({
    name: 'useful_life_max_year',
    nullable: true,
  })
  usefulLifeMaxYear: number | null;

  @Column({
    name: 'depreciation_basis_max_value',
    nullable: true,
  })
  depreciationBasisMaxValue: number | null;

  @Column({
    name: 'depreciation_basis_min_value',
    nullable: true,
  })
  depreciationBasisMinValue: number | null;
}
