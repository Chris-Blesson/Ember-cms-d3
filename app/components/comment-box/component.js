import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { computed } from '@ember/object';
import { gt } from '@ember/object/computed';
export default class CommentBoxComponent extends Component {
    @tracked comment = null;
    @tracked isExpanded = false;

    @computed('comment.text')
    get words(){
         return this.args.comment.text.split(/\s/);
    }

    @gt('words.length', 24) isLong;


}
