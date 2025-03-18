function validateForm()
{
    let rmValue=document.getElementById('rm').value;
    let ptValue=document.getElementById('pt').value;
    let lstatValue=document.getElementById('lstat').value;

    if(rmValue<=1||rmValue>=8)
    {
        alert('RM Value must be between 1-8');
        return false;
    }
    if(ptValue<=10||ptValue>=20)
    {
        alert('Pt Ratio must be between 10-20');
        return false;
    }
    if(lstatValue<=10||lstatValue>=30)
    {
        alert('lstat value must be between 10-30');
        return false;
    }
    return true;
}