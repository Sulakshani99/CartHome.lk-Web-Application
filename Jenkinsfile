
// pipeline {
//     agent any
    
//     stages {
//         stage('SCM Checkout') {
//             steps {
//                 retry(10) {
//                     git branch: 'main', url: 'https://github.com/Sulakshani99/CartHome.lk-Web-Application'
//                 }
//             }
//         }
//         stage('Build Docker Images') {
//             steps {
//                 sh 'docker build --no-cache -t bawantha395/carthomelk-frontend:${BUILD_NUMBER} frontend'
//                 sh 'docker build --no-cache -t bawantha395/carthomelk-backend:${BUILD_NUMBER} backend'
//             }
//         }
//         stage('Login to Docker Hub') {
//             steps {
//                 withCredentials([string(credentialsId: 'mern-dockerhubpassword', variable: 'DOCKERHUB_PASS')]) {
//                     script {  
//                         sh "echo '${DOCKERHUB_PASS}' | docker login -u bawantha395 --password-stdin"
//                     }
//                 }
//             }
//         }
//         stage('Push Docker Images') {
//             steps {
//                 sh 'docker push bawantha395/carthomelk-frontend:${BUILD_NUMBER}'
//                 sh 'docker push bawantha395/carthomelk-backend:${BUILD_NUMBER}'
//             }
//         }
//         stage('Deploy with Docker Compose') {
//             steps {
//                 script {
//                     sh 'docker-compose down'
//                     sh 'docker-compose up -d --force-recreate'
//                 }
//             }
//         }
//         stage('Cleanup Old Images') {
//             steps {
//                 sh 'docker image prune -f'
//             }
//         }
//     }
//     post {
//         always {
//             sh 'docker logout'
//         }
//     }
// }


pipeline {
    agent any
    
    environment {
        TAG_NAME = "${BUILD_NUMBER}"
    }
    
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
                sh 'docker build --no-cache -t bawantha395/carthomelk-frontend:${TAG_NAME} frontend'
                sh 'docker build --no-cache -t bawantha395/carthomelk-backend:${TAG_NAME} backend'
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
                sh 'docker push bawantha395/carthomelk-frontend:${TAG_NAME}'
                sh 'docker push bawantha395/carthomelk-backend:${TAG_NAME}'
            }
        }
        stage('Pull Docker Images') {
            steps {
                sh 'docker pull bawantha395/carthomelk-frontend:${TAG_NAME}'
                sh 'docker pull bawantha395/carthomelk-backend:${TAG_NAME}'
            }
        }
        stage('Run Containers') {
            steps {
                sh 'docker run -d --name frontend -p 3000:3000 bawantha395/carthomelk-frontend:${TAG_NAME}'
                sh 'docker run -d --name backend -p 3001:3001 bawantha395/carthomelk-backend:${TAG_NAME}'
            }
        }
    }
    post {
        always {
            sh 'docker logout'
        }
        cleanup {
            sh 'docker stop $(docker ps -a -q)'
            sh 'docker rm $(docker ps -a -q)'
        }
    }
}
