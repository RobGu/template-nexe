import $ from 'jquery';
import { JSDOM } from 'jsdom';

export default class JQuery {
  static init = (html) => {
    return $(new JSDOM(html).window);
  }
}
