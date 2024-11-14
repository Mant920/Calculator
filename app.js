//Buttons

//Variables for operations
let num1=0;
let operator;
let num2=0;

//Functions
function add(a,b)
{
    return a+b;
}

function subtract(a,b)
{
    return a-b;
}

function multiply(a,b)
{
    return a*b;
}

function divide(a,b)
{
    return a/b;
}

function operate(a,op,b)
{
    if (op=="+")
    {
        add(a,b);
    }

    else if(op=="−")
    {
        subtract(a,b);
    }
    else if(op=="÷")
    {
        divide(a,b);
    }
    else if(op=="×")
    {
        multiply(a,b);
    }

}