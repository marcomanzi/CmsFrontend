$("document").ready(function () {
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

    make_droppable($(".dropZone"));
    make_draggable($("#create_image_btn"),
        '<div class="element"><img src="img/default_img.jpg" width="50" height="50"></div>');
    make_draggable($("#title_btn"),
        '<h2 class="element">Title</h2>');


    $('.work-space').contextMenu({
        selector: '.element',
        trigger: 'left',
        items: {
            "position": {
                "name": "Position",
                "items": {
                    "Right": { "name": "Right", callback: pull_right},
                    "Center": {"name": "Center", callback: center},
                    "Left": {"name": "Left", callback: pull_left}
                }
            },
            "remove": {
                name: "Remove",
                icon: "page_white_delete",
                callback: remove_element
            }
        }
    });

});

