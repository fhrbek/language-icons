/**
 * These are the approximate character widths in pixels
 * of glyphs in Arial, 64px, calculated by going to an
 * about:blank page and writing this in the console:
 * document.body.style = "font-family: Arial; font-size: 64px; margin: 30px"; "QWERTYUIOPASDFGHJKLZXCVBNM".split("").forEach(key => { document.body.innerHTML = ""; document.body.innerHTML = `<span>${key}</span>`; console.log(key, document.querySelector("span").offsetWidth); });
 */
export declare const widths: {
    Q: number;
    W: number;
    E: number;
    R: number;
    T: number;
    Y: number;
    U: number;
    I: number;
    O: number;
    P: number;
    A: number;
    S: number;
    D: number;
    F: number;
    G: number;
    H: number;
    J: number;
    K: number;
    L: number;
    Z: number;
    X: number;
    C: number;
    V: number;
    B: number;
    N: number;
    M: number;
};
