import Controller from '@ember/controller';
import EKMixin from 'ember-keyboard';
import { onKey, keyResponder } from 'ember-keyboard';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { later } from '@ember/runloop';

@keyResponder
export default class DashboardController extends Controller.extend(EKMixin) {
    @tracked isLoading = true;
    @tracked keyboardActivated = true;

    @onKey('KeyR')
    reloadPosts() {
        this.isLoading = true;
        later(() => {
            this.isLoading = false;
        }, 2000);

    }


    @action
    activateKeyboard() {
        this.keyboardActivated = true;
    }

    @action
    deactivateKeyboard() {
        this.keyboardActivated = false;
    }

}
