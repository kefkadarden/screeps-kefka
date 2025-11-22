// Basic ErrorMapper using source maps to improve stack traces
export class ErrorMapper {
  public static wrapLoop(loop: () => void): () => void {
    return () => {
      try {
        loop();
      } catch (e) {
        if (e instanceof Error) {
          console.error('Error caught in main loop:', e.stack || e.message);
        } else {
          console.error('Unknown error', e);
        }
      }
    };
  }
}
