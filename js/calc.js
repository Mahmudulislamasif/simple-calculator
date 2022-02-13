
function calculation(calculate)
{
    const getText=document.getElementById("first-input-text");
    const getTextValue=parseFloat(getText.value);
    const getSecondText=document.getElementById("second-input-text");
    const getSecondTextValue=parseFloat(getSecondText.value);
    const getResultText=document.getElementById('result-value');
    if(calculate=='add-button'){
        getResultText.value=getTextValue+getSecondTextValue;
        const showResult=document.getElementById('show-add-result');
        showResult.innerText=getResultText.value;
    }
    else if(calculate=='substract-button')
    {
        getResultText.value=getTextValue-getSecondTextValue;
        const showResult=document.getElementById("show-sub-result");
        showResult.innerText=getResultText.value;
    }
    else if(calculate=='multiply-button')
    {
        getResultText.value=getTextValue*getSecondTextValue;
        const showResult=document.getElementById("show-mul-result");
        showResult.innerText=getResultText.value;
    }
    }
function add()
{
    calculation('add-button')
}
function substract()
{
    calculation('substract-button')
}
function multiply()
{
    calculation('multiply-button')
}