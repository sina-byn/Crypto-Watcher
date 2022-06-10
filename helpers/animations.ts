export const moveInOut = (identifier: string): void => {
    const elem = document.querySelector(identifier) as HTMLElement;

    setTimeout(() => {
        elem.classList.toggle("move-in");
    }, 1);
};