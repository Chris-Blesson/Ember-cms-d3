import Component from '@glimmer/component';
import { onKey, keyResponder } from 'ember-keyboard';
import { tracked } from '@glimmer/tracking';

@keyResponder
export default class KeyboardPressComponent extends Component {
    @tracked keyboardActivated = true;
    
    @onKey('KeyJ')
    moveDownHandler() {
        this.args.moveDown();
    }

    @onKey('KeyK')
    moveUpHandler() {
        this.args.moveUp();
    }

    @onKey('Enter')
    enterHandler(){
        this.args.enter();
    }



}



