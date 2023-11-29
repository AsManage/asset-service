import { Entity, Column } from 'typeorm';
import { AbstractOrm } from './abstract.orm';

@Entity('lost_asset')
export class LostAssetOrm extends AbstractOrm {
  @Column({
    name: 'reference_no',
    nullable: false,
  })
  referenceNo: string;

  @Column({
    name: 'reason',
    nullable: false,
  })
  reason: string;

  @Column({
    name: 'process_status',
    nullable: false,
  })
  processStatus: string;

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
    name: 'from_custodian_id',
    nullable: true,
  })
  fromCustodianId: number | null;

  @Column({
    name: 'from_management_unit_id',
    nullable: true,
  })
  fromManagementUnitId: number | null;

  @Column({
    name: 'compensation_cost',
    nullable: true,
  })
  compensationCost: number | null;

  @Column({
    name: 'verified_by',
    nullable: true,
  })
  verifiedBy: number | null;

  @Column({
    name: 'approved_by',
    nullable: true,
  })
  approvedBy: number | null;

  @Column({
    name: 'asset_id',
    nullable: false,
  })
  assetId: number;
}
