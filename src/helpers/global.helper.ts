export class GlobalHelper {
  static normalizePort(val: number | string): number | string | boolean {
    const port: number = (typeof val === "string") ? parseInt(val, 10) : val;
    if (isNaN(port)) {
      return val;
    } else if (port >= 0) {
      return port;
    } else {
      return false;
    }
  }

  static parseToBoolean(val: any): boolean {
    if (val === "true" || val === "1" || val === "on" || val === "yes") {
      return true;
    } else if (val === "false" || val === "0" || val === "off" || val === "no") {
      return false;
    } else {
      return !!val;
    }
  }
}