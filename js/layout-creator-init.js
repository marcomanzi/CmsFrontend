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
        '<img src="img/default_img.jpg" width="50" height="50">');
    make_draggable($("#title_btn"),
        '<h2>Title</h2>');
});

