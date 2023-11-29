import { Entity, Column } from 'typeorm';
import { AbstractOrm } from './abstract.orm';

@Entity('transfer_asset')
export class TransferAssetOrm extends AbstractOrm {
  @Column({
    name: 'reference_no',
    nullable: false,
  })
  referenceNo: string;

  @Column({
    name: 'quantity',
    nullable: false,
  })
  quantity: number;

  @Column({
    name: 'reason',
    nullable: false,
  })
  reason: string;

  @Column({
    name: 'status',
    nullable: false,
  })
  status: string;

  @Column({
    name: 'attached_file',
    nullable: true,
  })
  attachedFile: string | null;

  @Column({
    name: 'from_location_id',
    nullable: true,
  })
  fromLocationId: number | null;

  @Column({
    name: 'to_location_id',
    nullable: true,
  })
  toLocationId: number | null;

  @Column({
    name: 'from_custodian_id',
    nullable: true,
  })
  fromCustodianId: number | null;
  @Column({
    name: 'to_custodian_id',
    nullable: true,
  })
  toCustodianId: number | null;

  @Column({
    name: 'from_management_unit_id',
    nullable: true,
  })
  fromManagementUnitId: number | null;

  @Column({
    name: 'to_management_unit_id',
    nullable: true,
  })
  toManagementUnitId: number | null;

  @Column({
    name: 'approved_by',
    nullable: true,
  })
  approvedBy: number | null;

  @Column({
    name: 'confirmed_by',
    nullable: true,
  })
  confirmedBy: number | null;

  @Column({
    name: 'asset_id',
    nullable: false,
  })
  assetId: number;
}
