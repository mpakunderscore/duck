//view controller

import {sound} from './utils/sound';

import {sendSound} from './client';

import {play} from './../index';

import {main} from './../index';

import {Alert} from 'react-native';

import {map} from './map';

import {menu} from './menu';

export const selfClick = () => {

    sendSound();

    playSound();
};

export const selectClick = (id) => {

    // Alert.alert('selectClick')

    menu.image(id);

    play();
}

export const mainMenu = () => {

    // Alert.alert('selectClick')

    main();
};

export const menuClick = () => {

    // Alert.alert('selectClick')

    // Alert.alert('Menu')

    menu.modal(true)
};

export const closeModal = () => {
    menu.modal(false)
};

export function itemsClick() {

    // Alert.alert('selectClick')

    // Alert.alert('Items')
}

export const alert = () => {

    Alert.alert('Alert')
};

export function playSound() {

    // Play the sound with an onEnd callback
    sound.play((success) => {

        // if (success) {
        // Alert.alert('success');
        // console.log('successfully finished playing');
        // } else {
        // Alert.alert('error');
        // console.log('playback failed due to audio decoding errors');
        // }
    });
}

// export function moveOut(x) {
//     map.moveOut(x);
// }
//
// export function moveIn() {
//     map.moveIn();
// }

export function zoom(y) {

    let bias = 0;

    // Alert.alert(y + '')

    if (y > 0)
        bias = 1.05;

    else
        bias = 0.95;

    map.zoom(bias)
}



