//--|🠊 Menu_buttons.ts 🠈|--//

export function showSize(pageName: string) {
  const selectSize = document.querySelector(
    `#${pageName}-header .buttons-menu li[class*="size"] select`
  ) as HTMLSelectElement;

  const mainSlider = document.querySelector(`#${pageName}-main section[class*="buttons"]`) as HTMLElement;

  const prevElement = mainSlider.querySelector('.visible') as HTMLElement;
  if (!selectSize || !mainSlider || !prevElement) return;

  const newClass = selectSize.value;
  const newElement = mainSlider.querySelector(`.${newClass}`) as HTMLElement;
  if (!newElement || newElement === prevElement) return;

  // 1. Prepare new element immediately for its entrance
  newElement.style.transition = 'none'; // Temporarily disable SASS transitions
  newElement.classList.add('hidden'); // Ensure it's in its hidden state
  newElement.classList.remove('visible'); // Remove active 'visible' state if it has it
  newElement.classList.remove('animate-bloom-settle'); // Reset animation class

  // 2. Initiate old element's satisfying departure
  prevElement.classList.remove('visible');
  prevElement.classList.add('hidden'); // Triggers its quick blur/fade-out

  // 3. Orchestrate the sequence with a focus on immediate feedback & smooth flow
  const style = getComputedStyle(prevElement);
  const transitionDurationMs = parseFloat(style.getPropertyValue('--transition-duration')) * 1000;
  const sliderMoveDurationMs = 500; // Slightly faster slider move for snappiness

  // Trigger slider movement almost immediately (after the old element begins its fade)
  // The slider's bounce provides immediate visual feedback for the user's action
  mainSlider.style.transition = `transform ${sliderMoveDurationMs / 1000}s cubic-bezier(0.175, 0.885, 0.32, 1.275)`; // A strong, satisfying bounce
  const index = Array.from(mainSlider.children).indexOf(newElement);
  mainSlider.style.transform = `translateY(-${mainSlider.offsetHeight * index}px)`;

  // Delay for the new element's "bloom and settle" to ensure it feels responsive
  // This timing is crucial for enjoyment: not too long, not too short.
  // It provides a 'reveal' sensation.
  const revealDelayMs = transitionDurationMs * 0.2; // Start new element very early (20% through old element's fade)

  setTimeout(() => {
    // Ensure old element is out of the way for performance/visual clarity
    // No need to hide display: none if our blur/opacity is fast enough
    // prevElement.style.display = 'none';

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        // Double rAF for impeccable timing
        newElement.style.transition = ''; // Re-enable SASS transitions
        newElement.classList.add('visible'); // Apply visible state
        newElement.classList.remove('hidden'); // Remove hidden state
        newElement.classList.add('animate-bloom-settle'); // Trigger the new "bloom and settle" animation!

        // Optional: Restore old element display if needed later
        // prevElement.style.display = '';
      });
    });
  }, revealDelayMs);
}
