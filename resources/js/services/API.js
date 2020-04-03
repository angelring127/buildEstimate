/**
 * API.js
 * 
 */

 import axios from 'axios';

 const basuURL = 'http://localhost:3000/api/'; //ローカル環境

 const csrf = document.getElementsByName('csrf-token');//laravel CSRF token
 const axiosApi = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN': csrf[0].content
  },
  responseType: 'json',
    xhrFields: {
      withCredentials: true
  }
});