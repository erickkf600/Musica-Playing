import { Component } from '@angular/core';
import { SmartAudioProvider } from '../../providers/smart-audio/smart-audio';
import { NativeAudio } from '@ionic-native/native-audio';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  imagem:string;
  duracao:string;
  progress:number;
  titulo:string;
  artista:string;
  reproduzindo:boolean;
  constructor(public _smartAudio: SmartAudioProvider, private nativeAudio: NativeAudio) {
    _smartAudio.preloadComplex(
      'playbtn',
      '../assets/music/Disenchanted My Chemical Romance.mp3',
      0.5,
      1,
      0
    );
  }

  play(){
    this._smartAudio.play('playbtn');
    this.nativeAudio.play('playbtn', () => console.log('uniqueId1 is done playing'));
  }

}
