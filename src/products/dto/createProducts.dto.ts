import { IsNotEmpty, 
    IsNumber, 
    IsString,
    MinLength,
    MaxLength,
} from "class-validator";


export class CreateProductsDTO {
    @IsNumber ()
    @IsNotEmpty ()
    codproduto: number;

    @IsString ()
    @IsNotEmpty ()
    @MinLength(6)
    @MaxLength(12)
    nomeproduto: string;

    @IsNotEmpty()
    @IsNumber()
    quantidade: string;

    @IsNotEmpty()
    @IsNumber()
    valor: number;
}