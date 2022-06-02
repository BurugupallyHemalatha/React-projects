window.addEventListener('load',()=>{
    const params = (new URL(document.location)).searchParams;
    const name=params.get('name');
    const surname=params.get('surname');
    const email=params.get('email');
    const phonenumber=params.get('phonenumber');
    const street=params.get('street');
    const city=params.get('city');
    const state=params.get('state');
    const zipcode=params.get('zipcode');
    const country=params.get('country');
    document.getElementById('result-name').innerHTML=name;
    document.getElementById('result-surname').innerHTML=surname;
    document.getElementById('result-email').innerHTML=email;
    document.getElementById('result-phonenumber').innerHTML=phonenumber;
    document.getElementById('result-street').innerHTML=street;
    document.getElementById('result-city').innerHTML=city;
    document.getElementById('result-state').innerHTML=state;
    document.getElementById('result-zipcode').innerHTML=zipcode;
    document.getElementById('result-country').innerHTML=country;
  })