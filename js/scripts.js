function Task(name, duration, difficulty, numberofpeople) {
    this.name = name;
    this.duration = duration;
    this.difficulty = difficulty;
    this.numberofpeople = numberofpeople;
}


// User Interface Logic
$(document).ready(function() {
    $("form#task").submit(function(event) {
        event.preventDefault();
        var inputtedTaskName = $("input#task").val();
        var inputtedTaskDuration = $("input#duration").val();
        var inputtedTaskDifficulty = $("input#difficulty").val();
        var inputtedNumber = $("input#people").val();

        var newTask = new Task(inputtedTaskName, inputtedTaskDuration, inputtedTaskDifficulty, inputtedNumber);

        $('.ticktasks').append('<li>' + inputtedTaskName + '<input type="checkbox" name="myCheckbox">' + '</li>');
        $("#task").fadeOut();
        $(".all-tasks").fadeIn();

    });
    $("button#new-task").click(function() {
        $("form#task").fadeIn();
    });
});
