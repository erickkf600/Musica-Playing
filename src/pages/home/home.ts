import { Component } from '@angular/core';
import { SmartAudioProvider } from '../../providers/smart-audio/smart-audio';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public _smartAudio: SmartAudioProvider) {
    _smartAudio.preloadComplex(
      'playbtn',
      '../assets/music/Disenchanted My Chemical Romance.mp3',
      0.5,
      1,
      0
    );
  }

  play(){
    this._smartAudio.play('playbtn')
  }

}
