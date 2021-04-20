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
      if(env.BRANCH_NAME == 'master'){
        sh 'docker compose up'
        
      }
    }
  }
  catch (err) {
    throw err
  }
}