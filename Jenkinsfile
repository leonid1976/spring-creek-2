pipeline {
    agent any
    environment {
        AWS_ACCOUNT_ID="349887150914"
        AWS_DEFAULT_REGION="ap-southeast-2" 
        CLUSTER_NAME="spring-creek-live"
        SERVICE_NAME="spring-creek-jenkins"
        TASK_DEFINITION_NAME="spring-creek-jenkins"
        DESIRED_COUNT="1"
        IMAGE_REPO_NAME="container-spring-creek"
        IMAGE_TAG="${env.BUILD_ID}"
        REPOSITORY_URI = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com/${IMAGE_REPO_NAME}"
        registryCredential = "CHANGE_ME"
    }
   
    stages {

    // Tests
    stage('Unit Tests') {
      steps{
        echo 'Testing..'
      }
    }
        
    // Building Docker images
    stage('Building image') {
      steps{
        script {
          dockerImage = docker.build "${IMAGE_REPO_NAME}:${IMAGE_TAG}"
        }
      }
    }
   
    // Uploading Docker images into AWS ECR
    stage('Pushing to ECR') {
     steps{  
         script {
			docker.withRegistry("https://" + REPOSITORY_URI, "ecr:${AWS_DEFAULT_REGION}:" + registryCredential) {
                    	dockerImage.push()
                	}
         }
        }
      }
      
    stage('Deploy') {
     steps{
            withAWS(credentials: registryCredential, region: "${AWS_DEFAULT_REGION}") {
                script {
			sh './script.sh'
                }
            } 
        }
      }      
      
    }
}