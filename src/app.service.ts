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
import { ComponentEmbededInAssetOrm } from './orms/component-embeded-in-asset.orm';
import { LiquidAssetOrm } from './orms/liquid-asset.orm';
import { LostAssetOrm } from './orms/lost-asset.orm';
import { AssetCategoryOrm } from './orms/asset-category.orm';
import { TransferAssetOrm } from './orms/transfer-asset.orm';

@Injectable()
export class AppService {
  constructor(
<<<<<<< HEAD
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
    @InjectRepository(ComponentEmbededInAssetOrm)
    private componentEmbededInAssetRepo: Repository<ComponentEmbededInAssetOrm>,
    @InjectRepository(LostAssetOrm)
    private lostAssetRepo: Repository<LostAssetOrm>,
    @InjectRepository(LiquidAssetOrm)
    private liquidAssetRepo: Repository<LiquidAssetOrm>,
    @InjectRepository(TransferAssetOrm)
    private transferAssetRepo: Repository<TransferAssetOrm>,
  ) {}
  private AM_ORGANISATION = {
    ACQUISITION_SOURCE: this.acquisitionSourceRepo,
    ALLOCATION_REDUCE_ASSET: this.allocationReduceAssetRepo,
    ASSET_CATEGORY: this.assetCategoryRepo,
    ASSET_COMPONENT_TYPE: this.assetComponentTypeRepo,
    ASSET_TYPE: this.assetTypeRepo,
    ASSET: this.assetRepo,
    CANCEL_ASSET: this.cancelAssetRepo,
    COMPONENT_EMBEDDED_IN_ASSET: this.componentEmbededInAssetRepo,
    LOST_ASSET: this.lostAssetRepo,
    TRANSFER_ASSET: this.transferAssetRepo,
    LIQUID_ASSET: this.liquidAssetRepo,
    ASSET_COMPONENT: this.assetComponentRepo,
=======
    @InjectRepository(TenantInfoOrm)
    private tenantInfoRepo: Repository<TenantInfoOrm>,
    @InjectRepository(OrganisationUnitOrm)
    private organisationUnitRepo: Repository<OrganisationUnitOrm>,
    @InjectRepository(OrganisationUnitTypeOrm)
    private organisationUnitTypeRepo: Repository<OrganisationUnitTypeOrm>,
    @InjectRepository(LocationOfOrgUnitOrm)
    private locationOfOrgUnitOrmRepo: Repository<LocationOfOrgUnitOrm>,
    @InjectRepository(LocationOrm)
    private locationOrmRepo: Repository<LocationOrm>,
  ) {}
  private AM_ORGANISATION = {
    TENANT_INFO: this.tenantInfoRepo,
    ORGANISATION_UNIT: this.organisationUnitRepo,
    ORGANISATION_UNIT_TYPE: this.organisationUnitTypeRepo,
    LOCATION: this.locationOrmRepo,
    LOCATION_OF_ORG_UNIT: this.locationOfOrgUnitOrmRepo,
>>>>>>> 89f14ecd1115a8af53a11edc92af3aca82b39880
  };

  async getOne(payload?: any, entity?: string) {
    const parsePayload = findOperatorParser(payload);
    const repository = this.AM_ORGANISATION[entity];
    return await repository.findOne({ where: parsePayload });
  }

  async getByIds(payload?: any, entity?: string) {
    const parsePayload = findOperatorParser(payload);
    const repository = this.AM_ORGANISATION[entity];
    return await repository.findByIds(parsePayload);
  }

  async getList(payload?: any, entity?: string) {
    const parsePayload = findOperatorParser(payload);
    const repository = this.AM_ORGANISATION[entity];
    return await repository.find(parsePayload);
  }

  async getListPaging(payload?: any, entity?: string) {
    const repository = this.AM_ORGANISATION[entity];
    return await getListPagingByEntity(payload, repository);
  }

  async update(payload?: any, entity?: string) {
    const repository = this.AM_ORGANISATION[entity];
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
    const repository = this.AM_ORGANISATION[entity];
    const { checkExisted, data } = payload;
    if (isEmpty(checkExisted)) {
      return await repository.save({
        ...payload,
        createdAt: new Date(),
        createdBy: payload.id,
      });
    }
    const existed = await repository.findOne({ where: checkExisted }, entity);
    console.log(checkExisted);
    if (!isEmpty(existed)) {
      return {
        status: 400,
        message: 'BAD_REQUEST',
      };
    }
    console.log(data);
    return await repository.save({
      ...data,
      createdAt: new Date(),
      createdBy: data.id,
    });
  }
}
