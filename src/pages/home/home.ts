import { Component } from '@angular/core';
import { SmartAudioProvider } from '../../providers/smart-audio/smart-audio';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public smartAudio: SmartAudioProvider) {

  }

  iniciar() {
    this.smartAudio.play('playbtn');
}

}
