import {environment} from '../../environments/environment';

const baseUrl = environment.API;

export const urls = {
  users:`${baseUrl}/users`,
  posts:`${baseUrl}/posts`,
  comments:`${baseUrl}/comments`,
}
