export class DebugController {
  public static devMode = process.env.NODE_ENV === "DEV";
  public static log(...args: any[]): void {
    if (DebugController.devMode) {
      console.log(...args);
    }
  }
}
