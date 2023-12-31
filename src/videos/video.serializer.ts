import { Category, Video } from '@prisma/client';
import { basename } from 'path';
export class  VideoSerializer{
    id: number;
    title: string;
    description: string;
    category: {id: number, name: string, description: string | null};
    file_url: string;

    constructor(video: Video & {category: Category}){
        this.id = video.id;
        this.title = video.title;
        this.description = video.description;
        this.category = {id: video.category.id, name: video.category.name, description: video.category.description};
        this.file_url = `http://localhost:3000/videos/file/`+basename(video.file_path);
    }
}