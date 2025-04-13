import app from './app';

const PORT = process.env.PORT || 3000;

const startServer = () => {
  try {
    
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
  }
};

startServer();