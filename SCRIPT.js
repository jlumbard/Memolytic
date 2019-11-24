
async function getQuestionData()
{
    let header = new Headers({
        'Access-Control-Allow-Origin':'*',
        
    });

    let response = await fetch(
        'https://smart-visitor-259902.appspot.com/question/',
        { 
            method: 'GET',
            headers:header,
        }
    )
    let data = await response.json();
    console.log(data);
    return data;
}

async function getUserData(ID)
{
    let header = new Headers({
        'Access-Control-Allow-Origin':'*',
        
    });

    let response = await fetch(
        'https://smart-visitor-259902.appspot.com/user/' + ID,
        { 
            method: 'GET',
            headers:header,
        }
    )
    let data = await response.json();
    console.log(data);
    return data;
}