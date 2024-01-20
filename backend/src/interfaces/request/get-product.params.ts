import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export default class GetProductParams {
  @IsString()
  search: string | undefined;

  @IsNotEmpty()
  @IsNumberString()
  page: number;

  @IsNotEmpty()
  @IsNumberString()
  limit: number;
}
