import { Controller, Post, Get, Req, Query, Res, HttpCode, Header, Redirect, } from '@nestjs/common';
import type { Response, Request, } from 'express';
import type { HttpRedirectResponse } from '@nestjs/common';


@Controller('/api/users')
export class UserController {

    @Get('/set-cookie')
    setCookie(@Query('name') name: string, @Res() response: Response) {
        response.cookie('name', name);
        response.status(200).send('succes set cookie');
    }

    @Get('/get-cookie')
    getCookie(@Req() requet: Request): string {
        return requet.cookies['name'];
    }


    @Get('/sample-response')
    @Header('content-Type', 'application/json')
    @HttpCode(200)
    sampleResponse(): Record<string, string> {
        return {
            data: 'Hello Json'
        };
    }
    @Get('/redirect')
    @Redirect()
    redirect(): HttpRedirectResponse {
        return {
            url: '/api/users/sample-response',
            statusCode: 301,
        }
    }

    @Get('/hello')
    async sayHello(
        @Query('first_name') firstName: string,
        @Query('last_name') lastName: string,
    ): Promise<string> {
        return `Hello ${firstName} ${lastName} `;
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