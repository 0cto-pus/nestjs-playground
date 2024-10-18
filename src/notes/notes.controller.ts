import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { NotesService } from './notes.service';
import { IdentificationGuard } from 'src/identification/identification.guard';

@Controller('notes')
@UseGuards(IdentificationGuard)
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get()
  getNotes() {
    return this.notesService.getNotes();
  }
  @Get(':id')
  getNote(@Param('id', ParseIntPipe) id: number) {
    return this.notesService.getNote(id);
  }

  @Post()
  createNote(@Body(new ValidationPipe()) createNoteDto: CreateNoteDto) {
    return this.notesService.createNote(createNoteDto);
  }

  @Put(':id')
  updateNote(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateNoteDto: UpdateNoteDto,
  ) {
    return this.notesService.updateNote(id, updateNoteDto);
  }

  @Delete(':id')
  deleteNote(@Param('id', ParseIntPipe) id: number) {
    return this.notesService.removeNote(id);
  }
}
