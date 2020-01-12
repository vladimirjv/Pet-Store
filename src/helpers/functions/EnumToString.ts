export const EnumToString = (Enum: any) => {
    // todo
    let values = Object.keys(Enum);
    values = values.map(el => Enum[el]);
    return values.toString();
};
