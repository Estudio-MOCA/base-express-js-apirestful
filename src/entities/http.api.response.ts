import { GlobalHelper } from "../helpers";
import { env } from "../helpers/env";

/**
 * Entidad de dominio para responses
 */
export class HttpApiResponse {
  public data: any = null;
  public error?: {
    code: string,
    message: string,
    exception?: any,
  }
  public time: number;
  public message: string = "";

  constructor(args: {
    data: any,
    error?: {
      code: string,
      message: string,
      exception?: any,
    },
    time: number,
    message?: string
  }) {
    this.data = args.data;
    this.error = args.error;
    this.time = args.time;
    this.message = args.message || "";

    if (GlobalHelper.parseToBoolean(env("DEBUG", false))) {
      this.error = null;
      this.time = null;
    }
  }
}


