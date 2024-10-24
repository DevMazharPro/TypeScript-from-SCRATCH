const findType = (type : string | number | boolean) : string | number | boolean => {
    if ( typeof type === 'string') {
        return type.charAt(0).toUpperCase() + type.slice(1);
    } else if ( typeof type === 'number' ) {
        return `$${type}`
    } else if ( typeof type === 'boolean' ) {
        return type? 'True' : 'False';
    } else {
        throw new Error( 'Invalid type');
    }
}
console.log(findType("mazhar"));
console.log(findType(576));
console.log(findType(true));


