hotkeys("a,h,p,b,c", function (event, handler) {
  switch (handler.key) {
    case "a":
      window.open("/#About", "_self");
      break;
    case "h":
      window.open("/", "_self");
      break;
    case "p":
      window.open("/#Project", "_self");
      break;
    case "b":
      window.open("/blog", "_self");
      break;
    case "c":
      window.open("https://discord.com/users/718259600117465158", "_self");
      break;
    default:
      alert(event);
  }
});
