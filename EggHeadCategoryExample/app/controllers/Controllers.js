/**
 * Created by patdass1 on 1/6/2015.
 */
var app = angular.module('Eggly');

app.controller('MainCtrl', function ($scope) {
    $scope.categories = [
        {"id": 0, "name": "Development"},
        {"id": 1, "name": "Design"},
        {"id": 2, "name": "Exercise"},
        {"id": 3, "name": "Humor"}
    ];

    $scope.bookmarks = [
        {"id": 0, "title": "AngularJS", "url": "http://angularjs.org", "category": "Development" },
        {"id": 1, "title": "Egghead.io", "url": "http://angularjs.org", "category": "Development" },
        {"id": 2, "title": "A List Apart", "url": "http://alistapart.com/", "category": "Design" },
        {"id": 3, "title": "One Page Love", "url": "http://onepagelove.com/", "category": "Design" },
        {"id": 4, "title": "MobilityWOD", "url": "http://www.mobilitywod.com/", "category": "Exercise" },
        {"id": 5, "title": "Robb Wolf", "url": "http://robbwolf.com/", "category": "Exercise" },
        {"id": 6, "title": "Senor Gif", "url": "http://memebase.cheezburger.com/senorgif", "category": "Humor" },
        {"id": 7, "title": "Wimp", "url": "http://wimp.com", "category": "Humor" },
        {"id": 8, "title": "Dump", "url": "http://dump.com", "category": "Humor" }
    ];

    $scope.currentCategory = null;
    $scope.isCreating = false;
    $scope.isEditing = false;

    function setCurrentCategory (category) {
        $scope.currentCategory = category;

        cancelCreate();
        cancelEdit();
    };

    function isCategory(category) {
        return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
    }
    $scope.setCurrentCategory = setCurrentCategory;
    $scope.isCategory = isCategory;

    //CREATE AND EDIT
    function cancelCreate() {
        $scope.isCreating = false;
    };
    function cancelEdit() {
        $scope.isEditing = false;
    };

    function setEditingBookmark (bookmark) {
        $scope.currentBookmarkToEdit = angular.copy(bookmark);
        console.log("setEditingBookmark");
    };

    $scope.setEditingBookmark = setEditingBookmark;
    function startEditing(bookmark) {
        $scope.isEditing = true;
        $scope.isCreating = false;
        console.log("startEditing");
    };
    function startCreating() {
        $scope.isCreating = true;
        $scope.isEditing = false;

        resetCreateForm();
    };
    function deleteBookmark(bookmark) {
        _.pull($scope.bookmarks, bookmark);
    };
    function isCurrentBookmark(bookmarkId) {
        return $scope.currentBookmarkToEdit !== undefined && $scope.currentBookmarkToEdit.id === bookmarkId;
    };
    $scope.isCurrentBookmark = isCurrentBookmark;
    $scope.deleteBookmark = deleteBookmark;
    function shouldShowCreating() {
        return $scope.currentCategory !== null && $scope.isEditing === false;
    };
    function shouldShowEditing() {
        return $scope.isEditing === true && $scope.isCreating === false;
    };
    function createBookmark(bookmark) {
        bookmark.id = $scope.bookmarks.length;
        $scope.bookmarks.push(bookmark);

        resetCreateForm();
    };
    function resetCreateForm() {
        $scope.newBookmark = {
            title: '',
            url: '',
            category: $scope.currentCategory
        };
    };
    function editBookmark(bookmark) {
        var bkmark;
        var i;
        var bookmarks = $scope.bookmarks;
        for(i = 0; i < bookmarks.length; i++) {
            bkmark = bookmarks[i];
            if (bkmark.id === $scope.currentBookmarkToEdit.id) {
                $scope.bookmarks[i] = bookmark;
                break;
            }
        }
        cancelEdit();
        resetEditForm();
    };
    function resetEditForm () {
      $scope.currentBookmarkToEdit = null;
    };
    $scope.createBookmark = createBookmark;
    $scope.cancelCreate = cancelCreate;
    $scope.cancelEdit = cancelEdit;
    $scope.startEditing = startEditing;
    $scope.startCreating = startCreating;
    $scope.shouldShowCreating = shouldShowCreating;
    $scope.shouldShowEditing = shouldShowEditing;
    $scope.editBookmark = editBookmark;
});