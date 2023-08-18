import { PartialType } from '@nestjs/mapped-types';
import { CreateVideoWithUploadDto } from './create-video.dto';

export class UpdateVideoDto extends PartialType(CreateVideoWithUploadDto) {}
