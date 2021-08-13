export interface Movies {
  results: [
    {
      adult: boolean;
      backdrop_path: string;
      popularity: number;
      vote_count: number;
      video: boolean;
      poster_path: string;
      id: number;
      original_language: string;
      original_title: string
    }
    ];
  page: number;
  total_results: number;
  }
