import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  Controller,
  HttpCode,
  Delete,
  Param,
  Body,
  Get,
  Put,
} from '@nestjs/common';

import { UpdateUserDto } from './dto';
import { UsersService } from './users.service';
import { User } from './entity/users.entity';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Get all users.' })
  @ApiResponse({ status: 200, type: User })
  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @ApiOperation({ summary: 'Get specific user by Id.' })
  @ApiResponse({ status: 200, type: User })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update specifit user by Id.' })
  @ApiResponse({ status: 200, type: User })
  @Put(':id')
  update(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.usersService.update(+id, body);
  }

  @ApiOperation({ summary: 'Delete specific user by Id.' })
  @ApiResponse({ status: 204 })
  @Delete(':id')
  @HttpCode(204)
  delete(@Param('id') id: string) {
    return this.usersService.delete(+id);
  }
}
