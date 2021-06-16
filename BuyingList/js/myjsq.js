function addTask() {
  
    let task = $('#task').val();
    if (!task)
        return;

    const text = "<li class='task'>" + task + "</li>"
   
    $('#list').append(text);

  
    $('#task').val('');
}


$(function () {
    $('#add').on('click', addTask);

   
    $('#list').on('click', function (event) {
        var target = $(event.target);
        target.toggleClass('done');
    })

});