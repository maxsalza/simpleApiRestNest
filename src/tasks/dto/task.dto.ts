import { TaskStatus } from "../tasks.entity";
import {  IsString, IsNotEmpty, MinLength} from 'class-validator'
export class createTaskDTO{
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title: string;
    description: string;
}

export class UpdateTaskDto{
    title?: string;
    description?: string;
    status?: TaskStatus;
}