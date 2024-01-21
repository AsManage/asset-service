import { Entity, Column } from 'typeorm';
import { AbstractOrm } from './abstract.orm';

@Entity('audit_asset_mapping')
export class AuditAssetMappingOrm extends AbstractOrm {
  @Column({
    name: 'asset_id',
    nullable: false,
  })
  assetId: number;

  @Column({
    name: 'audit_session_id',
    nullable: false,
  })
  auditSessionId: number;

  @Column({
    name: 'status',
    nullable: true,
  })
  status: string;

  @Column({
    name: 'note',
    nullable: true,
  })
  note: string;
}
