pipeline {

  environment {
    PATH = "/usr/local/bin:$PATH"
    dockerimagename = "tanreaper/dplab"
    dockerImage = ""
  }
  agent any
  stages {
    stage('Git checkout') {
      steps {
        git(branch: 'main', 
            url: "https://github.com/tanreaper/dplab.git")
        }
    }
    stage('Docker Build and Push') {
      steps {
        script{
          withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId:'dockerhub-credentials', usernameVariable: 'DOCKER_USERNAME', passwordVariable:'DOCKER_PASSWORD']]) {
            dockerImage = docker.build dockerimagename
            sh "docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD"
            sh "docker push tanreaper/dplab"
          }
        }
      }
    } 
    stage('Deploy to Minikube') {
      steps {
        sh '/usr/local/bin/kubectl apply -f Iaac/deployment.yaml'
        sh '/usr/local/bin/kubectl apply -f Iaac/service.yaml'
      }
    }  
  }

}