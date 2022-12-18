import { Controller, Get, Header, Query, Res } from '@nestjs/common';
import { AppService, StationsSearchParams } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('Cache-Control', 'max-age=3600, must-revalidate, public')
  getHello(): string {
    return 'date' + Date.now();
  }

  @Get('/stations')
  @Header('Cache-Control', 'max-age=3600, must-revalidate, public')
  async getStations(
    @Res() res: Response,
    @Query() query: StationsSearchParams,
  ) {
    return res.json(await this.appService.getStations(query));
  }
}
