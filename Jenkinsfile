@Library('github.com/leonid1976/spring-creek') _

pipeline {
  environment {
    REPOSITORY_URI = '349887150914.dkr.ap-southeast-2.amazonaws.com/container-spring-creek'
    SERVICE_NAME = 'container-spring-creek'
    TASK_FAMILY="container-spring-creek" // at least one container needs to have the same name as the task definition
    DESIRED_COUNT="1"
    CLUSTER_NAME = "spring-creek-live"
    SHORT_COMMIT = "${GIT_COMMIT[0..7]}"
    AWS_ID = credentials("ssh-jenkins-aws-beanstalk")
    AWS_ACCESS_KEY_ID = "${env.AWS_ID_USR}"
    AWS_SECRET_ACCESS_KEY = "${env.AWS_ID_PSW}"
    AWS_DEFAULT_REGION = "ap-southeast-2"
    EXECUTION_ROLE_ARN = "arn:aws:iam::349887150914:role/ecsTaskExecutionRole"
  }

    agent any

    stages {
        stage('Build image') {
            steps {
                script {
                    // Build image in the top directory
                    def dockerImage = docker.build("$REPOSITORY_URI", ".")
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Publish Image to ECR') {
            steps{
                script {
                    withElasticContainerRegistry {
                        // Push to ECR
                        docker.image("$REPOSITORY_URI").push("$SHORT_COMMIT")
                    }
                }
            }
        }
        stage('Deploy Image to ECS') {
            steps{
                // prepare task definition file
                sh """sed -e "s;%REPOSITORY_URI%;${REPOSITORY_URI};g" -e "s;%SHORT_COMMIT%;${SHORT_COMMIT};g" -e "s;%TASK_FAMILY%;${TASK_FAMILY};g" -e "s;%SERVICE_NAME%;${SERVICE_NAME};g" -e "s;%EXECUTION_ROLE_ARN%;${EXECUTION_ROLE_ARN};g" taskdef_template.json > taskdef_${SHORT_COMMIT}.json"""
                script {
                    // Register task definition
                    AWS("ecs register-task-definition --output json --cli-input-json file://${WORKSPACE}/taskdef_${SHORT_COMMIT}.json > ${env.WORKSPACE}/temp.json")
                    def projects = readJSON file: "${env.WORKSPACE}/temp.json"
                    def TASK_REVISION = projects.taskDefinition.revision

                    // update service
                    AWS("ecs update-service --cluster ${CLUSTER_NAME} --service ${SERVICE_NAME} --task-definition ${TASK_FAMILY}:${TASK_REVISION} --desired-count ${DESIRED_COUNT}")
                }
            }
        }
        stage('Remove docker image') {
            steps{
                // Remove images
                sh "docker rmi $REPOSITORY_URI"
            }
        }
    }
}
