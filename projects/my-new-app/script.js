(function (document) {

    var namesState = ['Andrei', 'Gica', 'Ion'];

    renderNameList(namesState);

    addEventListeners();

    function renderNameList(names) {
        var nameListElements = names
            .map(getNameListElement);

        function getNameListElement(name) {
            var nameListElement = document.createElement('li');
            var textNode = document.createTextNode(name);
            nameListElement.appendChild(textNode);

            return nameListElement;
        }

        var documentFragment = document.createDocumentFragment();
        nameListElements.forEach(function (nameListElement) {
            documentFragment.appendChild(nameListElement);
        });


        var namesUnorderedListElement = document.getElementsByClassName('names-list')[0];
        namesUnorderedListElement.innerHTML = '';

        if (namesUnorderedListElement) {
            namesUnorderedListElement.appendChild(documentFragment);
        }
    }

    function addEventListeners() {
        var addButton = document.getElementsByClassName('add-button')[0];
        addButton.addEventListener('click', onAddButtonClick);

        function onAddButtonClick() {
            var nameInput = document.getElementsByClassName('name-input')[0];
            var newName = nameInput.value;

            if (newName && newName.trim()) {
                namesState.push(newName);
                renderNameList(namesState);
                nameInput.value = '';
            }
        }
    }

})(window.document);






// nameInput.addEventListener('focus', function (event) {
//     var element = event.target;
//     element.style.width = '300px';
//     event.preventDefault();
// });
//
// nameInput.addEventListener('blur', function (event) {
//     var element = event.target;
//     element.style.width = 'initial';
//     event.preventDefault();
// });

// document.getElementsByClassName('input')[0].addEventListener('click', function (event) {
//     event.preventDefault();
// });







