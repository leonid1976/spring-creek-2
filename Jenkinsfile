pipeline {
    agent any
    environment {
        AWS_ACCOUNT_ID="349887150914"
        AWS_DEFAULT_REGION="ap-southeast-2" 
        CLUSTER_NAME="spring-creek-live-2"
        SERVICE_NAME="spring-creek-live-2-service"
        TASK_DEFINITION_NAME="first-run-task-definition"
        DESIRED_COUNT="1"
        IMAGE_REPO_NAME="spring-creek-live"
        IMAGE_TAG="${env.BUILD_ID}"
        REPOSITORY_URI = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com/${IMAGE_REPO_NAME}"
        registryCredential = "Jenkins-AWS-global"
    }
   
    stages {

    // Tests
    stage('Unit Tests') {
      steps{
        echo 'Testing..'
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
			// sh './script.sh'
        echo 'build TAG'
        echo $IMAGE_TAG

        ROLE_ARN="aws ecs describe-task-definition --task-definition ${TASK_DEFINITION_NAME} --region ${AWS_DEFAULT_REGION}" | jq .taskDefinition.executionRoleArn
        echo "ROLE_ARN= " $ROLE_ARN

        FAMILY="aws ecs describe-task-definition --task-definition ${TASK_DEFINITION_NAME} --region ${AWS_DEFAULT_REGION}" | jq .taskDefinition.family
        echo "FAMILY= " $FAMILY

        NAME="aws ecs describe-task-definition --task-definition ${TASK_DEFINITION_NAME} --region ${AWS_DEFAULT_REGION}" | jq .taskDefinition.containerDefinitions[].name
        echo "NAME= " $NAME

        sed -i "s#BUILD_NUMBER#$IMAGE_TAG#g" task-definition.json
        sed -i "s#REPOSITORY_URI#$REPOSITORY_URI#g" task-definition.json
        sed -i "s#ROLE_ARN#$ROLE_ARN#g" task-definition.json
        sed -i "s#FAMILY#$FAMILY#g" task-definition.json
        sed -i "s#NAME#$NAME#g" task-definition.json




        aws ecs register-task-definition --cli-input-json file://task-definition.json --region="${AWS_DEFAULT_REGION}"

        REVISION="aws ecs describe-task-definition --task-definition ${TASK_DEFINITION_NAME} --region ${AWS_DEFAULT_REGION}" | jq .taskDefinition.revision
        echo "REVISION= " "${REVISION}"
        aws ecs update-service --cluster "${CLUSTER_NAME}" --service "${SERVICE_NAME}" --task-definition "${TASK_DEFINITION_NAME}":"${REVISION}" --desired-count "${DESIRED_COUNT}"
                }
            } 
        }
      }      
      
    }
}