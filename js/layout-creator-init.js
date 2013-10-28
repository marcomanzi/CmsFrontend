

$("document").ready(function () {

    $("#col_widths").val("4,4,4");
    var row_in_creation;
    var widths;
    $("#create_grid_row_btn").mouseenter(function () {
        widths = $("#col_widths").val().split(",");
        row_in_creation = create_row_container(widths);
    })
    $("#create_grid_row_btn").draggable({
        cursor: "move",
        cursorAt: { top: 0, left: 0 },
        helper: function(event) {
            return row_in_creation;
        }
    });


    $("#create_image_btn").draggable({
        cursor: "move",
        cursorAt: { top: 0, left: 0 },
        helper: function(event) {
            return $('<img src="img/default_img.jpg" width="50" height="50">');
        }
    });
});

