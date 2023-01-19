//Select all the Lightroom elements you want to paginate
var items = $('.lightroom-element');
//Determine the number of items per page
var itemsPerPage = 3;
//Calculate the number of pages required
var numberOfPages = Math.ceil(items.length / itemsPerPage);
//Create a container for the pagination links
var paginationContainer = $('<div class="pagination"></div>');
//Loop through the number of pages required
for (var i = 0; i < numberOfPages; i++) {
    //Create a link for each page
    var pageLink = $('<a class="all-images_pagination-link" href="#"></a>');
    pageLink.text(i + 1);
    paginationContainer.append(pageLink);
    //Add active class to the first page link
paginationContainer.find('a:first').addClass('active');
}
//Add the pagination container to the page
$('.all-images_pagination').append(paginationContainer);

//Hide all items except for the first page
items.hide();
items.slice(0, itemsPerPage).show();

//Add a click event to the pagination links
paginationContainer.on('click', 'a', function(e) {
    e.preventDefault();
    var page = $(this).text();
    //Remove the active class from all links
    paginationContainer.find('a').removeClass('active');
    //Add the active class to the clicked link
    $(this).addClass('active');
    //Calculate the start and end index of the items to show
    var startIndex = (page - 1) * itemsPerPage;
    var endIndex = startIndex + itemsPerPage;
    //Hide all items
    items.hide();
    //Show the items for the current page
    items.slice(startIndex, endIndex).show();
    
});
