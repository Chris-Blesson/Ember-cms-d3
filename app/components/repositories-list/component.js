import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import fetch from 'fetch';
export default class RepositoriesListComponent extends Component {
    @tracked items = [];

    @action
    didRender() {
        fetch('https://api.github.com/search/repositories?q=user:Chris-Blesson')
            .then(response => response.json())
            .then(data => {
                this.items = data.items;
            });
    }

    get repoList() {
        return this.items;
    }
}
