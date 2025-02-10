import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,  
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',  
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,  
    borderRadius: 10,  
    marginVertical: 15,  
    width: '80%',  
    alignItems: 'center',  
    shadowColor: '#000',  
    //shadowOpacity: 0.2,
    //shadowRadius: 3.5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,    
  },
  image: {
    width: 300,   
    height: 300,  
    resizeMode: 'contain',  
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: '100%',
  },
  resultText: {
    marginTop: 20,
    fontSize: 18,
    color: '#333333',
  },
});
