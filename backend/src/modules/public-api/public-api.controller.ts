import { Controller, Get, Query } from '@nestjs/common';
import { PublicApiService } from './public-api.service';
import GetProductParams from 'src/interfaces/request/get-product.params';

@Controller('public-api')
export class PublicApiController {
  constructor(private readonly publicApiService: PublicApiService) {}

  @Get('get-products')
  getProducts(@Query() params: GetProductParams) {
    return this.publicApiService.getProducts(params);
  }
}
