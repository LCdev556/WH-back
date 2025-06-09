import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Employee } from './schema/employee.schema';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get()
  async findAll() {
    return this.employeesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.employeesService.findOne(id);
  }

  @Post()
  async create(@Body() employee: Employee) {
    return this.employeesService.create(employee);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() employee: Employee) {
    return this.employeesService.update(id, employee);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.employeesService.delete(id);
  }
}