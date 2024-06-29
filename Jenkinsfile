


pipeline {
    agent any
    
    
    stages {
        stage('Cleanup Previous Containers and Images') {
            steps {
                script {
                    sh 'docker stop $(docker ps -q) || true'
                    sh 'docker rm $(docker ps -a -q) || true'
                    sh 'docker rmi -f $(docker images -q) || true'
                }
            }
        }
        stage('SCM Checkout') {
            steps {
                retry(10) {
                    git branch: 'main', url: 'https://github.com/Sulakshani99/CartHome.lk-Web-Application'
                }
            }
        }
        stage('Build Docker Images') {
            steps {
                sh 'docker build --no-cache -t bawantha395/carthomelk-frontend:${BUILD_NUMBER} frontend'
                sh 'docker build --no-cache -t bawantha395/carthomelk-backend:${BUILD_NUMBER} backend'
            }
        }
        stage('Login to Docker Hub') {
            steps {
                withCredentials([string(credentialsId: 'mern-dockerhubpassword', variable: 'DOCKERHUB_PASS')]) {
                    script {
                        sh "echo '${DOCKERHUB_PASS}' | docker login -u bawantha395 --password-stdin"
                    }
                }
            }
        }
        stage('Push Docker Images') {
            steps {
                sh 'docker push bawantha395/carthomelk-frontend:${BUILD_NUMBER}'
                sh 'docker push bawantha395/carthomelk-backend:${BUILD_NUMBER}'
            }
        }
    }
    post {
        success {
            build job: 'MERN-App-CartHome-CD-Pipeline', parameters: [string(name: 'BUILD_NUMBER', value: BUILD_NUMBER)]
        }
    }
}


