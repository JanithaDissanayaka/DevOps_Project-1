
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
                        sh 'terraform init'
                        sh 'terraform apply --auto-approve'
                    }
                }
            }
        }


    }
}
