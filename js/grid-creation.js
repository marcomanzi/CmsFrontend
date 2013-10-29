var row_c = "row-container";
var els_c = "els-container";
var grid_container = "container";
var div = "<div></div>";

function create_row_container (cols_widths) {
    var row = $(div);
    row.width($('#page').width() - 100)
    row.addClass(row_c).addClass(els_c);
    row.append(create_row_options());
    row.append(create_row_columns(cols_widths));
    return row;
}

function create_row_options () {
    var row_options_c = "col-md pull-right btn btn-default btn-xs pull-right";
    var remove_row_c = "btn-danger";
    var icon_css = "glyphicon";
    var options_container_c = "options"

    function create_row_option_button (text, icon_type, css) {
        var button = $("<button>" + text + "</button>").addClass(row_options_c).addClass(css);
        var icon = $("<span class='" + icon_type + "'></span>").addClass(icon_css)
            .addClass(icon_css + "-" + icon_type);
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
        var column_internal = $(div).addClass(col_c).addClass(els_c);
        column_internal.append(create_inside_column_drop_zone());
        return column_grid.append(column_internal);
    }

    var columns = $(div).addClass(grid_row).addClass(grid_container);
    for (width in cols_widths) {
        columns.append(create_grid_column(cols_widths[width]));
    }
    return columns;
}
