import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

@Injectable()
export class NotesService {
  private notes = [
    {
      id: 1,
      title: 'Today Was A Good Day',
      description: 'I am so happy today.',
    },
    {
      id: 2,
      title: 'I met my friends',
      description: 'Today i met my friends we had a good time',
    },
  ];
  getNotes() {
    return this.notes;
  }

  createNote(createNoteDto: CreateNoteDto) {
    this.notes.push(createNoteDto);
    return createNoteDto;
  }

  getNote(id: number) {
    return this.notes.find((note) => note.id === id);
  }

  updateNote(id: number, updateNoteDto: UpdateNoteDto) {
    this.notes = this.notes.map((note) => {
      if (note.id === id) {
        return { ...note, ...updateNoteDto };
      }
      return note;
    });
    return this.getNote(id);
  }

  removeNote(id: number) {
    const toBeRemoved = this.getNote(id);

    this.notes = this.notes.filter((note) => note.id !== id);
    return toBeRemoved;
  }
}
