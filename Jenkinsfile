pipeline {
    agent any

    tools {
        nodejs 'node'
    }

    stages {
        stage('Check Node') {
            steps {
                sh 'which node'
                sh 'node -v'
                sh 'npm -v'
            }
        }

        stage('Build next application') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
    }
}
