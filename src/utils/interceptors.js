export const fetchInterceptor = async (url, options = {}) => {
    // Request interceptor: Modify request before sending
    const modifiedOptions = {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer YOUR_ACCESS_TOKEN`, // Add token dynamically
        accept: 'application/json'
      }
    };
  
    try {
      const response = await fetch(url, modifiedOptions);
  
      if (!response.ok) {
        // Response interceptor: Handle errors globally
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
      }
  
      return response.json();
    } catch (error) {
      console.error('Fetch Error:', error);
      throw error;
    }
  };
  
  // Usage in your function
  const getNowPlaying = async () => {
    try {
      const data = await fetchInterceptor('https://api.themoviedb.org/3/movie/now_playing', {
        method: 'GET'
      });
      console.log(data);
    } catch (error) {
      console.error('Error fetching now playing movies:', error);
    }
  };
  
  useEffect(() => {
    getNowPlaying();
  }, []);
  