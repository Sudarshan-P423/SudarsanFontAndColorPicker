function buttonCreator(obj)
{
    for(let i = 0;i<10;i++)
    {
        let but = document.createElement('button');
        obj.appendChild(but)
    }
}
function txtColor(obj,color)
{
    obj.style.width='50px';
    obj.style.height = '50px';
    obj.style.borderRadius='50%'
    obj.style.background = `${color}`;
}
function fontStyles(obj,k)
{
    obj.style.width='50px';
    obj.style.height = '50px';
    obj.innerHTML ='Hello';
    obj.style.fontFamily = `${k}`;
}