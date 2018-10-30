import missing from '../assets/missing.png';

export  const songInfo = (str, kind) => {
  const arry= str.split('-')
  return (kind === "title" ? arry[0] : arry[1])
}

export const randomString = (length) => {
  let text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for(let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

export const handleMissing = (str) =>{
  return (str === undefined ? missing : str );
}


