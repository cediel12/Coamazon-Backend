import { Course } from './course.interface';
import { CourseService } from './course.service';
import { Controller, Get, HttpStatus, Request, Response, Param, Put, Body, Delete, Post } from '@nestjs/common';

@Controller('course')
export class CourseController {
    constructor(private readonly courseService: CourseService) { }

    @Get('getAll')
    public async getCourse(
        @Request() req,
        @Response() res
    ) {

        const users = await this.courseService.getCourse();
        res.status(HttpStatus.OK).json(users);
    }


    @Get('findCurse/:idCourse')
    public async findCourse(
        @Request() req,
        @Response() res,
        @Param('idCourse') idCourse
    ) {

        const user = await this.courseService.getICourse(idCourse);
        res.status(HttpStatus.OK).json(user);
    }
    @Put('updateDepartament')
    public async updateDepartament(
        @Request() req,
        @Response() res,
        @Body('idcourse') idcourse,
        @Body('name_course') name_course,
        @Body('description') description,
        @Body('grade') grade,
        @Body('id_use_teacher') id_use_teacher,
    ) {
        let course: Course = {
            idcourse: idcourse,
            name_course: name_course,
            description: description,
            id_use_teacher: id_use_teacher
        }
        const response = await this.courseService.updateCourse(course);
        res.status(HttpStatus.OK).json(response);
    }
    @Delete('deleteDepartament/:idDepartament')
    public async deleteCourse(
        @Request() req,
        @Response() res,
        @Param('idcourse') idcourse
    ) {

        const user = await this.courseService.deleteCourse(idcourse);
        res.status(HttpStatus.OK).json(user);
    }
    @Post('crearCourse')
    public async crearCourse(
        @Request() req,
        @Response() res,
        @Body('name_course') name_course,
        @Body('description') description,
        @Body('id_use_teacher') id_use_teacher,
    ) {
        let course: Course = {
            name_course: name_course,
            description: description,
            id_use_teacher: id_use_teacher
        }
        const response = await this.courseService.createCourse(course);
        res.status(HttpStatus.OK).json(response);
    }
}
