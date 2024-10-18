import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { NotesController } from './notes/notes.controller';
import { NotesService } from './notes/notes.service';

@Module({
  imports: [UsersModule],
  controllers: [AppController, NotesController],
  providers: [AppService, NotesService],
})
export class AppModule {}
