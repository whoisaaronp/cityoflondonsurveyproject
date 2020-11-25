(_ => {
    let q_input = document.querySelectorAll('.question');
    let q_text = document.querySelectorAll('.response');
    let hoverElements = document.querySelectorAll('.preLockDown');
    let tooltips = document.querySelectorAll('.tooltip');

    // update scale value, with % unit if needed
    q_input.forEach((q, i) => {
        q.addEventListener('change', _ => {
            q_text[i].innerHTML = q.value + (q_text[i].classList.contains('notPercent') ? "" : "%");
        });
    });

    // update tooltip position
    hoverElements.forEach((hoveredElem, i) => {
        hoveredElem.addEventListener('mouseover', e => {
            tooltips[i].style.left = e.clientX + "px";
            tooltips[i].style.top = (e.clientY - e.target.getBoundingClientRect()) + "px";
        });
    });
})();