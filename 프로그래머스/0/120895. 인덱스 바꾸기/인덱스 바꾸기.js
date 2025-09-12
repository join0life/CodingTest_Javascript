function solution(my_string, num1, num2) {
    // my_string = my_string.split("");
    // let temp = my_string[num1];
    // my_string[num1] = my_string[num2];
    // my_string[num2] = temp;
    // return my_string.join("");
    
    //구조분해 할당
    my_string = my_string.split("");
    [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
    return my_string.join("");
}