const title = document.title;

window.onfocus = function() {
    document.title = "Portfolio de Brayan";
};

window.onblur = function() {
    document.title = "Revenez, vous me manquez!";
};