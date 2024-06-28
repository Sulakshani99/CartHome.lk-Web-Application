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
                withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', usernameVariable: 'DOCKERHUB_USER', passwordVariable: 'DOCKERHUB_PASS')]) {
                    sh "echo '${DOCKERHUB_PASS}' | docker login -u ${DOCKERHUB_USER} --password-stdin"
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
        always {
            sh 'docker logout'
        }
        success {
            build job: 'MERN-App-CartHome-CD-Pipeline'
        }
    }
}
