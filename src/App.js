import './App.css';
import axios from 'axios'
import React, { useEffect, useState } from 'react';


function App() {
    let data = '@issue.xml';

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://issues.diasoft.ru/issues.xml?project_id=p3231877',
        headers: {
            'Content-Type': 'application/xml',
            'scheme': 'http',
            'Authorization': 'Basic c3lha3VzaGV2Ok5hdGFsaTE5ODQ=',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Header': '*',
            'Access-Control-Expose-Headers': '*',
            'Access-Control-Allow-Credential': 'false',
            'Cookie': '_redmine_session=BAh7CUkiD3Nlc3Npb25faWQGOgZFVEkiJTE1NThiZjNjZjNmNjA5M2Q5YjMxMTYyMmUyMWY4N2MwBjsAVEkiEF9jc3JmX3Rva2VuBjsARkkiMUhlZWRscTJkTWQ0UGFIRXFBdkdSamgvOXYzZ0p3Q2tHMTZwZGtYaWtOTFk9BjsARkkiCnF1ZXJ5BjsARnsJOg9wcm9qZWN0X2lkaQHEOgxmaWx0ZXJzewZJIg5zdGF0dXNfaWQGOwBUewc6DW9wZXJhdG9ySSIGbwY7AFQ6C3ZhbHVlc1sGSSIABjsAVDoNZ3JvdXBfYnkwOhFjb2x1bW5fbmFtZXMwSSIWaXNzdWVzX2luZGV4X3NvcnQGOwBGSSIMaWQ6ZGVzYwY7AFQ%3D--4449281f07a0a9b5c22ae1a410be075ba1a13c11'
        },
        data : data
    };

    axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });


    return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

/*function App() {
    const myHeaders = new Headers();
    myHeaders.append("accept", "application/json");

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    fetch("https://petstore.swagger.io/v2/store/inventory", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));

    return (
        <div className="App">
            <header className="App-header">

            </header>
        </div>
    );
}*/

export default App;
