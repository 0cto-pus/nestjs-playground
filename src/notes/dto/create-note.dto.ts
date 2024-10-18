import { MaxLength, MinLength } from 'class-validator';

export class CreateNoteDto {
  id: number;
  @MinLength(5)
  @MaxLength(15)
  title: string;
  @MaxLength(100)
  description: string;
}
