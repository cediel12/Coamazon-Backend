import { CourseService } from './course.service';
import { Controller, Get, HttpStatus, Request, Response, Param } from '@nestjs/common';

@Controller('course')
export class CourseController {
    constructor(private readonly courseService: CourseService){}

    @Get('getAll')
    public async getUser(
        @Request() req,
        @Response() res
    ) {
        
        const users = await this.courseService.getCourse();
        res.status(HttpStatus.OK).json(users);
    }


    @Get('findCurse/:idCourse')
    public async findUser(
        @Request() req,
        @Response() res,
        @Param('idCourse') idCourse
    ) {
        
        const user = await this.courseService.getICourse(idCourse);
        res.status(HttpStatus.OK).json(user);
    }
}
