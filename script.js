//your JS code here. If required.
function removeSelectedColor() {
            // Get the select element
    var colorSelect = document.getElementById('colorSelect');
            
            // Get the selected option
    var selectedOption = colorSelect.options[colorSelect.selectedIndex];
            
            // Remove the selected option
    colorSelect.remove(colorSelect.selectedIndex);
}
