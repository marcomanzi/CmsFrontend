var row_c = "row-container";
var els_c = "els-container";
var grid_container = "container";
var div = "<div></div>";

function create_row (cols_widths) {
    $('#page').append(create_row_container(cols_widths));
}

function create_row_container (cols_widths) {
    var row = $(div);
    row.addClass(row_c).addClass(els_c);
    row.append(create_row_options());
    row.append(create_row_columns(cols_widths));
//    var inner_row_container = $(div);
//    inner_row_container.addClass(grid_row).addClass(grid_container);
//    row.append(inner_row_container);
    return row;
}

function create_row_options () {
    var row_options_c = "col-md pull-right btn btn-default btn-xs pull-right";
    var remove_row_c = "btn-danger";
    var icon_css = "glyphicon";
    var options_container_c = "options"

    function create_row_option_button (text, icon_type, css) {
        var button = $("<button>" + text + "</button>").addClass(row_options_c).addClass(css);
        var icon = $("<span></span>").addClass(icon_css).addClass(icon_css + "-" + icon_type);
        return button.append(icon);
    }

    var row_options = $(div).addClass(grid_container).addClass(options_container_c);
    row_options.append(create_row_option_button("", "remove", remove_row_c));
    row_options.append(create_row_option_button("Drag  ", "move", ""));
    return row_options;
}

function create_row_columns(cols_widths) {
    var col_c = "column-container";
    var grid_width_prefix = "col-xs-";
    var grid_row = "row";

    function create_grid_column(n_col) {
        var column_grid = $(div).addClass(grid_width_prefix + n_col);
        var int_column = $(div).addClass(col_c).addClass(els_c);
        return column_grid.append(int_column);
    }

    var columns = $(div).addClass(grid_row).addClass(grid_container);
    for (width in cols_widths) {
        columns.append(create_grid_column(width));
    }
    return columns;
}


//<div class="row-container  els-container">
//    <div class="row container">
//        <div class="col-xs-4">
//            <div class="column-container els-container">
//
//            </div>
//        </div>
//        <div class="col-xs-4">
//            <div class="column-container els-container">
//
//            </div>
//        </div>
//        <div class="col-xs-4">
//            <div class="column-container els-container">
//            </div>
//        </div>
//    </div>
//</div>