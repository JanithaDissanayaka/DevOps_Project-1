
pipeline{
    agent any

    tools {
        nodejs 'node'
    }

    environment {
        IMAGE = 'janithadissanayaka/learn:burger'
        AWS_REGION = 'ap-south-1'
        CLUSTER_NAME = 'app-cluster'
        DOCKER_EMAIL='janithadissnayakaa@gmail.com'
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

        /*stage('Docker Build & Push') {
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
        }*/

        stage('Provision Server') {
    agent {
        docker {
            // This image is Alpine-based
            image 'hashicorp/terraform:1.6'
            args '--entrypoint="" -u root'
        }
    }
    steps {
        withCredentials([
            [$class: 'AmazonWebServicesCredentialsBinding', credentialsId: 'AWS_CRED']
        ]) {
            dir('Terraform') {
                sh '''
                    # 1. Install AWS CLI and curl (needed for kubectl)
                    apk add --no-cache aws-cli curl

                    # 2. Install kubectl manually
                    curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
                    chmod +x kubectl
                    mv kubectl /usr/local/bin/

                    # 3. Run Terraform
                    terraform init
                    terraform apply --auto-approve
                    
                    # 4. Update Kubeconfig
                    aws eks update-kubeconfig --region $AWS_REGION --name $CLUSTER_NAME --kubeconfig $WORKSPACE/kubeconfig
                    
                    # 5. Verify connectivity
                    kubectl get nodes --kubeconfig $WORKSPACE/kubeconfig
                '''
            }
        }
    }
}

stage('Deploy to EKS with Ansible') {
    agent {
        docker {
            // Used docker:cli to keep docker.sock access, but we must install Ansible
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
                # 1. Install dependencies for Ansible
                apk add --no-cache python3 py3-pip curl
                
                # 2. Install Ansible and Kubernetes python library (needed for K8s modules)
                # --break-system-packages is needed on newer Alpine versions
                pip3 install ansible kubernetes --break-system-packages

                # 3. Install kubectl (required for Ansible k8s module under the hood)
                curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
                install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl

                # 4. Setup Environment
                export KUBECONFIG=$WORKSPACE/kubeconfig
                # Fixed syntax for echo/base64 to ensure cleaner output
                AUTH_STRING=$(echo -n "$DOCKER_USER:$DOCKER_PASS" | base64)
                export DOCKER_CONFIG_JSON=$(echo -n '{"auths":{"https://index.docker.io/v1/":{"username":"'$DOCKER_USER'","password":"'$DOCKER_PASS'","email":"email@example.com","auth":"'$AUTH_STRING'"} }}' | base64 -w 0)

                # 5. Run Ansible
                cd Ansible
                ansible-playbook deploy-to-eks-cluster.yaml
            '''
        }
    }
}



    }
}
