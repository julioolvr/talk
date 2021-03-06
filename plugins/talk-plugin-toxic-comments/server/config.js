const config = {
  API_ENDPOINT: process.env.TALK_PERSPECTIVE_API_ENDPOINT || 'https://commentanalyzer.googleapis.com/v1alpha1',
  API_KEY: process.env.TALK_PERSPECTIVE_API_KEY,
  THRESHOLD: process.env.TALK_TOXICITY_THRESHOLD || 0.8,
  API_TIMEOUT: process.env.TALK_PERSPECTIVE_TIMEOUT || 300,
};

if (process.env.NODE_ENV !== 'test' && !config.API_KEY) {
  throw new Error('Please set the TALK_PERSPECTIVE_API_KEY environment variable to use the toxic-comments plugin. Visit https://www.perspectiveapi.com/ to request API access.');
}

module.exports = config;
