document.cookie = "username=John Doe";
const para = document.createElement("p");
const node = document.createTextNode(document.cookie);
para.appendChild(node);

const element = document.getElementById(cookieDisplay);
element.appendChild(para);
