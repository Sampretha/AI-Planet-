FROM python:3.9-slim

# Install dependencies
RUN apt-get update && apt-get install -y python3-pip

# Set the working directory
WORKDIR /app

# Copy the requirements file
COPY requirements.txt .

# Install required Python packages
RUN pip install -r requirements.txt

# Copy the rest of the application code
COPY . .

# Expose the Flask port
EXPOSE 5000

# Run the Flask server
CMD ["python", "api_wrapper.py"]
