import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { computed } from '@ember/object';
import { sort, map } from '@ember/object/computed';
import groupBy from 'ember-group-by';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class PostsIndexController extends Controller {
    @tracked queryParams = ['selectedAuthor', 'selectedCategory', 'selectedPost'];
    @tracked selectedAuthor = null
    @tracked selectedCategory = null;
    @tracked selectedPost = null;
    @tracked activeSortBy = 'date:desc';
    @tracked currentNavigatedPostIndex = 0;

    @tracked currentAuthor = null;
    @tracked currentCategory = null;
    @tracked currentPost = null;

   

    get authors(){
        return this.authorData;
    }
    get categories(){
        return this.categoryData;
    }

    get comments(){
        return this.commentsData
    }
    @service router;

    @computed('activeSortBy')
    get postsSorting() {
        return [this.activeSortBy];
    }

    get navigatedPost() {
        return this.posts[this.currentNavigatedPostIndex];
    }

    @sort('model', 'postsSorting') sortedPosts;

    @computed('sortedPosts.[]', 'selectedAuthor', 'selectedCategory', 'selectedPost')
    get posts() {
        let selectedAuthor = this.selectedAuthor;
        let selectedCategory = this.selectedCategory;
        let selectedPost = this.selectedPost;

        console.log("here");

        return this.sortedPosts
            .filter(post => selectedAuthor ? post.get('author') === selectedAuthor : true)
            .filter(post => selectedCategory ? post.get('category') === selectedCategory : true)
            .filter(post => selectedPost ? post.get('title') === selectedPost : true);
    }

    @groupBy('posts', 'author') postsByAuthor;



    @map('postsByAuthor', function (group) {
        return {
            label: group.value,
            count: group.items.length
        };
    }) authorData;

    @groupBy('posts', 'category') postsByCategory;

    @map('postsByCategory', function (group) {
        return {
            label: group.value,
            count: group.items.length
        };
    }) categoryData;

    @map('posts', function (post) {
        return {
            label: post.get('title'),
            count: post.get('commentsCount')
        };
    }) commentsData;

    @action
    openPost(post) {
        if (post) {
            this.router.transitionTo('posts.post', post);
        }
    }

    @action
    sort(field, event) {
        if (field === this.activeSortBy) {
            this.activeSortBy = `${field}:desc`;
        } else {
            this.activeSortBy = field;
        }
        event.preventDefault();
    }

    @action
    clickHandler(property,selectedItem){
        this[property] = selectedItem;
    }

    // @action
    // toggleBar(property, label) {
    //     let newValue = this.get(property) === label ? null : label;
    //     this.set(property, newValue);
    // }

    moveDown = () => {
        if (this.currentNavigatedPostIndex + 1 < this.posts.length) {
            this.currentNavigatedPostIndex += 1;
        }
        else {
            this.currentNavigatedPostIndex = 0;
        }
    }

    moveUp = () => {
        if (this.currentNavigatedPostIndex - 1 >= 0) {
            this.currentNavigatedPostIndex -= 1;
        }
        else {
            this.currentNavigatedPostIndex = this.posts.length - 1;
        }
    }

    enter = () => {
        this.router.transitionTo('posts.post', this.currentNavigatedPostIndex + 1);
    }

}
