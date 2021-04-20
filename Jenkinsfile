node {
  try {
    stage('Checkout') {
      checkout scm
    }
    stage('Environment') {
      sh 'git --version'
      echo "Branch: ${env.BRANCH_NAME}"
      sh 'docker -v'
      sh 'printenv'
    }
    
    stage('Deploy'){
     
        sh '/usr/local/bin/docker-compose/docker-compose up'
        
      
    }
  }
  catch (err) {
    throw err
  }
}
