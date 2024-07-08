document.getElementById('encryptBtn').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const encryptedText = encrypt(inputText);
    document.getElementById('outputText').value = encryptedText;
});

document.getElementById('decryptBtn').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const decryptedText = decrypt(inputText);
    document.getElementById('outputText').value = decryptedText;
});

document.getElementById('copyBtn').addEventListener('click', () => {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado!');
});

document.getElementById('resetBtn').addEventListener('click', () => {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').value = '';
});

function encrypt(text) {
    let encryptedText = text.toLowerCase();
    encryptedText = encryptedText.replace(/e/g, 'enter');
    encryptedText = encryptedText.replace(/i/g, 'imes');
    encryptedText = encryptedText.replace(/a/g, 'ai');
    encryptedText = encryptedText.replace(/o/g, 'ober');
    encryptedText = encryptedText.replace(/u/g, 'ufat');
    return encryptedText;
}

function decrypt(text) {
    let decryptedText = text.toLowerCase();
    decryptedText = decryptedText.replace(/enter/g, 'e');
    decryptedText = decryptedText.replace(/imes/g, 'i');
    decryptedText = decryptedText.replace(/ai/g, 'a');
    decryptedText = decryptedText.replace(/ober/g, 'o');
    decryptedText = decryptedText.replace(/ufat/g, 'u');
    return decryptedText;
}
