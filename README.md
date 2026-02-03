project: DevOps CI/CD Pipeline on AWS EKS

description:
  This project demonstrates an end-to-end DevOps pipeline that builds, containerizes, provisions infrastructure, and deploys an application to Kubernetes (EKS) on AWS.

tech_stack:
  - Jenkins (CI/CD)
  - Docker
  - Kubernetes (EKS)
  - Terraform
  - Ansible
  - AWS
  - Next.js

pipeline_flow:
  - Code pushed to GitHub
  - Jenkins builds and tests the app
  - Docker image is created and pushed to registry
  - Terraform provisions AWS infrastructure
  - Ansible deploys the application to EKS
  - Application is exposed using NGINX Ingress

project_structure:
  - Ansible: Kubernetes deployment playbooks
  - Terraform: AWS infrastructure as code
  - Dockerfile: Application container image
  - Jenkinsfile: CI/CD pipeline definition
  - web-app.yaml: Kubernetes Deployment, Service, and Ingress

deploy infrastructure:
  steps:
    - cd Terraform
    - terraform init
    - terraform apply

deploy application:
  steps:
    - cd Ansible
    - ansible-playbook deploy-to-eks-cluster.yaml

security:
  No credentials or secrets are stored in this repository.Sensitive data is handled using environment variables and Jenkins credentials.

purpose:
  - Demonstrate CI/CD automation
  - Show Infrastructure as Code with Terraform
  - Use Docker for containerization
  - Deploy applications to Kubernetes on AWS
