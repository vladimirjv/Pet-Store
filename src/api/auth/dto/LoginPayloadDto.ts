'use strict';

import { TokenPayloadDto } from './TokenPayloadDto';
import { UserDto } from '../../user/dto/User.dto';

export class LoginPayloadDto {
    user: UserDto;
    token: TokenPayloadDto;

    constructor(user: UserDto, token: TokenPayloadDto) {
        this.user = user;
        this.token = token;
    }
}
