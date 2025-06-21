export class LaravelApiClient {
  private baseUrl: string;
  private defaultHeaders: HeadersInit;

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_LARAVEL_BASE_URL || "";
    this.defaultHeaders = {
      Accept: "application/json",
    };
  }

  async get<T = any>(endpoint: string, options?: RequestInit): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      ...options,
      headers: {
        ...this.defaultHeaders,
        ...options?.headers,
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new NotFoundError(`Resource not found: ${endpoint}`);
      }
      throw new ApiError(
        `Request failed: ${response.status} ${response.statusText}`,
        response.status
      );
    }

    return response.json();
  }

  async post<T = any>(
    endpoint: string,
    body: any,
    options?: RequestInit
  ): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      ...options,
      method: "POST",
      headers: {
        ...this.defaultHeaders,
        "Content-Type": "application/json",
        ...options?.headers,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new ApiError(
        `Request failed: ${response.status} ${response.statusText}`,
        response.status
      );
    }

    // Some endpoints might not return a body
    const contentType = response.headers.get("content-type");
    if (contentType?.includes("application/json")) {
      return response.json();
    }

    return {} as T;
  }
}

export class ApiError extends Error {
  constructor(
    message: string,
    public statusCode: number
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export class NotFoundError extends ApiError {
  constructor(message: string) {
    super(message, 404);
    this.name = "NotFoundError";
  }
}

// Singleton instance
export const laravelApiClient = new LaravelApiClient();
