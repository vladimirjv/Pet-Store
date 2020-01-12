import { classToPlain, plainToClass } from 'class-transformer';

export function AutomapClasses<S, T>(object: S, toClassInstance: any | T): T {
    const plainClass = classToPlain(object);
    const newClass = plainToClass(toClassInstance , plainClass);
    return newClass as T;
}
