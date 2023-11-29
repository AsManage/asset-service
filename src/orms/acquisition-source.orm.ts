import { Entity, Column } from 'typeorm';
import { AbstractOrm } from './abstract.orm';

@Entity('acquisition_source')
export class AcquisitionSourceOrm extends AbstractOrm {
  @Column({
    name: 'name',
    nullable: false,
  })
  name: string;

  @Column({
    name: 'desciption',
    nullable: true,
  })
  desciption: string | null;
}
