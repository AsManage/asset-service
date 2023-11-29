import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppService } from './app.service';
import { AcquisitionSourceOrm } from './orms/acquisition-source.orm';
import { AllocationReduceAssetOrm } from './orms/allocation-reduce-asset.orm';
import { AssetOrm } from './orms/asset.orm';
import { AssetComponentOrm } from './orms/asset-component.orm';
import { AssetCategoryOrm } from './orms/asset-category.orm';
import { AssetTypeOrm } from './orms/asset-type.orm';
import { CancelAssetOrm } from './orms/cancel-asset.orm';
import { ComponentEmbededInAssetOrm } from './orms/component-embeded-in-asset.orm';
import { LostAssetOrm } from './orms/lost-asset.orm';
import { LiquidAssetOrm } from './orms/liquid-asset.orm';
import { TransferAssetOrm } from './orms/transfer-asset.orm';
import { AssetComponentTypeOrm } from './orms/asset-component-type.orm';
import { AcquireAssetOrm } from './orms/acquire-asset.orm';
import { AcquireAssetComponentOrm } from './orms/acquire-asset-component.orm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forRoot()],
      useFactory: (configService: ConfigService) => {
        return {
          type: 'mysql',
          host: configService.get('DB_HOST'),
          port: +configService.get('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_NAME'),
          entities: [
            AcquisitionSourceOrm,
            AllocationReduceAssetOrm,
            AssetOrm,
            AssetComponentOrm,
            AssetComponentTypeOrm,
            AssetCategoryOrm,
            AssetTypeOrm,
            CancelAssetOrm,
            ComponentEmbededInAssetOrm,
            LostAssetOrm,
            LiquidAssetOrm,
            TransferAssetOrm,
            AcquireAssetOrm,
            AcquireAssetComponentOrm,
          ],
          synchronize: false,
        };
      },
      inject: [ConfigService],
    }),
    ClientsModule.register([
      { name: 'ASSET_SERVICE', transport: Transport.TCP },
    ]),
    TypeOrmModule.forFeature([
      AcquisitionSourceOrm,
      AllocationReduceAssetOrm,
      AssetOrm,
      AssetComponentOrm,
      AssetComponentTypeOrm,
      AssetCategoryOrm,
      AssetTypeOrm,
      CancelAssetOrm,
      ComponentEmbededInAssetOrm,
      LostAssetOrm,
      LiquidAssetOrm,
      TransferAssetOrm,
      AcquireAssetComponentOrm,
      AcquireAssetOrm,
    ]),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
