function return_reverse_array(times: number) : number[] {
    let array = [];
    for (let i = 1; i <= times; i++) {
        array.unshift(i);
    }
    return array;
}