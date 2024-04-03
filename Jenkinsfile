pipeline {
    agent any
    
    environment {
        // Fetch GitHub host key and add it to known hosts
        SSH_KEY = sh(script: 'ssh-keyscan -t rsa github.com', returnStdout: true).trim()
    }

    parameters {
        choice choices: ['TEST', 'QA', 'PREPRODUCTION', 'PRODUCTION'], 
        name: 'ENVIRONMENT',
        description: 'Choose your environment'

        string defaultValue: 'espresso', 
        name: 'APP',
        description: 'Enter the name of your application'

        choice choices: ['ECR', 'DOCKERHUB'], 
        name: 'REGISTRY',
        description: "Where is your docker image stored?"
    }
    
    stages {
        stage('build') {
            when {
                expression { 
                    env.APP == 'odilia'
                }
            }
            steps {
                echo 'Hello World'
            }
        }

        stage('test') {
            steps {
                // Checkout the repository where the Jenkinsfile resides
                checkout scm
                
                echo 'Hello World'
            }
        }

        stage('deploy') {
            steps {
                echo 'Hello World'
            }
        }
    }
    
    post {
        always {
            // Cleanup by removing SSH key
            deleteDir()
        }
    }
}
