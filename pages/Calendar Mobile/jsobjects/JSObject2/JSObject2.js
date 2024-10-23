export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
		return moment().toDate()
	},
	 generateRSAKeyPair(keySize = 2048) {
  const keypair = forge.pki.rsa.generateKeyPair(keySize); // Generate RSA key pair with provided key size
  
  // Convert keys to PEM format for easy use
  const publicKeyPem = forge.pki.publicKeyToPem(keypair.publicKey);
  const privateKeyPem = forge.pki.privateKeyToPem(keypair.privateKey);
  
  return {
    publicKey: publicKeyPem,
    privateKey: privateKeyPem
  };
}
}
	