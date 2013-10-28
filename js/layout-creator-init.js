$("document").ready(function () {
    $("#create_grid_row_btn").click(function () {
        var cols_width_array = $("#cols_widths").val().split(",");
        $("#cols_widths").slider();
        for (var w in cols_width_array) {
            alert(cols_width_array[w]);
        }
//        create_row($("#cols_widths").val().split(","));
    });

});