export class CreateSessaoDto {
  filmeId: number;
  salaId: number;
  dataHora: string; // ISO string do frontend
  preco: number;
  idioma: string;
  formato: string;
}
