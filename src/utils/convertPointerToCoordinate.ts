export function convertPointerToCoordinate(
  event: MouseEvent | TouchEvent,
  domElement: HTMLCanvasElement
) {
  const viewportWidth = window.visualViewport
    ? window.visualViewport.width
    : window.innerWidth;
  const SIDEBAR_WIDTH = viewportWidth < 620 ? 0 : 290;

  const clientX =
    event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
  const clientY =
    event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;

  const x =
    ((clientX - SIDEBAR_WIDTH) / domElement.parentElement.clientWidth) * 2 - 1;
  const y = -(clientY / domElement.parentElement.clientHeight) * 2 + 1;

  return { x, y };
}
