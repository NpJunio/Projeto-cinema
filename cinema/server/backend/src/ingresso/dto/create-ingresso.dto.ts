import { IsString, IsNotEmpty, IsInt } from 'class-validator';

export class CreateIngressoDto {
  @IsString()
  @IsNotEmpty()
  cliente: string;

  @IsString()
  @IsNotEmpty()
  cpf: string;

  @IsString()
  @IsNotEmpty()
  assento: string;

  @IsString()
  @IsNotEmpty()
  pagamento: string;

  @IsInt()
  sessaoId: number;
}