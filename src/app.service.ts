import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { isEmpty } from 'lodash';
import { findOperatorParser, getListPagingByEntity } from './utils/common';
import { AssetTypeOrm } from './orms/asset-type.orm';
import { AcquisitionSourceOrm } from './orms/acquisition-source.orm';
import { AllocationReduceAssetOrm } from './orms/allocation-reduce-asset.orm';
import { AssetComponentOrm } from './orms/asset-component.orm';
import { AssetComponentTypeOrm } from './orms/asset-component-type.orm';
import { AssetOrm } from './orms/asset.orm';
import { CancelAssetOrm } from './orms/cancel-asset.orm';
import { ComponentEmbeddedInAssetOrm } from './orms/component-embedded-in-asset.orm';
import { LiquidAssetOrm } from './orms/liquid-asset.orm';
import { LostAssetOrm } from './orms/lost-asset.orm';
import { AssetCategoryOrm } from './orms/asset-category.orm';
import { TransferAssetOrm } from './orms/transfer-asset.orm';
import { AcquireAssetOrm } from './orms/acquire-asset.orm';
import { AcquireAssetComponentOrm } from './orms/acquire-asset-component.orm';
import { AuditSessionOrm } from './orms/audit-session.orm';
import { AuditAssetMappingOrm } from './orms/audit-asset-mapping.orm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(AcquisitionSourceOrm)
    private acquisitionSourceRepo: Repository<AcquisitionSourceOrm>,
    @InjectRepository(AllocationReduceAssetOrm)
    private allocationReduceAssetRepo: Repository<AllocationReduceAssetOrm>,
    @InjectRepository(AssetCategoryOrm)
    private assetCategoryRepo: Repository<AssetCategoryOrm>,
    @InjectRepository(AssetComponentOrm)
    private assetComponentRepo: Repository<AssetComponentOrm>,
    @InjectRepository(AssetComponentTypeOrm)
    private assetComponentTypeRepo: Repository<AssetComponentTypeOrm>,
    @InjectRepository(AssetTypeOrm)
    private assetTypeRepo: Repository<AssetTypeOrm>,
    @InjectRepository(AssetOrm)
    private assetRepo: Repository<AssetOrm>,
    @InjectRepository(CancelAssetOrm)
    private cancelAssetRepo: Repository<CancelAssetOrm>,
    @InjectRepository(ComponentEmbeddedInAssetOrm)
    private componentEmbeddedInAssetRepo: Repository<ComponentEmbeddedInAssetOrm>,
    @InjectRepository(LostAssetOrm)
    private lostAssetRepo: Repository<LostAssetOrm>,
    @InjectRepository(LiquidAssetOrm)
    private liquidAssetRepo: Repository<LiquidAssetOrm>,
    @InjectRepository(TransferAssetOrm)
    private transferAssetRepo: Repository<TransferAssetOrm>,
    @InjectRepository(LiquidAssetOrm)
    private AcquireAssetRepo: Repository<AcquireAssetOrm>,
    @InjectRepository(AcquireAssetComponentOrm)
    private AcquireAssetComponentRepo: Repository<AcquireAssetComponentOrm>,
    @InjectRepository(AuditSessionOrm)
    private AuditSessionRepo: Repository<AuditSessionOrm>,
    @InjectRepository(AuditAssetMappingOrm)
    private AuditAssetMappingRepo: Repository<AuditAssetMappingOrm>,
  ) {}
  private AM_ASSET = {
    ACQUISITION_SOURCE: this.acquisitionSourceRepo,
    ALLOCATION_REDUCE_ASSET: this.allocationReduceAssetRepo,
    ASSET_CATEGORY: this.assetCategoryRepo,
    ASSET_COMPONENT_TYPE: this.assetComponentTypeRepo,
    ASSET_TYPE: this.assetTypeRepo,
    ASSET: this.assetRepo,
    CANCEL_ASSET: this.cancelAssetRepo,
    COMPONENT_EMBEDDED_IN_ASSET: this.componentEmbeddedInAssetRepo,
    LOST_ASSET: this.lostAssetRepo,
    TRANSFER_ASSET: this.transferAssetRepo,
    LIQUID_ASSET: this.liquidAssetRepo,
    ASSET_COMPONENT: this.assetComponentRepo,
    ACQUIRE_ASSET: this.AcquireAssetRepo,
    ACQUIRE_ASSET_COMPONENT: this.AcquireAssetComponentRepo,
    AUDIT_SESSION: this.AuditSessionRepo,
    AUDIT_ASSET_MAPPING: this.AuditAssetMappingRepo,
  };

  async getOne(payload?: any, entity?: string) {
    const parsePayload = findOperatorParser(payload);
    const repository = this.AM_ASSET[entity];
    return await repository.findOne({ where: parsePayload });
  }

  async getByIds(payload?: any, entity?: string) {
    const parsePayload = findOperatorParser(payload);
    const repository = this.AM_ASSET[entity];
    return await repository.findByIds(parsePayload);
  }

  async getList(payload?: any, entity?: string) {
    const parsePayload = findOperatorParser(payload);
    const repository = this.AM_ASSET[entity];
    return await repository.find({ where: parsePayload });
  }

  async getListPaging(payload?: any, entity?: string) {
    const repository = this.AM_ASSET[entity];
    return await getListPagingByEntity(payload, repository);
  }

  async delete(payload?: any, entity?: string) {
    const repository = this.AM_ASSET[entity];
    return await repository.delete({ ...payload });
  }

  async update(payload?: any, entity?: string) {
    const repository = this.AM_ASSET[entity];
    const { conditions, data, id } = payload;
    const conditionParser = findOperatorParser(conditions);
    const updateData = Object.assign(
      data,
      id ? { updatedAt: new Date(), updatedBy: id } : {},
    );
    const result = await repository.update(conditionParser, updateData);
    if (!result.affected) {
      return {
        status: 404,
        message: 'NOT_FOUND',
      };
    }
    return repository.findOne({ where: conditionParser }, entity);
  }
  async save(payload?: any, entity?: string) {
    const repository = this.AM_ASSET[entity];
    const { checkExisted, data } = payload;
    if (isEmpty(checkExisted)) {
      return await repository.save({
        ...payload.data,
        createdAt: new Date(),
        createdBy: payload.id,
      });
    }
    const existed = await repository.findOne({ where: checkExisted }, entity);
    if (!isEmpty(existed)) {
      return {
        status: 400,
        message: 'BAD_REQUEST',
      };
    }
    return await repository.save({
      ...data,
      createdAt: new Date(),
      createdBy: data.id,
    });
  }
}
