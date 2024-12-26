import { API_URL } from './config';

class ApiClient {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    try {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to parse JSON: ${error.message}`);
      } else {
        throw new Error(`An unknown error occurred.`);
      }
    }
  }

  public async get<T>({
    endpoint,
    queryParams
  }: {
    endpoint: string;
    queryParams?: Record<string, string>;
  }): Promise<T> {
    const url = new URL(this.url + endpoint);

    if (queryParams) {
      Object.entries(queryParams).forEach(([key, value]) =>
        url.searchParams.append(key, value)
      );
    }

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return this.handleResponse<T>(response);
  }
}

export const apiClient = new ApiClient(API_URL);
