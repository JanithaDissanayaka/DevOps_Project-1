
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
                            terraform init
                            terraform apply --auto-approve
                            aws eks update-kubeconfig --region $AWS_REGION --name $CLUSTER_NAME --kubeconfig $WORKSPACE/kubeconfig
                            kubectl get nodes
                        '''
                            }
                        }
                    }
                }

        stage('Deploy to EKS with Ansible') {
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
                      
                        export KUBECONFIG=$WORKSPACE/kubeconfig
                        export DOCKER_CONFIG_JSON=$(echo -n '{"auths":{"https://index.docker.io/v1/":{"username":"'$DOCKER_USER'","password":"'$DOCKER_PASS'","email":"'$DOCKER_EMAIL'","auth":"'$(echo -n $DOCKER_USER:$DOCKER_PASS | base64)'"} }}' | base64 -w 0)

                        cd Ansible
                        ansible-playbook deploy-to-eks-cluster.yaml
                    '''
                }
            }
        }



    }
}
