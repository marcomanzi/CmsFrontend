

$("document").ready(function () {

    function make_droppable(element) {
        $(element).droppable({
            hoverClass: "drop-area",
            drop: function (event, ui) {
                drop_element(event, ui, this);
            }
        });
    }

    function make_draggable(element) {
        $(element).draggable({
            cursor: "move",
            cursorAt: { center: 0 },
            helper: function(event) {
                return $('<img src="img/default_img.jpg" width="50" height="50">');
            }
        });
    }

    function create_drop_zone() {
        var dropZone = $('<div class="dropZone"></div>')
        make_droppable(dropZone);
        return dropZone;
    }

    function drop_element (event, ui, dropZone) {
        var dragged = $(ui.helper).clone(false)
            .removeClass('ui-draggable-dragging')
            .css({position:'absolute', left:0, top:ui.offset.top - 12});
        dragged.attr("style", "");
        $(dropZone).after(create_drop_zone());
        $(dropZone).after(dragged);
    }

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


    make_draggable($("#create_image_btn"));
    make_droppable($(".dropZone"));
});

