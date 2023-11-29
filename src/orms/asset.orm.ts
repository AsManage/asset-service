import { Entity, Column, Timestamp } from 'typeorm';
import { AbstractOrm } from './abstract.orm';

@Entity('asset')
export class AssetOrm extends AbstractOrm {
  @Column({
    name: 'name',
    nullable: false,
  })
  name: string;

  @Column({
    name: 'quantity',
    nullable: true,
  })
  quantity: number | null;

  @Column({
    name: 'image',
    nullable: true,
  })
  image: string | null;
  @Column({
    name: 'original_cost',
    nullable: true,
  })
  originalCost: number | null;

  @Column({
    name: 'specification',
    nullable: true,
  })
  specification: string | null;

  @Column({
    name: 'is_warranty',
    nullable: true,
  })
  isWarranty: boolean | null;
  @Column({
    name: 'warranty_duration',
    nullable: true,
  })
  warrantyDuration: number | null;

  @Column({
    name: 'time_unit',
    nullable: true,
  })
  timeUnit: string | null;
  @Column({
    name: 'warranty_start_date',
    type: 'timestamp',
    nullable: true,
  })
  warrantyStartDate: string | null;

  @Column({
    name: 'warranty_end_date',
    nullable: true,
  })
  warrantyEndDate: Timestamp;

  @Column({
    name: 'warranty_condition',
    nullable: true,
  })
  warrantyCondition: string | null;
  @Column({
    name: 'note',
    nullable: true,
  })
  note: string | null;
  @Column({
    name: 'condition_state',
    nullable: false,
  })
  conditionState: string;
  @Column({
    name: 'purchase_date',
    type: 'timestamp',
    nullable: true,
  })
  purchase_date: string | null;
  @Column({
    name: 'depreciation_amount',
    nullable: true,
  })
  depreciationAmount: number | null;
  @Column({
    name: 'serial_number',
    nullable: true,
  })
  serialNumber: string | null;
  @Column({
    name: 'acquisition_source',
    nullable: false,
  })
  acquisitionSource: number;
  @Column({
    name: 'asset_type_id',
    nullable: false,
  })
  assetTypeId: number;
}
