import { Entity, Column } from 'typeorm';
import { AbstractOrm } from './abstract.orm';

@Entity('asset_component')
export class AssetComponentOrm extends AbstractOrm {
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
    name: 'state',
    nullable: false,
  })
  state: string;

  @Column({
    name: 'specification',
    nullable: true,
  })
  specification: string | null;

  @Column({
    name: 'serial_number',
    nullable: true,
  })
  serialNumber: string | null;

  @Column({
    name: 'original_cost',
    nullable: true,
  })
  originalCost: number | null;

  @Column({
    name: 'note',
    nullable: true,
  })
  note: string | null;

  @Column({
    name: 'is_warranty',
    nullable: true,
  })
  isWarranty: boolean;
  @Column({
    name: 'warranty_duration',
    nullable: true,
  })
  warrantyDuration: string | null;

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
    type: 'timestamp',
    nullable: true,
  })
  warrantyEndDate: string | null;

  @Column({
    name: 'warranty_condition',
    nullable: true,
  })
  warrantyCondition: string | null;

  @Column({
    name: 'purchase_date',
    type: 'timestamp',
    nullable: true,
  })
  purchaseDate: string | null;
  @Column({
    name: 'component_type_id',
    nullable: false,
  })
  componentTypeId: number;
}
