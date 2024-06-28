
pipeline {
    agent any
    
    stages {
        stage('SCM Checkout') {
            steps {
                retry(10) {
                    git branch: 'main', url: 'https://github.com/Sulakshani99/CartHome.lk-Web-Application'
                }
            }
        }
        stage('Build Docker Images') {
            steps {
                sh 'docker build -t bawantha395/carthomelk-frontend:${BUILD_NUMBER} frontend'
                sh 'docker build -t bawantha395/carthomelk-backend:${BUILD_NUMBER} backend'
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
        stage('Deploy with Docker Compose') {
            steps {
                script {
                    sh 'docker-compose up -d'
                }
            }
        }
    }
    post {
        always {
            sh 'docker logout'
        }
    }
}
