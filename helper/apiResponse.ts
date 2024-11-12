export class APIResponse {
  status: string;
  message: string | null;
  data: string | null;

  constructor(
    statusCode: number,
    message: string | null = null,
    data: any | null
  ) {
    this.status = statusCode <= 400 ? "success" : "error";
    this.message = message;
    this.data = data;
  }
}

export default APIResponse;