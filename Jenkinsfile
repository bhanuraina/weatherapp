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
     
        sh '/usr/local/bin/docker-compose up -d'
        
      
    }
  }
  catch (err) {
    throw err
  }
}
