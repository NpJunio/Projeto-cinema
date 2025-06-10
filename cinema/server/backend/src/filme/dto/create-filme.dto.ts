import { IsString, IsNotEmpty, IsInt, IsDateString } from 'class-validator';

export class CreateFilmeDto {
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsString()
  @IsNotEmpty()
  descricao: string;

  @IsString()
  @IsNotEmpty()
  genero: string;

  @IsString()
  @IsNotEmpty()
  classificacao: string;

  @IsInt()
  duracao: number;

  @IsDateString()
  estreia: string;

  @IsString()
  @IsNotEmpty()
  imagem: string;
}
