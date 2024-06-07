class DebugController {
  public devMode = process.env.NODE_ENV === "DEV";
  public log(...args: any[]): void {
    if (this.devMode) {
      console.log(...args);
    }
  }
}

export default new DebugController();
