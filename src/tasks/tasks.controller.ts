import { Body, Controller, Get, Post, Delete, Param, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { UpdateTaskDto, createTaskDTO } from './dto/task.dto';


@Controller('tasks')
export class TasksController {
    constructor( private tasksService: TasksService){}

@Get()
getAllTasks(){
    return this.tasksService.getAllTask();
}

@Post()
createTask(@Body() newTask: createTaskDTO){
   return this.tasksService.createTask(newTask.title, newTask.description);
}


@Patch(':id')
updateTask(@Param('id') id: string,  @Body() updatedFields: UpdateTaskDto){
   return  this.tasksService.updateTask(id, updatedFields)
}


@Delete(':id')
deleteTask(@Param('id') id: string,){
    this.tasksService.deleteTask(id);
}


}
 