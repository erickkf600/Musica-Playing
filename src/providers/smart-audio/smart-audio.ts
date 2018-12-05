import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

@Injectable()
export class SmartAudioProvider {

  audioType: string = 'html5';
  sounds: any = [];

  constructor(public nativeAudio: NativeAudio, platform: Platform) {
    if(platform.is('cordova')){
      this.audioType = 'native';
    }
  }

  preloadComplex(id, asset, volume, voices, delay){
    if(this.audioType === 'html5'){

      let audio = {
        id: id,
        asset: asset,
        volume: volume,
        voices: voices,
        delay: delay,
        type: 'html5'
    };

    this.sounds.push(audio);
    this.nativeAudio.stop(id);

    }else{
      this.nativeAudio.preloadComplex(id, asset, 0.5, 1, 0);
      this.nativeAudio.stop(id);
 
      let audio = {
          id: id,
          asset: asset,
          volume,
          voices,
          delay,
          type: 'native'
      };

      this.sounds.push(audio);
    }
  }

  play(id){
    let audio = this.sounds.find((sound) => {
      return sound.id === id;
    });

    if(audio.type === 'html5'){
      let audioAsset = new Audio(audio.asset);
            audioAsset.play();
    }else{
        this.nativeAudio.play(audio.id).then((res) => {
          console.log(res);
          }, (err) => {
          console.log(err);
          });

    }
  }

  pause(id){
    let audio = this.sounds.find((sound) => {
      return sound.id === id;
    });

    if(audio.type === 'html5'){
      let audioAsset = new Audio(audio.asset);
            audioAsset.pause();
    }else{
      this.nativeAudio.stop(audio.id).then((res) => {
        console.log(res);
        }, (err) => {
        console.log(err);
        });

    }
  }

}
