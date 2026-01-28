pipeline{
    agent any

    stages{
        stage('Build next application'){
            steps{
                script{
                   sh "npm install"
                   sh "npm build"

                }
            }
        }
    }
}
