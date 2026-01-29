pipeline{
    agent any

    tools {
        nodejs 'node'
    }

    stages{
        stage('Build next application'){
            steps{
                script{
                   sh "npm install"
                   sh "npm run build"

                }
            }
        }
    }
}