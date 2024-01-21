import { Entity, Column } from 'typeorm';
import { AbstractOrm } from './abstract.orm';

@Entity('audit_session')
export class AuditSessionOrm extends AbstractOrm {
  @Column({
    name: 'name',
    nullable: false,
  })
  name: string;

  @Column({
    name: 'assignee_id',
    nullable: false,
  })
  assigneeId: number;

  @Column({
    name: 'note',
    nullable: true,
  })
  note: string;

  @Column({
    name: 'start_date',
    type: 'timestamp',
    nullable: true,
  })
  startDate: string | null;

  @Column({
    name: 'end_date',
    type: 'timestamp',
    nullable: true,
  })
  endDate: string | null;
}
