
pipeline{
    agent any

    tools {
        nodejs 'node'
    }

    environment {
        IMAGE = 'janithadissanayaka/learn:burger'
    }


    stages {

        stage('Install Dependencies') {
            steps { sh 'npm install' }
        }

        stage('Run Tests') {
            steps { sh 'npm test || true' }
        }

        stage('Build') {
            steps { sh 'npm run build' }
        }

        stage('Archive Build') {
            steps {
                archiveArtifacts artifacts: '.next/**', fingerprint: true
            }
        }

        stage('Docker Build & Push') {
            agent {
                docker {
                    image 'docker:cli'
                    args '-u root -v /var/run/docker.sock:/var/run/docker.sock'
                }
            }
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'docker-registry-creds',
                        usernameVariable: 'DOCKER_USER',
                        passwordVariable: 'DOCKER_PASS'
                    )
                ]) {
                    sh '''
                      echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                      docker build -t $IMAGE .
                      docker push $IMAGE
                    '''
                }
            }
        }

        stage('Provision Server') {
    agent {
        docker {
            image 'hashicorp/terraform:1.6'
            args '--entrypoint="" -u root'
        }
    }
    steps {
        withCredentials([
            [$class: 'AmazonWebServicesCredentialsBinding',
             credentialsId: 'AWS_CRED']
        ]) {
            dir('Terraform') {
                sh '''
                    apk add --no-cache curl unzip bash

                    # Install AWS CLI v2
                    curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
                    unzip awscliv2.zip
                    ./aws/install

                    # Install kubectl
                    curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
                    chmod +x kubectl
                    mv kubectl /usr/local/bin/

                    terraform init
                    terraform apply --auto-approve

                    mkdir -p $HOME/.kube
                    aws eks update-kubeconfig --region ap-south-1 --name website-cluster

                    kubectl get nodes
                '''
                    }
                }
            }
        }



    }
}
