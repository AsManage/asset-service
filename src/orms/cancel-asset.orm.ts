import { Entity, Column } from 'typeorm';
import { AbstractOrm } from './abstract.orm';

@Entity('cancel_asset')
export class CancelAssetOrm extends AbstractOrm {
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
    name: 'confirmed_by',
    nullable: true,
  })
  confirmedBy: number | null;

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
