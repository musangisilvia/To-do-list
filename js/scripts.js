function Task(name, duration, difficulty, numberofpeople) {
    this.taskName = name;
    this.taskDuration = duration;
    this.taskDifficulty = difficulty;
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

        $("ul#tasks").append("<li><span class='tasks'>" + newTask.taskName + "</span></li>");

        $("#task").hide();
        $(".all-tasks h1").show();

    });
});
