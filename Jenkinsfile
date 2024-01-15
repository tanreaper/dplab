pipeline {
  environment {
    dockerimagename = "tanreaper/dplab"
    dockerImage = ""
  }
  agent any
  stages {
    stage('Checkout Source') {
      steps {
         git(branch: 'main', 
            url: "https://github.com/tanreaper/dplab.git")
        }
    }
    stage('Build image') {
      steps{
        script {
          dockerImage = docker.build dockerimagename
        }
      }
    }
    stage('Pushing Image') {
      environment {
          registryCredential = 'dockerhub-credentials'
           }
      steps{
        script {
          docker.withRegistry( 'https://registry.hub.docker.com', registryCredential ) {
            dockerImage.push("latest")
          }
        }
      }
    }
    stage('Deploying React.js container to Kubernetes') {
      steps {
        script {
          sh 'kubectl apply -f Iaac/deployment.yaml'
          sh 'kubectl apply -f Iaac/service.yaml'
        }
      }
    }
  }
}