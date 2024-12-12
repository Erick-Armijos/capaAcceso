import { Controller } from '@nestjs/common';
import { IboService } from './ibo.service';

@Controller('ibo')
export class IboController {
  constructor(private readonly iboService: IboService) {}
}
