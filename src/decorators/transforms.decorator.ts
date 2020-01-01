/* tslint:disable:naming-convention */
'use strict';

import * as _ from 'lodash';
import { Transform } from 'class-transformer';

/**
 * @description convert string or number to integer
 * @example
 * @IsNumber()
 * @ToInt()
 * name: number;
 * @returns {(target: any, key: string) => void}
 * @constructor
 */
export const ToInt = () =>
    Transform(value => parseInt(value, 10), { toClassOnly: true });
