import { Module } from '@nestjs/common';
import { VideosService } from './videos.service';
import { VideosController } from './videos.controller';
import { MulterModule } from '@nestjs/platform-express';
import multer from 'multer';
import path from 'path';

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1; // add 1 because getMonth() returns 0-based index
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'tmp/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, `${year}-${month}-${day}_${hours}-${minutes}-${seconds}_${Math.floor(Math.random() * 101)}${path.extname(file.originalname)}`);
  }
});

@Module({
  imports: [
    MulterModule.register({
      storage,
    })
  ],
  controllers: [VideosController],
  providers: [VideosService],
})
export class VideosModule {}


