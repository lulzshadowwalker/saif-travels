export interface PaginationParams {
  page?: number;
  perPage?: number;
}

export interface SortParams {
  sortBy?: string;
  sortDirection?: 'asc' | 'desc';
}

export interface FilterParams {
  [key: string]: any;
}

export interface ApiQueryParams extends PaginationParams, SortParams, FilterParams {}

/**
 * Builds a query string from the given parameters
 */
export function buildQueryString(params: ApiQueryParams): string {
  const searchParams = new URLSearchParams();

  // Handle pagination
  if (params.page) {
    searchParams.append('page', params.page.toString());
  }
  if (params.perPage) {
    searchParams.append('per_page', params.perPage.toString());
  }

  // Handle sorting
  if (params.sortBy) {
    searchParams.append('sort', params.sortDirection === 'desc' ? `-${params.sortBy}` : params.sortBy);
  }

  // Handle other filters
  Object.entries(params).forEach(([key, value]) => {
    if (!['page', 'perPage', 'sortBy', 'sortDirection'].includes(key) && value !== undefined && value !== null) {
      if (Array.isArray(value)) {
        value.forEach(v => searchParams.append(`${key}[]`, v.toString()));
      } else {
        searchParams.append(key, value.toString());
      }
    }
  });

  const queryString = searchParams.toString();
  return queryString ? `?${queryString}` : '';
}

/**
 * Returns a query string for fetching all records (with a high per_page value)
 */
export function getAllRecordsQuery(): string {
  return buildQueryString({ perPage: 9999 });
}

/**
 * Extracts pagination metadata from API response
 */
export function extractPaginationMeta(meta?: any) {
  return {
    currentPage: meta?.current_page || 1,
    from: meta?.from || 0,
    lastPage: meta?.last_page || 1,
    perPage: meta?.per_page || 15,
    to: meta?.to || 0,
    total: meta?.total || 0,
  };
}
