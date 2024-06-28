
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
//                 sh 'docker build -t bawantha395/carthomelk-frontend:${BUILD_NUMBER} frontend'
//                 sh 'docker build -t bawantha395/carthomelk-backend:${BUILD_NUMBER} backend'
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
        FRONTEND_IMAGE = "bawantha395/carthomelk-frontend:${BUILD_NUMBER}"
        BACKEND_IMAGE = "bawantha395/carthomelk-backend:${BUILD_NUMBER}"
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
                script {
                    sh 'docker build --no-cache -t $FRONTEND_IMAGE frontend'
                    sh 'docker build --no-cache -t $BACKEND_IMAGE backend'
                }
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
                script {
                    sh 'docker push $FRONTEND_IMAGE'
                    sh 'docker push $BACKEND_IMAGE'
                }
            }
        }
        stage('Deploy with Docker Compose') {
            steps {
                script {
                    // Create a temporary docker-compose file with updated image tags
                    sh '''
                    cat <<EOF > docker-compose.tmp.yaml
                    version: '3'
                    services:
                      backend:
                        image: $BACKEND_IMAGE
                        ports:
                          - "3001:3001"
                        depends_on:
                          - mongo
                        environment:
                          MONGO_URI: mongodb+srv://bawanthasulakshani:bawanthasulakshani@carthomelk.nu0ncxv.mongodb.net/?retryWrites=true&w=majority&appName=CartHomelk
                          JWT_TOKEN_KEY: asdhjklslwkj4567bnmsghjvbbmtyu

                      frontend:
                        image: $FRONTEND_IMAGE
                        ports:
                          - "3000:3000"
                        depends_on:
                          - backend

                      mongo:
                        image: mongo:latest
                    EOF
                    '''
                    sh 'docker-compose -f docker-compose.tmp.yaml down'
                    sh 'docker-compose -f docker-compose.tmp.yaml up -d --force-recreate'
                }
            }
        }
        stage('Cleanup Old Images') {
            steps {
                sh 'docker image prune -f'
            }
        }
    }
    post {
        always {
            sh 'docker logout'
        }
    }
}
