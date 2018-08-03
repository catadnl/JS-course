// var commentList = [
//     {
//         "content": "Don't be too proud of this technological terror you've constructed. The ability to destroy a planet is insignificant next to the power of the Force. The plans you refer to will soon be back in our hands. A tremor in the Force. The last time I felt it was in the presence of my old master. Escape is not his plan. I must face him. Alone.",
//         "date": new Date("2016-11-19"),
//         "ownerClassName": "user-4",
//         "title": "I find your lack of faith disturbing"
//     },
//     {
//         "content": "Ha, didn't even stay for the wedding. Just took his million space bucks and ran. And you will not call me 'you'. You will never address me as 'you'. You will call me 'your royal highness'.  I really must go back. I shouldn't have runaway. I realize now that love is one luxury a  princess cannot afford.",
//         "date": new Date("2016-11-18"),
//         "ownerClassName": "user-6",
//         "title": "I ain't shooting this thing, I hate guns."
//     },
//     {
//         "content": "We're done with you. Go back to the golf course and work on your putz. Nah, he got the upside, I got the downside. See there is two sides to every Schwartz. What's the matter with this thing, what's all that churnning and bubbling,  you call that radar screen? Ah, planet Druidia. And under that air shield, ten thousand years of fresh air. We must get through that air shield! Say goodbye to your two best friends, and I don't mean your pals in the Winnebago. So, Lone Star, now you see that evil will always triumph because good is dumb.",
//         "date": new Date("2016-11-17"),
//         "ownerClassName": "user-3",
//         "title": "I find your lack of faith disturbing"
//     },
//     {
//         "content": "aaaa",
//         "date": new Date("2017-10-07"),
//         "ownerClassName": "guest",
//         "title": "asdas"
//     },
//     {
//         "content": "True Content",
//         "date": new Date("2017-10-06"),
//         "ownerClassName": "guest",
//         "title": "Title"
//     }
// ];


(function ($, document) {

    $(document).ready(onDocumentReady);

    function onDocumentReady() {

        var commentList;

        init();

        function init() {
            commentList = [];
            initEventListeners();
            getCommentsFromServer()
                .then(function (mappedComments) {
                    commentList = mappedComments;
                    renderCommentList(commentList);
                });
        }

        function initEventListeners() {
            var postCommentButton = $('.post-button');
            postCommentButton.click(onClickPostButton);
        }

        function onClickPostButton() {
            var title = $('.comment-title-input');
            var titleValue = title.val();
            var content = $('.comment-content-input');
            var contentValue = content.val();

            if (titleValue && contentValue) {
                var newCommentModel = {
                    content: contentValue,
                    title: titleValue,
                    ownerClassName: 'guest',
                    date: new Date()
                };

                saveCommentToServer(newCommentModel)
                    .then(function () {
                        commentList.push(newCommentModel);
                        renderCommentList(commentList);
                        $('.comment-title-input').val('');
                        $('.comment-content-input').val('');
                    })
            }
        }

        function saveCommentToServer(commentModel) {
            return $.ajax({
                url: 'https://js-course-2.firebaseio.com/comments.json',
                type: 'POST',
                data: JSON.stringify(commentModel)
            })
                .fail(function (error) {
                    console.error('POST call for comment model failed with cause', error);
                });
        }

        function getCommentsFromServer() {
            return $.ajax({
                url: 'https://js-course-2.firebaseio.com/comments.json',
                type: 'GET'
            })
                .then(function (responseFromServer) {
                    return Object.keys(responseFromServer).map(function (commentKey) {
                        var comment = responseFromServer[commentKey];
                        comment['date'] = new Date(comment['date']);
                        return comment;
                    })
                })
                .fail(function (error) {
                    console.error('GET call for comment models failed with cause', error);
                })
        }

        function renderCommentList(commentList) {
            var commentListItems = commentList
                .sort(function (comment1, comment2) {
                    return comment1.date > comment2.date ? -1 : 1;
                })
                .map(getCommentListItem);

            var commentUnsortedList = $('.timeline');
            commentUnsortedList.empty();

            commentUnsortedList.append(commentListItems);

            var firstListItemRadioInput = $('.timeline > li:first-child > input[type=radio]');
            firstListItemRadioInput.attr('checked', true);
        }

        function getCommentListItem(commentModel) {

            var commentListItem = $('<li></li>');
            commentListItem.addClass('event');

            var nameRadioInput = $('<input>');
            nameRadioInput.attr('type', 'radio');
            nameRadioInput.attr('name', 'tl-group');
            commentListItem.append(nameRadioInput);

            var commentLabel = $('<label></label>');
            commentListItem.append(commentLabel);

            var thumbDiv = $('<div></div>');
            thumbDiv.addClass('thumb');
            thumbDiv.addClass(commentModel.ownerClassName);
            var dateSpan = $('<span></span>');
            dateSpan.text(commentModel.date.toDateString().substring(3, 10));
            thumbDiv.append(dateSpan);
            commentListItem.append(thumbDiv);

            var contentPerspectiveDiv = $('<div></div>');
            contentPerspectiveDiv.addClass('content-perspective');
            var contentDiv = $('<div></div>');
            contentDiv.addClass('content');
            var contentInnerDiv = $('<div></div>');
            contentInnerDiv.addClass('content-inner');
            var commentHeader = $('<h3></h3>');
            commentHeader.text(commentModel.title);
            var commentParagraph = $('<p></p>');
            commentParagraph.text(commentModel.content);
            contentInnerDiv.append([commentHeader, commentParagraph]);
            contentDiv.append(contentInnerDiv);
            contentPerspectiveDiv.append(contentDiv);
            commentListItem.append(contentPerspectiveDiv);

            return commentListItem;

        }
    }

})($, window.document);
