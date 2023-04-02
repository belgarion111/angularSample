import { Component } from '@angular/core';

@Component({
  selector: 'app-youtube-icon',
  template: '  <a aria-label="Angular on YouTube" target="_blank" rel="noopener" href="https://youtube.com/angular" title="YouTube">\n' +
    '             <svg id="youtube-logo" height="54" width="44" data-name="Logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff">\n' +
    '               <path d="M0 0h24v24H0V0z" fill="none"/>\n' +
    '               <path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"/>\n' +
    '             </svg>' +
    '           </a>' ,
})
export class YoutubeIconComponent {

}
