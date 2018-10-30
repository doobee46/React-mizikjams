import { randomString } from './helpers';
import sha1 from 'sha1';

const request_uri = 'https://api.jwplatform.com/v1/videos/list?'
const url_params = {
                      api_format: "json", 
                      api_key: 'JdT4bbux',
                      api_nonce: randomString(8),
                      api_timestamp: Math.round(new Date().getTime()/1000)
                      }
const secret ='2zJRn3NtzSq8cLqxGlMnKg8S'
const url_query = Object.keys(url_params).map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(url_params[key])
  }).join('&');
const signature = sha1(url_query + secret) 
const merged ={...url_params, api_signature: signature}
const query_str =Object.keys(merged).map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(merged[key])
  }).join('&');

export const url = `${request_uri}`+query_str