(function ($, document) {

    $(document).ready(onDocumentReady);

    function onDocumentReady() {

        var namesState = ['Andrei', 'Gica', 'Ion'];

        addEventListeners();
        renderList(namesState);

        function renderList(names) {
            var nameUnorderedList = $('.name-list');
            nameUnorderedList.empty();

            var nameListItems = names.map(getNameListItem);

            function getNameListItem(name) {
                var listItem = $('<li></li>');
                listItem.text(name);
                return listItem;
            }

            nameUnorderedList.append(nameListItems);
        }

        function addEventListeners() {
            var addButton = $('.add-button');
            addButton.click(onClickAddNameButton);

            function onClickAddNameButton() {
                var nameInput = $('.name-input');
                var nameInputValue = nameInput.val();

                if (nameInputValue && nameInputValue.trim()) {
                    namesState.push(nameInputValue);
                    renderList(namesState);
                    nameInput.val('');
                } else {
                    var existingValidation = $('.validation-fail');
                    if (existingValidation.length === 0) {
                        var validationParagraph = $('<p></p>');
                        validationParagraph.css('color', 'red');
                        validationParagraph.addClass('validation-fail');
                        validationParagraph.text('Nu mai da click ca spartu');

                        nameInput.after(validationParagraph);

                        setTimeout(function () {
                            validationParagraph.remove();
                        }, 1500)
                    }
                }
            }

            var inputName = $('.name-input');
            inputName.focusin(function (event) {
                var input = $(event.target);
                input.css('width', '300px');
            });
            inputName.focusout(function (event) {
                var input = $(event.target);
                input.css('width', 'initial');
            });
        }
    }

})($, document);
