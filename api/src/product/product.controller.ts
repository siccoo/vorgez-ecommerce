import { Body, Controller, Post } from '@nestjs/common';

@Controller('product')
export class ProductController {
  @Post()
  createProduct(
    @Body('name') name: string,
    @Body('price') price: string,
    @Body('description') description?: string,
  ) {
    return this.productService;
  }
}
