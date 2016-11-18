(function() {
    'use strict';

    angular
        .module('app')
        .controller('PostController', PostController);

    PostController.$inject = [];

    /* @ngInject */
    function PostController() {
        var vm = this;
        vm.posts = [];
        vm.addPost = addPost;

        /////////////////////

        /*function addPost() {
        	vm.posts.push(vm.newPost); */
        vm.sortBy = "priority";

        function addPost() {
            vm.posts.push({
                text: vm.newPost,
                priority: vm.priority

            });

            vm.newPost="";

        };
    }
})()
