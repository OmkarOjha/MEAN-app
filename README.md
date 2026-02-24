                                                 🚀 MEAN Stack Application Deployment Guide

This repository contains a fully containerized MEAN (MongoDB, Express, Angular, Node.js) application deployed on AWS EC2 with CI/CD automation and Nginx reverse proxy configuration.

This document provides step-by-step setup and deployment instructions.



<img width="1536" height="1024" alt="image" src="https://github.com/user-attachments/assets/48146c94-2070-42f1-bf67-23eb4e67d3bd" />

        

                                                                 
                                                                 
                                                                 
                                                                 **📌 Prerequisites**

- Before starting, ensure you have:

- Docker installed

- Docker Compose installed

- Git installed

- AWS EC2 instance (Ubuntu recommended)

- Docker Hub account

- GitHub repository


                                                   **  🐳 STEP 1 — Dockerizing the Application
                1️⃣ Backend Setup**

Create a Dockerfile inside the backend directory.

Configure the container to:

Use Node.js base image

Install dependencies

Copy application files

Expose backend port

Start the backend server



<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/ea94b219-e316-4ee0-843a-3416d101f7a2" />  


<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/19542dd1-1f7e-4b64-a890-8a4d4c93b01e" />


<img width="959" height="512" alt="image" src="https://github.com/user-attachments/assets/08f8d3e3-bc40-47db-80f1-b90c49d8294f" />


                     
                        
                        
  
    
    **                    2️⃣ Frontend Setup**

Create a multi-stage Dockerfile inside the frontend directory.

Build the Angular production build.

Use Nginx to serve static files.

Expose port 80 inside the container.




<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/205bb1d5-4b37-44f4-86c3-2fbaa1ff1022" />



                                                       
                                                       
                                                       
                                                       
                                                       
                                                       **📦 STEP 2 — Docker Compose Configuration**

Create a docker-compose.yml file in the project root.

Define services for:

MongoDB

Backend

Frontend

Configure:

Service dependencies

Environment variables for database connection

Docker volumes for MongoDB persistence

Internal networking between containers




<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/0d3f2771-da7c-42dc-9574-63acb1190b76" />





                                              
                                              
                                              
                                              **▶ STEP 3 — Running the Application Locally**

From the project root directory:

Build and start all containers using Docker Compose.

Verify containers are running.

Access the frontend in your browser.

Confirm backend API functionality.

Ensure MongoDB is properly connected.



<img width="1906" height="991" alt="Screenshot 2026-02-24 003116" src="https://github.com/user-attachments/assets/aaef66de-e1c1-419d-a07f-abb7f94e81e0" />

<img width="1919" height="1079" alt="Screenshot 2026-02-24 012904" src="https://github.com/user-attachments/assets/39bf1634-b0d8-408d-97b3-835fec596ac5" />

<img width="1913" height="1072" alt="Screenshot 2026-02-24 013017" src="https://github.com/user-attachments/assets/529b8c6d-3a2e-44d9-9335-3e95df84b822" />

<img width="1919" height="1079" alt="Screenshot 2026-02-24 013238" src="https://github.com/user-attachments/assets/50853eeb-6ec0-492a-acfb-160c78e129c7" />

<img width="1341" height="667" alt="Screenshot 2026-02-24 023100" src="https://github.com/user-attachments/assets/f74b88f9-06d6-49a1-8ff2-b39e3f664492" />





                                                                             
                                                                             **🗄 STEP 4 — MongoDB Configuration**

Install MongoDB on Ubuntu EC2.

Start and enable MongoDB service.

Configure MongoDB to listen on the required interface.

Update backend connection string.

Verify connection via backend logs.


<img width="1919" height="580" alt="Screenshot 2026-02-24 103335" src="https://github.com/user-attachments/assets/085dabf8-e33b-47f2-9fbf-d7197d6123ce" />

<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/8d4c62f1-f8bd-4dd3-9bb3-59c5b4a652cf" />

<img width="1919" height="1077" alt="image" src="https://github.com/user-attachments/assets/d1b2faeb-c8b2-48d9-ba37-fc577f90abe6" />

<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/c46923c7-e7b4-446d-96d6-58a0864e784c" />





                                              **   ☁ STEP 5 — Deploying on AWS EC2
**
Launch Ubuntu EC2 instance.

Install Docker and Docker Compose.

Clone project repository on EC2.

Pull Docker images from Docker Hub.

Start containers using Docker Compose.

Configure AWS Security Group:

Allow Port 80 (HTTP)

Allow Port 22 (SSH)

Verify application accessibility via public IP.



<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/bedcbad2-ad0c-4e27-856f-1eae65d3fb5e" />

<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/ce807f15-a76a-48ba-a9df-16348b540444" />

<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/83c7b658-a3d8-47bc-990e-a7cff7b8a43e" />





    
                                               
                                               **   🔁 STEP 6 — Setting Up CI (Continuous Integration)
 
**Objective: Automatically build and push Docker images when code is pushed to GitHub.

**Steps:
**
Create a GitHub Actions workflow file.

Configure workflow to trigger on push to main branch.

Add Docker Hub credentials as repository secrets.

Configure workflow to:

Checkout repository

Login to Docker Hub

Build backend image

Build frontend image

Push images to Docker Hub

Verify images appear in Docker Hub after successful workflow run.



<img width="1912" height="1073" alt="Screenshot 2026-02-24 131857" src="https://github.com/user-attachments/assets/66f6d869-668e-42d4-9b6f-8faae8ceb8e5" />

<img width="1919" height="1078" alt="Screenshot 2026-02-24 131912" src="https://github.com/user-attachments/assets/da686207-f413-4c8d-a2ce-a259befe8609" />

<img width="1919" height="1079" alt="Screenshot 2026-02-24 131948" src="https://github.com/user-attachments/assets/4ee5277c-6eef-4caf-80bf-cffb8de7e436" />




                                            
                                            **🚀 STEP 7 — Setting Up CD (Continuous Deployment)**

Objective: Automatically deploy updated images to EC2.

Steps:

Add EC2 credentials (host, user, SSH key) as GitHub secrets.

Update GitHub Actions workflow to:

SSH into EC2

Pull latest Docker images

Restart containers using Docker Compose

Push changes to GitHub.

Verify containers restart automatically on EC2.

Deployment is now fully automated.




<img width="1919" height="1079" alt="Screenshot 2026-02-24 132003" src="https://github.com/user-attachments/assets/e2668798-ba6d-4c9e-99d9-2cba3ea93f75" />

<img width="1919" height="1079" alt="Screenshot 2026-02-24 132556" src="https://github.com/user-attachments/assets/53da49bf-9b85-4ef6-8af2-73f7f9562517" />

<img width="1919" height="1073" alt="Screenshot 2026-02-24 132610" src="https://github.com/user-attachments/assets/41a22252-e64e-42a8-b14f-a9cec6ff3c46" />

<img width="1919" height="1079" alt="Screenshot 2026-02-24 132703" src="https://github.com/user-attachments/assets/6279fd13-c3a2-4fa8-b025-53358cded411" />




                                                        
                                                        
                                                        **🌐 STEP 8 — Configuring Nginx Reverse Proxy**

Objective: Expose the entire application through Port 80 only.

Steps:

Remove public exposure of backend and MongoDB ports.

Add a new Nginx service in Docker Compose.

Create a custom Nginx configuration file.

Configure routing rules:

/ → Frontend

/api → Backend

Restart containers.

Update AWS Security Group to allow only Port 80.

Verify application works via public IP without port numbers.



<img width="1919" height="1079" alt="Screenshot 2026-02-24 133005" src="https://github.com/user-attachments/assets/878956a0-0363-40d5-9e1d-3075f4ea46ba" />

<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/fbf06fa3-0923-4441-8b8d-394a4ba6c58d" />

<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/76490947-788d-4d1b-b0ff-72df0252627e" />

<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/e57d554b-2904-4d5e-9467-ae08eb1d6d1b" />






  
                                                    **     🏗 Final Architecture

**Browser
→ EC2 Port 80
→ Nginx Reverse Proxy
→ Frontend Container
→ Backend Container
→ MongoDB

Only Port 80 is publicly accessible.




<img width="1536" height="1024" alt="image" src="https://github.com/user-attachments/assets/48146c94-2070-42f1-bf67-23eb4e67d3bd" />

<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/1b9abf95-37e4-410c-a1f5-ac2be1797aa7" />






                                                       **🔐 Security Considerations
**
Backend and database ports are not publicly exposed.

Only HTTP (80) and SSH (22) are allowed in Security Group.

Credentials are stored securely in GitHub Secrets.

Internal Docker networking is used for service communication.

🎯 Deployment Verification Checklist

After deployment, verify:

Containers are running

Reverse proxy is active

Frontend loads successfully

Backend APIs respond via /api

MongoDB is connected

CI pipeline passes on push

CD updates application automatically
