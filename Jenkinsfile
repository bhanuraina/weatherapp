node {
  try {
    stage('Checkout') {
      checkout scm
    }
    stage('Environment') {
      sh 'git --version'
      echo "Branch: ${BRANCH_NAME}"
      sh 'docker -v'
      sh 'printenv'
    }
    
    stage('Deploy'){
      if(BRANCH_NAME == 'master'){
        sh 'docker compose up'
        
      }
    }
  }
  catch (err) {
    throw err
  }
}
