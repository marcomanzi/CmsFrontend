

function add_html_element_to_palette(title, element) {
    function html_element_title(title) {
        var el =  $("<div></div>").addClass("col-sm-offset-1");
        return el.html(title);
    }

    function drag_button(title) {
        return $("<div></div>").html("Drag  ").addClass("btn btn-default btn-xs pull-right").
            attr("id", title + "_btn").attr("type", "button").
            append($('<span class="glyphicon glyphicon-move"></span>'));
    }

    function html_container(title) {
        var container = $("<div></div>").addClass("row container");
        var titleWithDrag = html_element_title(title);
        titleWithDrag.append(drag_button(title));
        container.append(titleWithDrag);
        return container;
    }

    $("#palette").append(html_container(title));
    make_draggable($("#" + title+ "_btn"), element);
}

function init_grid_row_element() {
    $("#col_widths").val("4,4,4");
    var row_in_creation;
    var widths;
    $("#create_grid_row_btn").mouseenter(function () {
        widths = $("#col_widths").val().split(",");
        row_in_creation = create_row_container(widths);
    });
    $("#create_grid_row_btn").draggable({
        cursor: "move",
        cursorAt: { top: 56, left:56 },
        helper: function(event) {
            return $(row_in_creation);
        }
    });
}

function init_palette_of_html_element() {
    init_grid_row_element();
    add_html_element_to_palette("Title", '<h2 class="element">Title</h2>');
    add_html_element_to_palette("Image", '<div class="element"><img src="img/default_img.jpg" width="50" height="50"></div>');
    add_html_element_to_palette("Paragraph", '<p class="element">This is a paragraph with some words, it will be replaced by latinorum</p>');
}