const magneto = document.querySelector('.magneto');
const magnetoText = document.querySelector('.magneto .text');
const debggr = document.querySelector('#debugger');

// Mouse Move event
const activateMagneto = (e) => {
    let boundBox = magneto.getBoundingClientRect();
    let magnetoStrength = 40;
    let magnetoTextStrength = 80;
    let newX = ((e.clientX - boundBox.left) / magneto.offsetWidth) - 0.5;
    let newY = ((e.clientY - boundBox.top) / magneto.offsetHeight) - 0.5;


    // Cursor X: Gets the horizontal position of the cursor
    // Box Left: Gets the horizontal distance of the box from the left of the screen
    // Cursor Inside Button: Substracts the box left from the cursor X to get the horizontal distance of the cursor from the left of the box
    // Relative to Total Width: Divides the cursor inside button by the total width of the box to get the relative horizontal position of the cursor inside the box
    // Shifted: Substracts 0.5 from the relative to total width to get the relative horizontal position of the cursor inside the box with the center as the origin

    debggr.innerHTML = `cursorX: ${e.clientX}
        <br>boxLeft: ${Math.ceil(boundBox.left)}
        <br>cursorInsideButton: ${Math.ceil(e.clientX - boundBox.left)}
        <br>relativeToTotalWidth: ${((e.clientX - boundBox.left) / magneto.offsetWidth).toFixed(2)}
        <br>shifted: ${((e.clientX - boundBox.left) / magneto.offsetWidth - 0.5).toFixed(2)}`;

    // Move button to new position
    gsap.to(magneto, {
        duration: 1,
        x: newX * magnetoStrength,
        y: newY * magnetoStrength,
        ease: Power4.easeOut
    })

    // Move button text to new position
    gsap.to(magnetoText, {
        duration: 1,
        x: newX * magnetoTextStrength,
        y: newY * magnetoTextStrength,
        ease: Power4.easeOut
    })
}

// Mouse Leave event
const resetMagneto = (e) => {

    // Move button to original position
    gsap.to(magneto, {
        duration: 1,
        x: 0,
        y: 0,
        ease: Elastic.easeOut
    })

    // Move button text to original position
    gsap.to(magnetoText, {
        duration: 1,
        x: 0,
        y: 0,
        ease: Elastic.easeOut
    })
}

// Add Event Listeners
magneto.addEventListener('mousemove', activateMagneto);
magneto.addEventListener('mouseleave', resetMagneto);

console.log(magnetoText);