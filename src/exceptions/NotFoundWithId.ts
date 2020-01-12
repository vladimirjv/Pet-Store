import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundWithId extends HttpException {
    constructor(id: string | number, className?: string) {
        super({
            status: HttpStatus.NOT_FOUND,
            error: `Couldn\'t find ${className ? className : 'item'} with id: ${id}`,
        }, HttpStatus.NOT_FOUND);
    }
}
