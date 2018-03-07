/* onmouseover */
function gridHover(x,y) {
  /* alert('hover on ' + x + ',' + y); /* verfied works */ 
  $.ajax({url: "/hover/"+x+"/"+y }); /* , data: { action: 'hover'; x: x; y: y; }, success: function(return) { alert(return); } }); /* */
}

/* oncontextmenu - right click */
function gridAlt(x,y) {
  /* alert('right client on ' + x + ',' + y); /* verified works */
  $.ajax({url: "/alt/"+x+"/"+y });
}

/* onclick - left click */
function gridSelect(x,y) {
  /* alert('left client on ' + x + ',' + y); /* verified works */
  $.ajax({url: "/select/"+x+"/"+y });
}

/* double click */
function gridRun(x,y) {
  /* alert('double click - run ' + x + ',' + y); */
  $.ajax({url: "/run/"+x+"/"+y });
}
