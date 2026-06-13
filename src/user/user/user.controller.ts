import { Controller, Post, Get, Req } from '@nestjs/common';
import type { Request } from 'express';

@Controller('/api/users')
export class UserController {

    @Get('/:id')
    getById(@Req() request: Request): string {
        return `GET ${request.params.id}`;
    }

    @Post()
    post(): string {
        return 'POST';

    }

    @Get('/sample')
    get(): string {
        return 'HELLO NestJS'
    }
}
// INI penting banget cuy